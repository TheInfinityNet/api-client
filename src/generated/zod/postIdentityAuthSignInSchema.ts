import { z } from 'zod'
import { signInRequestSchema } from './signInRequestSchema'
import { signInResponseSchema } from './signInResponseSchema'

/**
 * @description OK
 */
export const postIdentityAuthSignIn200Schema = z.lazy(
  () => signInResponseSchema,
)
export type PostIdentityAuthSignIn200Schema = z.infer<
  typeof postIdentityAuthSignIn200Schema
>

export const postIdentityAuthSignInMutationRequestSchema = z.lazy(
  () => signInRequestSchema,
)
export type PostIdentityAuthSignInMutationRequestSchema = z.infer<
  typeof postIdentityAuthSignInMutationRequestSchema
>
/**
 * @description OK
 */
export const postIdentityAuthSignInMutationResponseSchema = z.lazy(
  () => signInResponseSchema,
)
export type PostIdentityAuthSignInMutationResponseSchema = z.infer<
  typeof postIdentityAuthSignInMutationResponseSchema
>
