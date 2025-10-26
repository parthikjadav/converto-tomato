'use client';

import { useState, useCallback } from 'react';
import { convertWebPtoICO, formatFileSize, downloadBlob, ConversionResult } from '@/lib/converter/webp/webpToIcoConverter';
import { validateFiles, FileValidationError, MAX_FILES, VALID_ICO_SIZES } from '@/lib/converter/webp/webpToIcoValidator';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UploadArea, FileCard, SummaryCard, ErrorMessage, BatchActions } from '@/components/converter/shared';
import { Info } from 'lucide-react';

interface FileWithResult {
  file: File;
  previewUrl: string;
  convertedResult: ConversionResult | null;
  isConverting: boolean;
  error: string | null;
}

export default function WebpToIcoConverter() {
  const [files, setFiles] = useState<FileWithResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [icoSize, setIcoSize] = useState<number>(32);

  const handleFilesSelect = useCallback((selectedFiles: File[]) => {
    try {
      validateFiles(selectedFiles);
      setError(null);
      const newFiles: FileWithResult[] = selectedFiles.map((file) => ({
        file,
        previewUrl: URL.createObjectURL(file),
        convertedResult: null,
        isConverting: false,
        error: null,
      }));
      setFiles((prev) => {
        prev.forEach((f) => {
          URL.revokeObjectURL(f.previewUrl);
          if (f.convertedResult?.url) URL.revokeObjectURL(f.convertedResult.url);
        });
        return newFiles;
      });
    } catch (err) {
      setError(err instanceof FileValidationError ? err.message : 'An unexpected error occurred');
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length > 0) handleFilesSelect(selectedFiles);
  };

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length > 0) handleFilesSelect(droppedFiles);
  };

  const convertSingleFile = async (index: number) => {
    const fileData = files[index];
    if (!fileData || fileData.isConverting) return;
    setFiles((prev) => prev.map((f, i) => (i === index ? { ...f, isConverting: true, error: null } : f)));
    try {
      const result = await convertWebPtoICO(fileData.file, icoSize);
      setFiles((prev) => prev.map((f, i) => (i === index ? { ...f, convertedResult: result, isConverting: false } : f)));
    } catch (err) {
      setFiles((prev) => prev.map((f, i) => i === index ? { ...f, error: err instanceof Error ? err.message : 'Conversion failed', isConverting: false } : f));
    }
  };

  const convertAllFiles = async () => {
    for (let i = 0; i < files.length; i++) {
      if (!files[i].convertedResult && !files[i].error) await convertSingleFile(i);
    }
  };

  const downloadSingleFile = (index: number) => {
    const fileData = files[index];
    if (!fileData.convertedResult) return;
    const originalName = fileData.file.name.replace(/\.webp$/i, '');
    downloadBlob(fileData.convertedResult.blob, `${originalName}.ico`);
  };

  const downloadAllFiles = () => {
    files.forEach((fileData, index) => {
      if (fileData.convertedResult) setTimeout(() => downloadSingleFile(index), index * 100);
    });
  };

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const fileToRemove = prev[index];
      URL.revokeObjectURL(fileToRemove.previewUrl);
      if (fileToRemove.convertedResult?.url) URL.revokeObjectURL(fileToRemove.convertedResult.url);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleReset = () => {
    files.forEach((f) => {
      URL.revokeObjectURL(f.previewUrl);
      if (f.convertedResult?.url) URL.revokeObjectURL(f.convertedResult.url);
    });
    setFiles([]);
    setError(null);
  };

  const convertedCount = files.filter((f) => f.convertedResult).length;
  const hasConvertedFiles = convertedCount > 0;
  const allConverted = files.length > 0 && convertedCount === files.length;

  return (
    <Card className="w-full">
      <CardContent className="p-4 sm:p-6 md:p-8">
        {files.length === 0 && (
          <UploadArea
            isDragging={isDragging}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onFileChange={handleFileChange}
            acceptedFormats="image/webp"
            maxFiles={MAX_FILES}
            title="Drag & drop your WebP files here"
          />
        )}

        {error && <ErrorMessage message={error} />}

        {files.length > 0 && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <SummaryCard
                filesCount={files.length}
                maxFiles={MAX_FILES}
                convertedCount={convertedCount}
                onClearAll={handleReset}
              />
              
              {/* ICO Size Settings */}
              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="ico-size" className="text-sm font-semibold">
                      ICO Size
                    </Label>
                    <span className="text-sm font-medium text-primary">{icoSize}x{icoSize}px</span>
                  </div>
                  <Select value={icoSize.toString()} onValueChange={(v: string) => setIcoSize(Number(v))}>
                    <SelectTrigger id="ico-size">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {VALID_ICO_SIZES.map((size) => (
                        <SelectItem key={size} value={size.toString()}>
                          {size}x{size}px {size === 16 && '(Browser Tab)'} {size === 32 && '(Recommended)'} {size === 256 && '(High-res)'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <p>32x32px is the standard favicon size. Modern format to ICO.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {files.map((fileData, index) => (
                <FileCard
                  key={index}
                  fileName={fileData.file.name}
                  fileSize={formatFileSize(fileData.file.size)}
                  previewUrl={fileData.previewUrl}
                  isConverting={fileData.isConverting}
                  isConverted={!!fileData.convertedResult}
                  error={fileData.error}
                  convertedSize={fileData.convertedResult ? formatFileSize(fileData.convertedResult.size) : undefined}
                  onRemove={() => removeFile(index)}
                  onConvert={() => convertSingleFile(index)}
                  onDownload={() => downloadSingleFile(index)}
                />
              ))}
            </div>

            <BatchActions
              allConverted={allConverted}
              hasConvertedFiles={hasConvertedFiles}
              unconvertedCount={files.length - convertedCount}
              convertedCount={convertedCount}
              onConvertAll={convertAllFiles}
              onDownloadAll={downloadAllFiles}
              onReset={handleReset}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
