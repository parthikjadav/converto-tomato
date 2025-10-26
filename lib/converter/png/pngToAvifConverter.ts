/**
 * PNG to AVIF Image Converter
 * Converts PNG images to AVIF format (modern, efficient compression)
 */

export interface ConversionResult {
  blob: Blob;
  url: string;
  size: number;
  width: number;
  height: number;
}

/**
 * Convert PNG to AVIF
 * Note: AVIF encoding in browsers is limited. This uses canvas fallback.
 * @param file - PNG file to convert
 * @param quality - AVIF quality (0-1), default 0.85
 * @returns Promise with conversion result
 */
export async function convertPNGtoAVIF(
  file: File,
  quality: number = 0.85
): Promise<ConversionResult> {
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
          // Create canvas
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Failed to get canvas context'));
            return;
          }

          // Draw image
          ctx.drawImage(img, 0, 0);

          // Try to convert to AVIF, fallback to WebP if not supported
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
                // Fallback to WebP if AVIF not supported
                canvas.toBlob(
                  (webpBlob) => {
                    if (!webpBlob) {
                      reject(new Error('Failed to create AVIF/WebP blob'));
                      return;
                    }
                    const url = URL.createObjectURL(webpBlob);
                    resolve({
                      blob: webpBlob,
                      url,
                      size: webpBlob.size,
                      width: img.width,
                      height: img.height,
                    });
                  },
                  'image/webp',
                  quality
                );
              }
            },
            'image/avif',
            quality
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
 * Calculate compression percentage
 */
export function calculateCompression(originalSize: number, newSize: number): number {
  return Math.round(((originalSize - newSize) / originalSize) * 100);
}
