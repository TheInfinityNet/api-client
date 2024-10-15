import type { SignInRequest } from './SignInRequest'
import type { SignInResponse } from './SignInResponse'

/**
 * @description OK
 */
export type PostIdentityAuthSignIn200 = SignInResponse
export type PostIdentityAuthSignInMutationRequest = SignInRequest
/**
 * @description OK
 */
export type PostIdentityAuthSignInMutationResponse = SignInResponse
export interface PostIdentityAuthSignInMutation {
  Response: PostIdentityAuthSignInMutationResponse
  Request: PostIdentityAuthSignInMutationRequest
}
