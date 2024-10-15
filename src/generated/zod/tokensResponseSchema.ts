import { z } from 'zod'
import type { TokensResponse } from '../models/TokensResponse'

export const tokensResponseSchema = z.object({
  accessToken: z.coerce.string().nullable().nullish(),
  refreshToken: z.coerce.string().nullable().nullish(),
}) as z.ZodType<TokensResponse>
export type TokensResponseSchema = z.infer<typeof tokensResponseSchema>
