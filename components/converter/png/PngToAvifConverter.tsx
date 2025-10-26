'use client';

import { useState, useCallback } from 'react';
import { convertPNGtoAVIF, formatFileSize, downloadBlob, calculateCompression, ConversionResult } from '@/lib/converter/png/pngToAvifConverter';
import { validateFiles, FileValidationError, MAX_FILES } from '@/lib/converter/png/pngToAvifValidator';
import { Card, CardContent } from '@/components/ui/card';
import { UploadArea, FileCard, SummaryCard, QualitySettings, ErrorMessage, BatchActions } from '@/components/converter/shared';

interface FileWithResult {
  file: File;
  previewUrl: string;
  convertedResult: ConversionResult | null;
  isConverting: boolean;
  error: string | null;
}

export default function PngToAvifConverter() {
  const [files, setFiles] = useState<FileWithResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [quality, setQuality] = useState(85);

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
      if (err instanceof FileValidationError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
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
      const result = await convertPNGtoAVIF(fileData.file, quality / 100);
      setFiles((prev) => prev.map((f, i) => (i === index ? { ...f, convertedResult: result, isConverting: false } : f)));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Conversion failed';
      setFiles((prev) => prev.map((f, i) => i === index ? { ...f, error: errorMessage, isConverting: false } : f));
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
    const originalName = fileData.file.name.replace(/\.png$/i, '');
    downloadBlob(fileData.convertedResult.blob, `${originalName}.avif`);
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
  const totalOriginalSize = files.reduce((sum, f) => sum + f.file.size, 0);
  const totalConvertedSize = files.reduce((sum, f) => sum + (f.convertedResult?.size || 0), 0);
  const totalCompression = totalOriginalSize > 0 ? calculateCompression(totalOriginalSize, totalConvertedSize) : 0;

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
            acceptedFormats="image/png"
            maxFiles={MAX_FILES}
            title="Drag & drop your PNG files here"
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
                totalCompression={totalCompression}
                onClearAll={handleReset}
              />
              <QualitySettings
                quality={quality}
                onQualityChange={setQuality}
                minQuality={60}
                maxQuality={100}
                note="AVIF offers superior compression with transparency"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {files.map((fileData, index) => {
                const compression = fileData.convertedResult
                  ? calculateCompression(fileData.file.size, fileData.convertedResult.size)
                  : 0;
                return (
                  <FileCard
                    key={index}
                    fileName={fileData.file.name}
                    fileSize={formatFileSize(fileData.file.size)}
                    previewUrl={fileData.previewUrl}
                    isConverting={fileData.isConverting}
                    isConverted={!!fileData.convertedResult}
                    error={fileData.error}
                    convertedSize={fileData.convertedResult ? formatFileSize(fileData.convertedResult.size) : undefined}
                    compressionPercent={compression}
                    onRemove={() => removeFile(index)}
                    onConvert={() => convertSingleFile(index)}
                    onDownload={() => downloadSingleFile(index)}
                  />
                );
              })}
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
