import { z } from 'zod'
import type { VerificationType } from '../models/VerificationType'

export const verificationTypeSchema = z.enum(['VerifyByCode', 'VerifyByToken', 'ResetByCode', 'ResetByToken']) as z.ZodType<VerificationType>
export type VerificationTypeSchema = z.infer<typeof verificationTypeSchema>
