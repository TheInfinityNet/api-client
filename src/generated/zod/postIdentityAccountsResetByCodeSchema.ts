import { z } from 'zod'
import { commonMessageResponseSchema } from './commonMessageResponseSchema'
import { resetByCodeRequestSchema } from './resetByCodeRequestSchema'

/**
 * @description OK
 */
export const postIdentityAccountsResetByCode200Schema = z.lazy(() => commonMessageResponseSchema)
export type PostIdentityAccountsResetByCode200Schema = z.infer<typeof postIdentityAccountsResetByCode200Schema>

export const postIdentityAccountsResetByCodeMutationRequestSchema = z.lazy(() => resetByCodeRequestSchema)
export type PostIdentityAccountsResetByCodeMutationRequestSchema = z.infer<typeof postIdentityAccountsResetByCodeMutationRequestSchema>
/**
 * @description OK
 */
export const postIdentityAccountsResetByCodeMutationResponseSchema = z.lazy(() => commonMessageResponseSchema)
export type PostIdentityAccountsResetByCodeMutationResponseSchema = z.infer<typeof postIdentityAccountsResetByCodeMutationResponseSchema>
