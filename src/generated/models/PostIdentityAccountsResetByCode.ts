import type { CommonMessageResponse } from './CommonMessageResponse'
import type { ResetByCodeRequest } from './ResetByCodeRequest'

/**
 * @description OK
 */
export type PostIdentityAccountsResetByCode200 = CommonMessageResponse
export type PostIdentityAccountsResetByCodeMutationRequest = ResetByCodeRequest
/**
 * @description OK
 */
export type PostIdentityAccountsResetByCodeMutationResponse =
  CommonMessageResponse
export interface PostIdentityAccountsResetByCodeMutation {
  Response: PostIdentityAccountsResetByCodeMutationResponse
  Request: PostIdentityAccountsResetByCodeMutationRequest
}
