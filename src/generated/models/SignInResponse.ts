import type { TokensResponse } from './TokensResponse'
import type { UserProfileResponse } from './UserProfileResponse'

export interface SignInResponse {
  /**
   * @type object | undefined
   */
  tokens?: TokensResponse
  /**
   * @type object | undefined
   */
  user?: UserProfileResponse
}
