import type { CommonMessageResponse } from './CommonMessageResponse'

export interface GetIdentityAuthVerifyQueryParams {
  /**
   * @type string | undefined
   */
  token?: string
}
/**
 * @description OK
 */
export type GetIdentityAuthVerify200 = CommonMessageResponse
/**
 * @description OK
 */
export type GetIdentityAuthVerifyQueryResponse = CommonMessageResponse
export interface GetIdentityAuthVerifyQuery {
  Response: GetIdentityAuthVerifyQueryResponse
  QueryParams: GetIdentityAuthVerifyQueryParams
}
