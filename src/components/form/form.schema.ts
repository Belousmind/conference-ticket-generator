import { z } from 'zod';

const githubUsernameRegex = /^@(?!-)(?!.*--)[a-zA-Z0-9-]{3,39}(?<!-)$/;

const maxFileSize = 500 * 1024;

const schema = z.object({
  image: z
    .instanceof(FileList)
    .refine((list) => list.length > 0, {
      message: 'Upload your photo (JPG or PNG, max size: 500KB).',
    })
    .refine((list) => ['image/jpeg', 'image/png'].includes(list[0]?.type), {
      message: 'Only JPG or PNG images are allowed.',
    })
    .refine((list) => list[0]?.size <= maxFileSize, {
      message: 'Image must be smaller than 500KB.',
    }),
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
