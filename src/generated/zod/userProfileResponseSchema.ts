import { z } from 'zod'
import type { UserProfileResponse } from '../models/UserProfileResponse'

export const userProfileResponseSchema = z.object({
  accountId: z.coerce.string().uuid().optional(),
  email: z.coerce.string().nullable().nullish(),
  username: z.coerce.string().nullable().nullish(),
  firstName: z.coerce.string().nullable().nullish(),
  middleName: z.coerce.string().nullable().nullish(),
  lastName: z.coerce.string().nullable().nullish(),
  mobileNumber: z.coerce.string().nullable().nullish(),
  birthdate: z.string().datetime().optional(),
  gender: z.coerce.string().nullable().nullish(),
}) as z.ZodType<UserProfileResponse>
export type UserProfileResponseSchema = z.infer<
  typeof userProfileResponseSchema
>
