import type { RefreshRequest } from './RefreshRequest'
import type { RefreshResponse } from './RefreshResponse'

/**
 * @description OK
 */
export type PostIdentityAuthRefresh200 = RefreshResponse
export type PostIdentityAuthRefreshMutationRequest = RefreshRequest
/**
 * @description OK
 */
export type PostIdentityAuthRefreshMutationResponse = RefreshResponse
export interface PostIdentityAuthRefreshMutation {
  Response: PostIdentityAuthRefreshMutationResponse
  Request: PostIdentityAuthRefreshMutationRequest
}
