import { z } from 'zod'
import type { RefreshResponse } from '../models/RefreshResponse'

export const refreshResponseSchema = z.object({
  message: z.coerce.string().nullable().nullish(),
  accessToken: z.coerce.string().nullable().nullish(),
}) as z.ZodType<RefreshResponse>
export type RefreshResponseSchema = z.infer<typeof refreshResponseSchema>
