import { z } from 'zod';

export const SignInSchema = z.object({
    identifier: z.string(),
    password: z.string().min(6, {message: 'Please enter a password with at least 6 characters'}),
});