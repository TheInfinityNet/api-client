import client from 'client'
import type { ResponseConfig } from 'client'
import type {
  PostIdentityAuthSignInMutationRequest,
  PostIdentityAuthSignInMutationResponse,
} from '../models/PostIdentityAuthSignIn'

/**
 * @description Sign in a user
 * @link /identity/auth/sign-in
 */
export async function postIdentityAuthSignIn(
  data: PostIdentityAuthSignInMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<PostIdentityAuthSignInMutationResponse>['data']> {
  const res = await client<
    PostIdentityAuthSignInMutationResponse,
    PostIdentityAuthSignInMutationRequest
  >({
    method: 'post',
    url: `/identity/auth/sign-in`,
    data,
    headers: { 'Content-Type': 'application/*+json', ...options.headers },
    ...options,
  })
  return res.data
}
