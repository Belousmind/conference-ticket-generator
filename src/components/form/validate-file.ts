type FileValidationOptions = {
  maxSizeKB?: number;
  allowedExtensions?: string[];
  allowedMimeTypes?: string[];
};

type ValidationResult = {
  isValid: boolean;
  error?: string;
};

export function validateFile(
  file: File,
  options: FileValidationOptions = {}
): ValidationResult {
  const {
    maxSizeKB = 500,
    allowedExtensions = ['jpg', 'jpeg', 'png'],
    allowedMimeTypes = ['image/jpeg', 'image/png'],
  } = options;

  const fileSize = file.size;
  const fileType = file.type;
  const fileName = file.name.toLowerCase();
  const fileExt = fileName.split('.').pop();

  if (!fileExt || !allowedExtensions.includes(fileExt)) {
    return {
      isValid: false,
      error: `Invalid file extension. Allowed: ${allowedExtensions.join(', ')}`,
    };
  }

  if (!allowedMimeTypes.includes(fileType)) {
    return {
      isValid: false,
      error: `Invalid MIME type. Allowed: ${allowedMimeTypes.join(', ')}`,
    };
  }

  if (fileSize > maxSizeKB * 1024) {
    return {
      isValid: false,
      error: `File too large. Please upload a photo under ${maxSizeKB}KB`,
    };
  }

  return { isValid: true };
}
