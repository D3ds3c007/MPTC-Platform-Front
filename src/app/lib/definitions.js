import {z} from 'zod';

export const SignupFormSchema = z.object({
    email: z
    .string()
    .email({message: 'Invalid email address'})
    .trim(),
    password: z.string()
    .min(8, {message: 'Password must be at least 8 characters long'})
    .trim(),
});