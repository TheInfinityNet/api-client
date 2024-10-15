import client from '@kubb/swagger-client/client'
import type { ResponseConfig } from '@kubb/swagger-client/client'
import type { GetIdentityAuthVerifyQueryParams, GetIdentityAuthVerifyQueryResponse } from '../models/GetIdentityAuthVerify'

/**
 * @description Verify email by token
 * @link /identity/auth/verify
 */
export async function getIdentityAuthVerify(params?: GetIdentityAuthVerifyQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetIdentityAuthVerifyQueryResponse>['data']> {
  const res = await client<GetIdentityAuthVerifyQueryResponse>({ method: 'get', url: `/identity/auth/verify`, params, ...options })
  return res.data
}
