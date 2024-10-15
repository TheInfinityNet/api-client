import { z } from 'zod'
import type { ResetByTokenRequest } from '../models/ResetByTokenRequest'

export const resetByTokenRequestSchema = z.object({ newPassword: z.coerce.string().nullable().nullish(), confirmPassword: z.coerce.string().nullable().nullish(), acceptTerms: z.boolean().optional() }) as z.ZodType<ResetByTokenRequest>
export type ResetByTokenRequestSchema = z.infer<typeof resetByTokenRequestSchema>
