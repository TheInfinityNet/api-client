import { z } from 'zod'
import { sendMailRequestSchema } from './sendMailRequestSchema'
import { sendMailResponseSchema } from './sendMailResponseSchema'

/**
 * @description OK
 */
export const postIdentityAuthSendMail200Schema = z.lazy(
  () => sendMailResponseSchema,
)
export type PostIdentityAuthSendMail200Schema = z.infer<
  typeof postIdentityAuthSendMail200Schema
>

export const postIdentityAuthSendMailMutationRequestSchema = z.lazy(
  () => sendMailRequestSchema,
)
export type PostIdentityAuthSendMailMutationRequestSchema = z.infer<
  typeof postIdentityAuthSendMailMutationRequestSchema
>
/**
 * @description OK
 */
export const postIdentityAuthSendMailMutationResponseSchema = z.lazy(
  () => sendMailResponseSchema,
)
export type PostIdentityAuthSendMailMutationResponseSchema = z.infer<
  typeof postIdentityAuthSendMailMutationResponseSchema
>
