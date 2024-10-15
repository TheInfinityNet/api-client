import { z } from 'zod'
import type { SignInRequest } from '../models/SignInRequest'

export const signInRequestSchema = z.object({
  email: z.coerce.string().email().min(1),
  password: z.coerce.string().min(6).max(20),
}) as z.ZodType<SignInRequest>
export type SignInRequestSchema = z.infer<typeof signInRequestSchema>
