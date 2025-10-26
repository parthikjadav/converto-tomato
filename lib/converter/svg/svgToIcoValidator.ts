/**
 * SVG File validation utilities for ICO conversion
 */

export const ALLOWED_TYPES = ['image/svg+xml'];
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const MAX_FILES = 5;
export const VALID_ICO_SIZES = [16, 32, 48, 64, 128, 256];

export class FileValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FileValidationError';
  }
}

export function validateFile(file: File): void {
  if (!ALLOWED_TYPES.includes(file.type.toLowerCase())) {
    throw new FileValidationError(
      'Invalid file type. Only SVG files are allowed.'
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new FileValidationError(
      `File size exceeds the maximum limit of ${MAX_FILE_SIZE / 1024 / 1024}MB.`
    );
  }

  if (file.size === 0) {
    throw new FileValidationError('File is empty.');
  }
}

export function validateFiles(files: File[]): void {
  if (files.length === 0) {
    throw new FileValidationError('No files selected.');
  }

  if (files.length > MAX_FILES) {
    throw new FileValidationError(
      `You can only upload up to ${MAX_FILES} files at once.`
    );
  }

  files.forEach((file, index) => {
    try {
      validateFile(file);
    } catch (error) {
      if (error instanceof FileValidationError) {
        throw new FileValidationError(
          `File ${index + 1} (${file.name}): ${error.message}`
        );
      }
      throw error;
    }
  });
}

export function validateIcoSize(size: number): boolean {
  return VALID_ICO_SIZES.includes(size);
}

export function isValidFileType(file: File): boolean {
  return ALLOWED_TYPES.includes(file.type.toLowerCase());
}

export function isValidFileSize(file: File): boolean {
  return file.size > 0 && file.size <= MAX_FILE_SIZE;
}
