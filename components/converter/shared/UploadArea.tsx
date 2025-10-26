import { Button } from '@/components/ui/button';
import { Upload, FileImage } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UploadAreaProps {
  isDragging: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  acceptedFormats: string;
  maxFiles: number;
  title: string;
}

export default function UploadArea({
  isDragging,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileChange,
  acceptedFormats,
  maxFiles,
  title,
}: UploadAreaProps) {
  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={cn(
        'border-3 border-dashed rounded-xl p-6 sm:p-8 md:p-12 text-center transition-all',
        isDragging
          ? 'border-primary bg-primary/5'
          : 'border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50'
      )}
    >
      <div className="space-y-4">
        <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Upload className="h-8 w-8 text-primary" />
        </div>
        <div>
          <p className="text-xl font-semibold text-foreground mb-2">
            {title}
          </p>
          <p className="text-muted-foreground mb-4">or</p>
          <label className="inline-block">
            <input
              type="file"
              accept={acceptedFormats}
              onChange={onFileChange}
              multiple
              className="hidden"
            />
            <Button asChild>
              <span className="cursor-pointer">
                <FileImage className="mr-2 h-4 w-4" />
                Browse Files
              </span>
            </Button>
          </label>
        </div>
        <p className="text-sm text-muted-foreground">
          Upload up to {maxFiles} images • Maximum 10MB per file
        </p>
      </div>
    </div>
  );
}
