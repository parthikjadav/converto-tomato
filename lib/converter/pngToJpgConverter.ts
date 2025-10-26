/**
 * PNG to JPG Image Converter
 * Converts PNG images to JPG format in the browser
 */

export interface ConversionResult {
  blob: Blob;
  url: string;
  size: number;
  width: number;
  height: number;
}

/**
 * Convert PNG to JPG
 * @param file - PNG file to convert
 * @param quality - JPG quality (0-1), default 0.92
 * @returns Promise with conversion result
 */
export async function convertPNGtoJPG(
  file: File,
  quality: number = 0.92
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

          // Fill with white background (JPG doesn't support transparency)
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Draw image
          ctx.drawImage(img, 0, 0);

          // Convert to JPG blob
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Failed to create JPG blob'));
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
            'image/jpeg',
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
