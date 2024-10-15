import { z } from 'zod'
import { tokensResponseSchema } from './tokensResponseSchema'
import { userProfileResponseSchema } from './userProfileResponseSchema'
import type { SignInResponse } from '../models/SignInResponse'

export const signInResponseSchema = z.object({ tokens: z.lazy(() => tokensResponseSchema).optional(), user: z.lazy(() => userProfileResponseSchema).optional() }) as z.ZodType<SignInResponse>
export type SignInResponseSchema = z.infer<typeof signInResponseSchema>
