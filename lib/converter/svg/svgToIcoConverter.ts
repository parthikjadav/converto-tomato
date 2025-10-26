/**
 * SVG to ICO Image Converter
 * Converts SVG images to ICO format for favicons
 */

export interface ConversionResult {
  blob: Blob;
  url: string;
  size: number;
  width: number;
  height: number;
}

/**
 * Convert SVG to ICO
 * @param file - SVG file to convert
 * @param size - ICO size (16, 32, 48, 64, 128, 256), default 32
 * @returns Promise with conversion result
 */
export async function convertSVGtoICO(
  file: File,
  size: number = 32
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
          // Create canvas with specified size
          const canvas = document.createElement('canvas');
          canvas.width = size;
          canvas.height = size;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Failed to get canvas context'));
            return;
          }

          // Fill with white background
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, size, size);

          // Calculate dimensions to fit SVG in square
          const scale = Math.min(size / img.width, size / img.height);
          const scaledWidth = img.width * scale;
          const scaledHeight = img.height * scale;
          const x = (size - scaledWidth) / 2;
          const y = (size - scaledHeight) / 2;

          // Draw SVG centered
          ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

          // Convert to PNG blob (ICO format uses PNG internally)
          canvas.toBlob(
            async (blob) => {
              if (!blob) {
                reject(new Error('Failed to create ICO blob'));
                return;
              }

              try {
                // Create ICO file structure
                const icoBlob = await createICOBlob(blob, size);
                const url = URL.createObjectURL(icoBlob);
                
                resolve({
                  blob: icoBlob,
                  url,
                  size: icoBlob.size,
                  width: size,
                  height: size,
                });
              } catch (error) {
                reject(error);
              }
            },
            'image/png',
            1.0
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
 * Create ICO file structure from PNG blob
 */
function createICOBlob(pngBlob: Blob, size: number): Promise<Blob> {
  return new Promise<Blob>((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const pngData = new Uint8Array(reader.result as ArrayBuffer);
      
      // ICO header (6 bytes)
      const header = new Uint8Array([
        0, 0,       // Reserved (must be 0)
        1, 0,       // Image type (1 = ICO)
        1, 0        // Number of images
      ]);

      // Image directory entry (16 bytes)
      const directory = new Uint8Array([
        size === 256 ? 0 : size,  // Width (0 means 256)
        size === 256 ? 0 : size,  // Height (0 means 256)
        0,          // Color palette
        0,          // Reserved
        1, 0,       // Color planes
        32, 0,      // Bits per pixel
        ...intToBytes(pngData.length, 4),  // Size of image data
        ...intToBytes(22, 4)               // Offset to image data
      ]);

      // Combine all parts
      const icoData = new Uint8Array(header.length + directory.length + pngData.length);
      icoData.set(header, 0);
      icoData.set(directory, header.length);
      icoData.set(pngData, header.length + directory.length);

      resolve(new Blob([icoData], { type: 'image/x-icon' }));
    };
    reader.readAsArrayBuffer(pngBlob);
  });
}

/**
 * Convert integer to little-endian byte array
 */
function intToBytes(value: number, bytes: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < bytes; i++) {
    result.push((value >> (i * 8)) & 0xFF);
  }
  return result;
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
