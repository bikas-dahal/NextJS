import { z } from "zod";


export const verifySchema = z.object({
    code: z.string().length(6, {message: 'Please enter a 6-digit code'})
})