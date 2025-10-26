/**
 * WebP to PNG Image Converter
 * Converts WebP images to PNG format in the browser
 */

export interface ConversionResult {
  blob: Blob;
  url: string;
  size: number;
  width: number;
  height: number;
}

/**
 * Convert WebP to PNG
 * @param file - WebP file to convert
 * @returns Promise with conversion result
 */
export async function convertWebPtoPNG(file: File): Promise<ConversionResult> {
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

          const ctx = canvas.getContext('2d', { alpha: true });
          if (!ctx) {
            reject(new Error('Failed to get canvas context'));
            return;
          }

          // Clear canvas to transparent
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Draw image (preserving transparency)
          ctx.drawImage(img, 0, 0);

          // Convert to PNG blob (lossless)
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Failed to create PNG blob'));
                return;
              }

              const url = URL.createObjectURL(blob);
              resolve({
                blob,
                url,
                size: blob.size,
                width: img.width,
                height: img.height,
              });
            },
            'image/png'
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
