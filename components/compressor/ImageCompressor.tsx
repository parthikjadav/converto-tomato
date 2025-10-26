'use client';

import { useState, useCallback } from 'react';
import { compressImage, formatFileSize, downloadBlob, getFileExtension, CompressionResult, CompressionOptions } from '@/lib/compressor/imageCompressor';
import { validateFiles, FileValidationError, MAX_FILES } from '@/lib/compressor/imageCompressorValidator';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { UploadArea, FileCard, SummaryCard, ErrorMessage, BatchActions } from '../converter/shared';
import { Info } from 'lucide-react';

interface FileWithResult {
  file: File;
  previewUrl: string;
  compressedResult: CompressionResult | null;
  isCompressing: boolean;
  error: string | null;
}

export default function ImageCompressor() {
  const [files, setFiles] = useState<FileWithResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // Compression settings
  const [quality, setQuality] = useState(80);
  const [resizeEnabled, setResizeEnabled] = useState(false);
  const [maxWidth, setMaxWidth] = useState(1920);
  const [maxHeight, setMaxHeight] = useState(1080);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);

  const handleFilesSelect = useCallback((selectedFiles: File[]) => {
    try {
      validateFiles(selectedFiles);
      setError(null);
      const newFiles: FileWithResult[] = selectedFiles.map((file) => ({
        file,
        previewUrl: URL.createObjectURL(file),
        compressedResult: null,
        isCompressing: false,
        error: null,
      }));
      setFiles((prev) => {
        prev.forEach((f) => {
          URL.revokeObjectURL(f.previewUrl);
          if (f.compressedResult?.url) URL.revokeObjectURL(f.compressedResult.url);
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

  const compressSingleFile = async (index: number) => {
    const fileData = files[index];
    if (!fileData || fileData.isCompressing) return;
    
    setFiles((prev) => prev.map((f, i) => (i === index ? { ...f, isCompressing: true, error: null } : f)));
    
    try {
      const options: CompressionOptions = {
        quality: quality / 100,
        maxWidth: resizeEnabled ? maxWidth : undefined,
        maxHeight: resizeEnabled ? maxHeight : undefined,
        maintainAspectRatio,
      };
      
      const result = await compressImage(fileData.file, options);
      setFiles((prev) => prev.map((f, i) => (i === index ? { ...f, compressedResult: result, isCompressing: false } : f)));
    } catch (err) {
      setFiles((prev) => prev.map((f, i) => i === index ? { ...f, error: err instanceof Error ? err.message : 'Compression failed', isCompressing: false } : f));
    }
  };

  const compressAllFiles = async () => {
    for (let i = 0; i < files.length; i++) {
      if (!files[i].compressedResult && !files[i].error) await compressSingleFile(i);
    }
  };

  const downloadSingleFile = (index: number) => {
    const fileData = files[index];
    if (!fileData.compressedResult) return;
    const originalName = fileData.file.name.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const ext = getFileExtension(fileData.compressedResult.format);
    downloadBlob(fileData.compressedResult.blob, `${originalName}_compressed.${ext}`);
  };

  const downloadAllFiles = () => {
    files.forEach((fileData, index) => {
      if (fileData.compressedResult) setTimeout(() => downloadSingleFile(index), index * 100);
    });
  };

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const fileToRemove = prev[index];
      URL.revokeObjectURL(fileToRemove.previewUrl);
      if (fileToRemove.compressedResult?.url) URL.revokeObjectURL(fileToRemove.compressedResult.url);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleReset = () => {
    files.forEach((f) => {
      URL.revokeObjectURL(f.previewUrl);
      if (f.compressedResult?.url) URL.revokeObjectURL(f.compressedResult.url);
    });
    setFiles([]);
    setError(null);
  };

  const compressedCount = files.filter((f) => f.compressedResult).length;
  const hasCompressedFiles = compressedCount > 0;
  const allCompressed = files.length > 0 && compressedCount === files.length;
  const totalOriginalSize = files.reduce((sum, f) => sum + f.file.size, 0);
  const totalCompressedSize = files.reduce((sum, f) => sum + (f.compressedResult?.size || 0), 0);
  const totalCompression = totalOriginalSize > 0 ? ((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100 : 0;

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
            acceptedFormats="image/jpeg,image/jpg,image/png,image/webp"
            maxFiles={MAX_FILES}
            title="Drag & drop your images here"
          />
        )}

        {error && <ErrorMessage message={error} />}

        {files.length > 0 && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <SummaryCard
                filesCount={files.length}
                maxFiles={MAX_FILES}
                convertedCount={compressedCount}
                totalCompression={totalCompression}
                onClearAll={handleReset}
              />
              
              {/* Compression Settings */}
              <Card>
                <CardContent className="p-4 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-sm font-semibold">Quality</Label>
                      <span className="text-sm font-medium text-primary">{quality}%</span>
                    </div>
                    <Slider
                      value={[quality]}
                      onValueChange={(v: number[]) => setQuality(v[0])}
                      min={10}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Lower quality = smaller file size
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="resize" className="text-sm font-semibold">Resize Images</Label>
                    <Switch
                      id="resize"
                      checked={resizeEnabled}
                      onCheckedChange={setResizeEnabled}
                    />
                  </div>

                  {resizeEnabled && (
                    <div className="space-y-3 pl-2 border-l-2 border-primary/20">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label htmlFor="maxWidth" className="text-xs">Max Width (px)</Label>
                          <Input
                            id="maxWidth"
                            type="number"
                            value={maxWidth}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaxWidth(Number(e.target.value))}
                            min={100}
                            max={4000}
                            className="h-8 text-sm"
                          />
                        </div>
                        <div>
                          <Label htmlFor="maxHeight" className="text-xs">Max Height (px)</Label>
                          <Input
                            id="maxHeight"
                            type="number"
                            value={maxHeight}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaxHeight(Number(e.target.value))}
                            min={100}
                            max={4000}
                            className="h-8 text-sm"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch
                          id="aspect"
                          checked={maintainAspectRatio}
                          onCheckedChange={setMaintainAspectRatio}
                          className="scale-75"
                        />
                        <Label htmlFor="aspect" className="text-xs">Maintain aspect ratio</Label>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-2 text-xs text-muted-foreground pt-2 border-t">
                    <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <p>Supports JPG, PNG, and WebP formats</p>
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
                  isConverting={fileData.isCompressing}
                  isConverted={!!fileData.compressedResult}
                  error={fileData.error}
                  convertedSize={fileData.compressedResult ? formatFileSize(fileData.compressedResult.size) : undefined}
                  compressionPercent={fileData.compressedResult?.compressionRatio}
                  onRemove={() => removeFile(index)}
                  onConvert={() => compressSingleFile(index)}
                  onDownload={() => downloadSingleFile(index)}
                />
              ))}
            </div>

            <BatchActions
              allConverted={allCompressed}
              hasConvertedFiles={hasCompressedFiles}
              unconvertedCount={files.length - compressedCount}
              convertedCount={compressedCount}
              onConvertAll={compressAllFiles}
              onDownloadAll={downloadAllFiles}
              onReset={handleReset}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
