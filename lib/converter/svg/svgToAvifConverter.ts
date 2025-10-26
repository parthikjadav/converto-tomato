/**
 * SVG to AVIF Image Converter
 * Converts SVG images to AVIF format (rasterization)
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
  quality: number; // AVIF quality (0-1)
}

/**
 * Convert SVG to AVIF
 * @param file - SVG file to convert
 * @param options - Conversion options (scale, quality)
 * @returns Promise with conversion result
 */
export async function convertSVGtoAVIF(
  file: File,
  options: ConversionOptions = { scale: 1, quality: 0.85 }
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

          // Draw SVG (AVIF supports transparency)
          ctx.drawImage(img, 0, 0, width, height);

          // Try to convert to AVIF, fallback to WebP if not supported
          canvas.toBlob(
            (blob) => {
              if (blob) {
                const url = URL.createObjectURL(blob);
                resolve({
                  blob,
                  url,
                  size: blob.size,
                  width,
                  height,
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
                      width,
                      height,
                    });
                  },
                  'image/webp',
                  options.quality
                );
              }
            },
            'image/avif',
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
