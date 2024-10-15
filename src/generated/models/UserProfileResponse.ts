export interface UserProfileResponse {
  /**
   * @type string | undefined, uuid
   */
  accountId?: string
  /**
   * @type string
   */
  email?: string | null
  /**
   * @type string
   */
  username?: string | null
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
  mobileNumber?: string | null
  /**
   * @type string | undefined, date-time
   */
  birthdate?: string
  /**
   * @type string
   */
  gender?: string | null
}
