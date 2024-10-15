import { z } from 'zod'
import { commonMessageResponseSchema } from './commonMessageResponseSchema'
import { resetByTokenRequestSchema } from './resetByTokenRequestSchema'

export const postIdentityAccountsResetByTokenQueryParamsSchema = z.object({ token: z.coerce.string().optional() }).optional()
export type PostIdentityAccountsResetByTokenQueryParamsSchema = z.infer<typeof postIdentityAccountsResetByTokenQueryParamsSchema>
/**
 * @description OK
 */
export const postIdentityAccountsResetByToken200Schema = z.lazy(() => commonMessageResponseSchema)
export type PostIdentityAccountsResetByToken200Schema = z.infer<typeof postIdentityAccountsResetByToken200Schema>

export const postIdentityAccountsResetByTokenMutationRequestSchema = z.lazy(() => resetByTokenRequestSchema)
export type PostIdentityAccountsResetByTokenMutationRequestSchema = z.infer<typeof postIdentityAccountsResetByTokenMutationRequestSchema>
/**
 * @description OK
 */
export const postIdentityAccountsResetByTokenMutationResponseSchema = z.lazy(() => commonMessageResponseSchema)
export type PostIdentityAccountsResetByTokenMutationResponseSchema = z.infer<typeof postIdentityAccountsResetByTokenMutationResponseSchema>
