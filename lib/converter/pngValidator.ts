/**
 * PNG File validation utilities
 */

export const ALLOWED_TYPES = ['image/png'];
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const MAX_FILES = 10; // Maximum number of files

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
  // Check file type
  if (!ALLOWED_TYPES.includes(file.type.toLowerCase())) {
    throw new FileValidationError(
      'Invalid file type. Only PNG files are allowed.'
    );
  }

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    throw new FileValidationError(
      `File size exceeds the maximum limit of ${MAX_FILE_SIZE / 1024 / 1024}MB.`
    );
  }

  // Check if file is empty
  if (file.size === 0) {
    throw new FileValidationError('File is empty.');
  }
}

/**
 * Validate multiple files
 */
export function validateFiles(files: File[]): void {
  // Check number of files
  if (files.length === 0) {
    throw new FileValidationError('No files selected.');
  }

  if (files.length > MAX_FILES) {
    throw new FileValidationError(
      `You can only upload up to ${MAX_FILES} files at once.`
    );
  }

  // Validate each file
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

/**
 * Check if file type is supported
 */
export function isValidFileType(file: File): boolean {
  return ALLOWED_TYPES.includes(file.type.toLowerCase());
}

/**
 * Check if file size is within limits
 */
export function isValidFileSize(file: File): boolean {
  return file.size > 0 && file.size <= MAX_FILE_SIZE;
}
