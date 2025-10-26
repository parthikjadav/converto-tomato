/**
 * PNG File validation utilities for AVIF conversion
 */

export const ALLOWED_TYPES = ['image/png'];
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const MAX_FILES = 10;

export class FileValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FileValidationError';
  }
}

/**
 * Validate if file is a valid PNG image
 */
export function validateFile(file: File): void {
  if (!ALLOWED_TYPES.includes(file.type.toLowerCase())) {
    throw new FileValidationError(
      'Invalid file type. Only PNG files are allowed.'
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

/**
 * Validate multiple files
 */
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

export function isValidFileType(file: File): boolean {
  return ALLOWED_TYPES.includes(file.type.toLowerCase());
}

export function isValidFileSize(file: File): boolean {
  return file.size > 0 && file.size <= MAX_FILE_SIZE;
}
