import type { CommonMessageResponse } from './CommonMessageResponse'
import type { SignUpRequest } from './SignUpRequest'

/**
 * @description OK
 */
export type PostIdentityAuthSignUp200 = CommonMessageResponse
export type PostIdentityAuthSignUpMutationRequest = SignUpRequest
/**
 * @description OK
 */
export type PostIdentityAuthSignUpMutationResponse = CommonMessageResponse
export interface PostIdentityAuthSignUpMutation {
  Response: PostIdentityAuthSignUpMutationResponse
  Request: PostIdentityAuthSignUpMutationRequest
}
