import { z } from 'zod'
import type { VerifyEmailByCodeRequest } from '../models/VerifyEmailByCodeRequest'

export const verifyEmailByCodeRequestSchema = z.object({ email: z.coerce.string().nullable().nullish(), code: z.coerce.string().nullable().nullish() }) as z.ZodType<VerifyEmailByCodeRequest>
export type VerifyEmailByCodeRequestSchema = z.infer<typeof verifyEmailByCodeRequestSchema>
