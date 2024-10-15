import client from '@kubb/swagger-client/client'
import type { ResponseConfig } from '@kubb/swagger-client/client'
import type { PostIdentityAccountsResetByCodeMutationRequest, PostIdentityAccountsResetByCodeMutationResponse } from '../models/PostIdentityAccountsResetByCode'

/**
 * @description Reset password by code
 * @link /identity/accounts/reset-by-code
 */
export async function postIdentityAccountsResetByCode(data?: PostIdentityAccountsResetByCodeMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostIdentityAccountsResetByCodeMutationResponse>['data']> {
  const res = await client<PostIdentityAccountsResetByCodeMutationResponse, PostIdentityAccountsResetByCodeMutationRequest>({ method: 'post', url: `/identity/accounts/reset-by-code`, data, headers: { 'Content-Type': 'application/*+json', ...options.headers }, ...options })
  return res.data
}
