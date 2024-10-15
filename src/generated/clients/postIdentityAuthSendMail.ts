import client from 'client'
import type { ResponseConfig } from 'client'
import type {
  PostIdentityAuthSendMailMutationRequest,
  PostIdentityAuthSendMailMutationResponse,
} from '../models/PostIdentityAuthSendMail'

/**
 * @description Send verification email
 * @link /identity/auth/send-mail
 */
export async function postIdentityAuthSendMail(
  data?: PostIdentityAuthSendMailMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<PostIdentityAuthSendMailMutationResponse>['data']> {
  const res = await client<
    PostIdentityAuthSendMailMutationResponse,
    PostIdentityAuthSendMailMutationRequest
  >({
    method: 'post',
    url: `/identity/auth/send-mail`,
    data,
    headers: { 'Content-Type': 'application/*+json', ...options.headers },
    ...options,
  })
  return res.data
}
