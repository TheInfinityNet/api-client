import client from '@kubb/swagger-client/client'
import type { ResponseConfig } from '@kubb/swagger-client/client'
import type { PostIdentityAuthVerifyMutationRequest, PostIdentityAuthVerifyMutationResponse } from '../models/PostIdentityAuthVerify'

/**
 * @description Verify email by code
 * @link /identity/auth/verify
 */
export async function postIdentityAuthVerify(data?: PostIdentityAuthVerifyMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostIdentityAuthVerifyMutationResponse>['data']> {
  const res = await client<PostIdentityAuthVerifyMutationResponse, PostIdentityAuthVerifyMutationRequest>({ method: 'post', url: `/identity/auth/verify`, data, headers: { 'Content-Type': 'application/*+json', ...options.headers }, ...options })
  return res.data
}
