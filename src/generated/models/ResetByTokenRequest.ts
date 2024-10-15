export interface ResetByTokenRequest {
  /**
   * @type string
   */
  newPassword?: string | null
  /**
   * @type string
   */
  confirmPassword?: string | null
  /**
   * @type boolean | undefined
   */
  acceptTerms?: boolean
}
