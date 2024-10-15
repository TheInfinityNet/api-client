import client from 'client'
import type { ResponseConfig } from 'client'
import type {
  PostIdentityAccountsResetByTokenMutationRequest,
  PostIdentityAccountsResetByTokenMutationResponse,
  PostIdentityAccountsResetByTokenQueryParams,
} from '../models/PostIdentityAccountsResetByToken'

/**
 * @description Reset password by token
 * @link /identity/accounts/reset-by-token
 */
export async function postIdentityAccountsResetByToken(
  data?: PostIdentityAccountsResetByTokenMutationRequest,
  params?: PostIdentityAccountsResetByTokenQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<
    ResponseConfig<PostIdentityAccountsResetByTokenMutationResponse>['data']
  > {
  const res = await client<
    PostIdentityAccountsResetByTokenMutationResponse,
    PostIdentityAccountsResetByTokenMutationRequest
  >({
    method: 'post',
    url: `/identity/accounts/reset-by-token`,
    params,
    data,
    headers: { 'Content-Type': 'application/*+json', ...options.headers },
    ...options,
  })
  return res.data
}
