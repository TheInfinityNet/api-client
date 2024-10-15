export interface ResetByCodeRequest {
  /**
   * @type string
   */
  newPassword?: string | null
  /**
   * @type string
   */
  confirmPassword?: string | null
  /**
   * @type string
   */
  code?: string | null
  /**
   * @type boolean | undefined
   */
  acceptTerms?: boolean
}
