import { z } from 'zod'
import { commonMessageResponseSchema } from './commonMessageResponseSchema'
import { verifyEmailByCodeRequestSchema } from './verifyEmailByCodeRequestSchema'

/**
 * @description OK
 */
export const postIdentityAuthVerify200Schema = z.lazy(() => commonMessageResponseSchema)
export type PostIdentityAuthVerify200Schema = z.infer<typeof postIdentityAuthVerify200Schema>

export const postIdentityAuthVerifyMutationRequestSchema = z.lazy(() => verifyEmailByCodeRequestSchema)
export type PostIdentityAuthVerifyMutationRequestSchema = z.infer<typeof postIdentityAuthVerifyMutationRequestSchema>
/**
 * @description OK
 */
export const postIdentityAuthVerifyMutationResponseSchema = z.lazy(() => commonMessageResponseSchema)
export type PostIdentityAuthVerifyMutationResponseSchema = z.infer<typeof postIdentityAuthVerifyMutationResponseSchema>
