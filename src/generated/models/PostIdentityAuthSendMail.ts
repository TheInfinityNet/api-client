import type { SendMailRequest } from './SendMailRequest'
import type { SendMailResponse } from './SendMailResponse'

/**
 * @description OK
 */
export type PostIdentityAuthSendMail200 = SendMailResponse
export type PostIdentityAuthSendMailMutationRequest = SendMailRequest
/**
 * @description OK
 */
export type PostIdentityAuthSendMailMutationResponse = SendMailResponse
export interface PostIdentityAuthSendMailMutation {
  Response: PostIdentityAuthSendMailMutationResponse
  Request: PostIdentityAuthSendMailMutationRequest
}
