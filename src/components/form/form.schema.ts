import { z } from 'zod';
import { validateFile } from './validate-file';

const githubUsernameRegex = /^@(?!-)(?!.*--)[a-zA-Z0-9-]{3,39}(?<!-)$/;

const schema = z.object({
  image: z
    .custom<FileList>(
      (fileList) => fileList instanceof FileList && fileList.length > 0,
      {
        message: 'Upload your photo (JPG or PNG, max size: 500KB).',
      }
    )
    .refine((fileList) => fileList[0].size <= 500 * 1024, {
      message: 'File too large. Please upload a photo under 500KB.',
    })
    .refine((fileList) => {
      const result = validateFile(fileList[0]);
      if (!result.isValid) throw new Error(result.error);
      return true;
    }),
  // .transform((fileList) => ({
  //   file: fileList[0],
  //   url: URL.createObjectURL(fileList[0]),
  // })),
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .refine((value) => value.trim().split(/\s+/).length >= 2, {
      message: 'Please enter your full name',
    })
    .transform((value) => value.trim()),
  email: z.string().email('Invalid email address'),
  github: z
    .string()
    .startsWith('@', {
      message: 'Username must start with "@"',
    })
    .min(3, 'GitHub username must be at least 3 characters')
    .max(39, 'GitHub username must be under 39 characters')
    .regex(githubUsernameRegex, {
      message: 'Username can only contain letters, numbers and single `-`',
    }),
});

export default schema;
