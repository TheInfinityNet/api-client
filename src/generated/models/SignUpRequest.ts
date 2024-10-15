import type { Gender } from './Gender'

export interface SignUpRequest {
  /**
   * @type string
   */
  firstName: string
  /**
   * @type string
   */
  middleName?: string | null
  /**
   * @type string
   */
  lastName: string
  /**
   * @type string, email
   */
  email: string
  /**
   * @type string
   */
  password: string
  /**
   * @type string
   */
  passwordConfirmation: string
  /**
   * @type string, tel
   */
  mobileNumber: string
  /**
   * @type string | undefined, date-time
   */
  birthdate?: string
  /**
   * @type string | undefined
   */
  gender?: Gender
  /**
   * @type boolean | undefined
   */
  acceptTerms?: boolean
}
