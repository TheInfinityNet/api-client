import { z } from 'zod'
import { commonMessageResponseSchema } from './commonMessageResponseSchema'
import { signUpRequestSchema } from './signUpRequestSchema'

/**
 * @description OK
 */
export const postIdentityAuthSignUp200Schema = z.lazy(
  () => commonMessageResponseSchema,
)
export type PostIdentityAuthSignUp200Schema = z.infer<
  typeof postIdentityAuthSignUp200Schema
>

export const postIdentityAuthSignUpMutationRequestSchema = z.lazy(
  () => signUpRequestSchema,
)
export type PostIdentityAuthSignUpMutationRequestSchema = z.infer<
  typeof postIdentityAuthSignUpMutationRequestSchema
>
/**
 * @description OK
 */
export const postIdentityAuthSignUpMutationResponseSchema = z.lazy(
  () => commonMessageResponseSchema,
)
export type PostIdentityAuthSignUpMutationResponseSchema = z.infer<
  typeof postIdentityAuthSignUpMutationResponseSchema
>
