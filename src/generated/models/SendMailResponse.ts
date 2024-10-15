export interface SendMailResponse {
  /**
   * @type string
   */
  message?: string | null
  /**
   * @type integer | undefined, int32
   */
  retryAfter?: number
}
