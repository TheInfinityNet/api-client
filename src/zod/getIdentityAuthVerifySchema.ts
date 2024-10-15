import { z } from 'zod'
import { commonMessageResponseSchema } from './commonMessageResponseSchema'

export const getIdentityAuthVerifyQueryParamsSchema = z.object({ token: z.coerce.string().optional() }).optional()
export type GetIdentityAuthVerifyQueryParamsSchema = z.infer<typeof getIdentityAuthVerifyQueryParamsSchema>
/**
 * @description OK
 */
export const getIdentityAuthVerify200Schema = z.lazy(() => commonMessageResponseSchema)
export type GetIdentityAuthVerify200Schema = z.infer<typeof getIdentityAuthVerify200Schema>
/**
 * @description OK
 */
export const getIdentityAuthVerifyQueryResponseSchema = z.lazy(() => commonMessageResponseSchema)
export type GetIdentityAuthVerifyQueryResponseSchema = z.infer<typeof getIdentityAuthVerifyQueryResponseSchema>
