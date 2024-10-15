import client from 'client'
import type { ResponseConfig } from 'client'
import type {
  PostIdentityAuthRefreshMutationRequest,
  PostIdentityAuthRefreshMutationResponse,
} from '../models/PostIdentityAuthRefresh'

/**
 * @description Refresh the access token
 * @link /identity/auth/refresh
 */
export async function postIdentityAuthRefresh(
  data: PostIdentityAuthRefreshMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<PostIdentityAuthRefreshMutationResponse>['data']> {
  const res = await client<
    PostIdentityAuthRefreshMutationResponse,
    PostIdentityAuthRefreshMutationRequest
  >({
    method: 'post',
    url: `/identity/auth/refresh`,
    data,
    headers: { 'Content-Type': 'application/*+json', ...options.headers },
    ...options,
  })
  return res.data
}
