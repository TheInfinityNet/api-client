import { z } from 'zod'
import type { SendMailResponse } from '../models/SendMailResponse'

export const sendMailResponseSchema = z.object({ message: z.coerce.string().nullable().nullish(), retryAfter: z.coerce.number().int().optional() }) as z.ZodType<SendMailResponse>
export type SendMailResponseSchema = z.infer<typeof sendMailResponseSchema>
