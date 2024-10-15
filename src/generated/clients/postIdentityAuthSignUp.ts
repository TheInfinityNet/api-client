import client from 'client'
import type { ResponseConfig } from 'client'
import type {
  PostIdentityAuthSignUpMutationRequest,
  PostIdentityAuthSignUpMutationResponse,
} from '../models/PostIdentityAuthSignUp'

/**
 * @description Sign up a new user
 * @link /identity/auth/sign-up
 */
export async function postIdentityAuthSignUp(
  data: PostIdentityAuthSignUpMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<PostIdentityAuthSignUpMutationResponse>['data']> {
  const res = await client<
    PostIdentityAuthSignUpMutationResponse,
    PostIdentityAuthSignUpMutationRequest
  >({
    method: 'post',
    url: `/identity/auth/sign-up`,
    data,
    headers: { 'Content-Type': 'application/*+json', ...options.headers },
    ...options,
  })
  return res.data
}
