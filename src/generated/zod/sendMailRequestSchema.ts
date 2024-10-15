import { z } from 'zod'
import { verificationTypeSchema } from './verificationTypeSchema'
import type { SendMailRequest } from '../models/SendMailRequest'

export const sendMailRequestSchema = z.object({
  email: z.coerce.string().nullable().nullish(),
  type: z.lazy(() => verificationTypeSchema).optional(),
}) as z.ZodType<SendMailRequest>
export type SendMailRequestSchema = z.infer<typeof sendMailRequestSchema>
