/**
 * Universal Image Compressor
 * Compresses JPG, PNG, and WebP images
 */

export interface CompressionResult {
  blob: Blob;
  url: string;
  size: number;
  originalSize: number;
  width: number;
  height: number;
  format: string;
  compressionRatio: number;
}

export interface CompressionOptions {
  quality: number; // 0-1
  maxWidth?: number;
  maxHeight?: number;
  maintainAspectRatio: boolean;
}

/**
 * Compress image with quality and size options
 */
export async function compressImage(
  file: File,
  options: CompressionOptions
): Promise<CompressionResult> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      if (!e.target?.result) {
        reject(new Error('Failed to read file'));
        return;
      }

      img.onload = () => {
        try {
          // Calculate dimensions
          let width = img.width;
          let height = img.height;

          if (options.maxWidth || options.maxHeight) {
            if (options.maintainAspectRatio) {
              const aspectRatio = width / height;
              
              if (options.maxWidth && width > options.maxWidth) {
                width = options.maxWidth;
                height = width / aspectRatio;
              }
              
              if (options.maxHeight && height > options.maxHeight) {
                height = options.maxHeight;
                width = height * aspectRatio;
              }
            } else {
              width = options.maxWidth || width;
              height = options.maxHeight || height;
            }
          }

          // Create canvas
          const canvas = document.createElement('canvas');
          canvas.width = Math.round(width);
          canvas.height = Math.round(height);

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Failed to get canvas context'));
            return;
          }

          // Draw image
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          // Determine output format
          const outputFormat = getOutputFormat(file.type);

          // Convert to blob
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Failed to compress image'));
                return;
              }

              const url = URL.createObjectURL(blob);
              const compressionRatio = ((file.size - blob.size) / file.size) * 100;

              resolve({
                blob,
                url,
                size: blob.size,
                originalSize: file.size,
                width: canvas.width,
                height: canvas.height,
                format: outputFormat,
                compressionRatio: Math.max(0, compressionRatio),
              });
            },
            outputFormat,
            options.quality
          );
        } catch (error) {
          reject(error);
        }
      };

      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };

      img.src = e.target.result as string;
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsDataURL(file);
  });
}

/**
 * Get output format based on input type
 */
function getOutputFormat(inputType: string): string {
  const type = inputType.toLowerCase();
  
  if (type.includes('png')) return 'image/png';
  if (type.includes('webp')) return 'image/webp';
  return 'image/jpeg'; // Default to JPEG
}

/**
 * Format file size to human-readable string
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Download blob as file
 */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Get file extension from format
 */
export function getFileExtension(format: string): string {
  if (format.includes('png')) return 'png';
  if (format.includes('webp')) return 'webp';
  return 'jpg';
}
