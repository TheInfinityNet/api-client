import { z } from 'zod'
import type { SignInRequest } from '../models/SignInRequest'

export const signInRequestSchema = z.object({ email: z.coerce.string().nullable().nullish(), password: z.coerce.string().nullable().nullish() }) as z.ZodType<SignInRequest>
export type SignInRequestSchema = z.infer<typeof signInRequestSchema>
