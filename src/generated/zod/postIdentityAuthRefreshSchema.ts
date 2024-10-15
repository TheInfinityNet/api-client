import { z } from 'zod'
import { refreshRequestSchema } from './refreshRequestSchema'
import { refreshResponseSchema } from './refreshResponseSchema'

/**
 * @description OK
 */
export const postIdentityAuthRefresh200Schema = z.lazy(() => refreshResponseSchema)
export type PostIdentityAuthRefresh200Schema = z.infer<typeof postIdentityAuthRefresh200Schema>

export const postIdentityAuthRefreshMutationRequestSchema = z.lazy(() => refreshRequestSchema)
export type PostIdentityAuthRefreshMutationRequestSchema = z.infer<typeof postIdentityAuthRefreshMutationRequestSchema>
/**
 * @description OK
 */
export const postIdentityAuthRefreshMutationResponseSchema = z.lazy(() => refreshResponseSchema)
export type PostIdentityAuthRefreshMutationResponseSchema = z.infer<typeof postIdentityAuthRefreshMutationResponseSchema>
