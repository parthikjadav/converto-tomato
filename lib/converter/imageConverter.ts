/**
 * Image conversion utilities
 */

export interface ConversionResult {
  blob: Blob;
  url: string;
  size: number;
  width: number;
  height: number;
}

export class ImageConverterError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ImageConverterError';
  }
}

/**
 * Convert JPG/JPEG image to PNG format
 */
export async function convertJPGtoPNG(file: File): Promise<ConversionResult> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      reject(new ImageConverterError('Failed to get canvas context'));
      return;
    }

    img.onload = () => {
      try {
        // Set canvas dimensions to match image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image on canvas
        ctx.drawImage(img, 0, 0);

        // Convert to PNG blob
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              resolve({
                blob,
                url,
                size: blob.size,
                width: img.width,
                height: img.height,
              });
            } else {
              reject(new ImageConverterError('Failed to create PNG blob'));
            }
          },
          'image/png',
          1.0 // Maximum quality
        );
      } catch (error) {
        reject(new ImageConverterError(`Conversion failed: ${error}`));
      } finally {
        // Clean up
        URL.revokeObjectURL(img.src);
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(img.src);
      reject(new ImageConverterError('Failed to load image'));
    };

    // Load the image
    img.src = URL.createObjectURL(file);
  });
}

/**
 * Format file size in human-readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Download a blob as a file
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
