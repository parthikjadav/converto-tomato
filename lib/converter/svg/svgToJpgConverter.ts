/**
 * SVG to JPG Image Converter
 * Converts SVG images to JPG format (rasterization)
 */

export interface ConversionResult {
  blob: Blob;
  url: string;
  size: number;
  width: number;
  height: number;
}

export interface ConversionOptions {
  scale: number; // Scale factor (1 = original size, 2 = 2x size, etc.)
  quality: number; // JPG quality (0-1)
}

/**
 * Convert SVG to JPG
 * @param file - SVG file to convert
 * @param options - Conversion options (scale, quality)
 * @returns Promise with conversion result
 */
export async function convertSVGtoJPG(
  file: File,
  options: ConversionOptions = { scale: 1, quality: 0.9 }
): Promise<ConversionResult> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      if (!e.target?.result) {
        reject(new Error('Failed to read file'));
        return;
      }

      const svgText = e.target.result as string;
      const img = new Image();
      
      img.onload = () => {
        try {
          const width = img.width * options.scale;
          const height = img.height * options.scale;

          // Create canvas
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Failed to get canvas context'));
            return;
          }

          // Fill with white background (JPG doesn't support transparency)
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, width, height);

          // Draw SVG
          ctx.drawImage(img, 0, 0, width, height);

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
                width,
                height,
              });
            },
            'image/jpeg',
            options.quality
          );
        } catch (error) {
          reject(error);
        }
      };

      img.onerror = () => {
        reject(new Error('Failed to load SVG image'));
      };

      // Create blob URL from SVG text
      const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      img.src = svgUrl;
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsText(file);
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
