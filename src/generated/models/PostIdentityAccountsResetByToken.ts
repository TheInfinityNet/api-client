import type { CommonMessageResponse } from './CommonMessageResponse'
import type { ResetByTokenRequest } from './ResetByTokenRequest'

export interface PostIdentityAccountsResetByTokenQueryParams {
  /**
   * @type string | undefined
   */
  token?: string
}
/**
 * @description OK
 */
export type PostIdentityAccountsResetByToken200 = CommonMessageResponse
export type PostIdentityAccountsResetByTokenMutationRequest =
  ResetByTokenRequest
/**
 * @description OK
 */
export type PostIdentityAccountsResetByTokenMutationResponse =
  CommonMessageResponse
export interface PostIdentityAccountsResetByTokenMutation {
  Response: PostIdentityAccountsResetByTokenMutationResponse
  Request: PostIdentityAccountsResetByTokenMutationRequest
  QueryParams: PostIdentityAccountsResetByTokenQueryParams
}
