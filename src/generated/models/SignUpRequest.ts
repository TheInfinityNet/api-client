import type { Gender } from './Gender'

export interface SignUpRequest {
  /**
   * @type string
   */
  firstName?: string | null
  /**
   * @type string
   */
  middleName?: string | null
  /**
   * @type string
   */
  lastName?: string | null
  /**
   * @type string
   */
  email?: string | null
  /**
   * @type string
   */
  password?: string | null
  /**
   * @type string
   */
  passwordConfirmation?: string | null
  /**
   * @type string
   */
  mobileNumber?: string | null
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
