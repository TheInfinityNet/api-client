import type { VerificationType } from './VerificationType'

export interface SendMailRequest {
  /**
   * @type string
   */
  email?: string | null
  /**
   * @type string | undefined
   */
  type?: VerificationType
}
