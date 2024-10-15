import { z } from 'zod'
import type { ResetByCodeRequest } from '../models/ResetByCodeRequest'

export const resetByCodeRequestSchema = z.object({
  newPassword: z.coerce.string().nullable().nullish(),
  confirmPassword: z.coerce.string().nullable().nullish(),
  code: z.coerce.string().nullable().nullish(),
  acceptTerms: z.boolean().optional(),
}) as z.ZodType<ResetByCodeRequest>
export type ResetByCodeRequestSchema = z.infer<typeof resetByCodeRequestSchema>
