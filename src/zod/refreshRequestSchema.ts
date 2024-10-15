import { z } from 'zod'
import type { RefreshRequest } from '../models/RefreshRequest'

/**
 * @description DTO for refreshing a token
 */
export const refreshRequestSchema = z.object({ refreshToken: z.coerce.string().min(1).describe('The refresh token required for generating a new access token') }).describe('DTO for refreshing a token') as z.ZodType<RefreshRequest>
export type RefreshRequestSchema = z.infer<typeof refreshRequestSchema>
