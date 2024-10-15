import type { CommonMessageResponse } from './CommonMessageResponse'
import type { VerifyEmailByCodeRequest } from './VerifyEmailByCodeRequest'

/**
 * @description OK
 */
export type PostIdentityAuthVerify200 = CommonMessageResponse
export type PostIdentityAuthVerifyMutationRequest = VerifyEmailByCodeRequest
/**
 * @description OK
 */
export type PostIdentityAuthVerifyMutationResponse = CommonMessageResponse
export interface PostIdentityAuthVerifyMutation {
  Response: PostIdentityAuthVerifyMutationResponse
  Request: PostIdentityAuthVerifyMutationRequest
}
