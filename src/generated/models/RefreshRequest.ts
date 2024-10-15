/**
 * @description DTO for refreshing a token
 */
export interface RefreshRequest {
  /**
   * @description The refresh token required for generating a new access token
   * @type string
   */
  refreshToken: string
}
