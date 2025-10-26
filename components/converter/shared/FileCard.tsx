import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { X, CheckCircle2, Download, RefreshCw, AlertCircle, TrendingDown, TrendingUp, Sparkles } from 'lucide-react';

interface FileCardProps {
  fileName: string;
  fileSize: string;
  previewUrl: string;
  isConverting: boolean;
  isConverted: boolean;
  error: string | null;
  convertedSize?: string;
  compressionPercent?: number;
  sizeIncrease?: number;
  showLosslessBadge?: boolean;
  onRemove: () => void;
  onConvert: () => void;
  onDownload: () => void;
}

export default function FileCard({
  fileName,
  fileSize,
  previewUrl,
  isConverting,
  isConverted,
  error,
  convertedSize,
  compressionPercent,
  sizeIncrease,
  showLosslessBadge,
  onRemove,
  onConvert,
  onDownload,
}: FileCardProps) {
  return (
    <Card className="relative max-w-full overflow-hidden">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-10 h-8 w-8"
        onClick={onRemove}
      >
        <X className="h-4 w-4" />
      </Button>

      <CardContent className="p-3 sm:p-4 space-y-3">
        {/* Preview Image */}
        <div className="relative w-full max-w-full border-2 border-border rounded-lg overflow-hidden bg-muted/30">
          <div className="aspect-[4/3] sm:aspect-square w-full max-w-full">
            <img
              src={previewUrl}
              alt={fileName}
              className="block w-full h-full max-w-full object-cover"
            />
          </div>
          {isConverted && (
            <div className="absolute top-2 left-2 bg-green-500 text-white rounded-full p-1">
              <CheckCircle2 className="h-4 w-4" />
            </div>
          )}
          {compressionPercent !== undefined && compressionPercent > 0 && (
            <div className="absolute bottom-2 right-2 max-w-[calc(100%-1rem)] bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <TrendingDown className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">{compressionPercent}%</span>
            </div>
          )}
          {sizeIncrease !== undefined && sizeIncrease > 0 && (
            <div className="absolute bottom-2 right-2 max-w-[calc(100%-1rem)] bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <TrendingUp className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">+{sizeIncrease}%</span>
            </div>
          )}
          {showLosslessBadge && isConverted && (
            <div className="absolute bottom-2 right-2 max-w-[calc(100%-1rem)] bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">Lossless</span>
            </div>
          )}
        </div>

        {/* File Info */}
        <div className="w-full max-w-full">
          <p className="text-sm font-medium truncate w-full max-w-full" title={fileName}>
            {fileName}
          </p>
          <p className="text-xs text-muted-foreground">
            {fileSize}
            {convertedSize && (
              <span className={compressionPercent ? 'text-green-600 ml-1' : 'text-blue-600 ml-1'}>
                → {convertedSize}
              </span>
            )}
          </p>
        </div>

        {/* Status/Actions */}
        {error ? (
          <p className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {error}
          </p>
        ) : isConverting ? (
          <div className="space-y-2">
            <Progress value={66} className="h-1" />
            <p className="text-xs text-muted-foreground text-center">
              Converting...
            </p>
          </div>
        ) : isConverted ? (
          <Button
            size="sm"
            variant="outline"
            className="w-full"
            onClick={onDownload}
          >
            <Download className="mr-2 h-3 w-3" />
            Download
          </Button>
        ) : (
          <Button
            size="sm"
            className="w-full"
            onClick={onConvert}
          >
            <RefreshCw className="mr-2 h-3 w-3" />
            Convert
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
