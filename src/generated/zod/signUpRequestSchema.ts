import { z } from 'zod'
import { genderSchema } from './genderSchema'
import type { SignUpRequest } from '../models/SignUpRequest'

export const signUpRequestSchema = z.object({
  firstName: z.coerce.string().min(1).max(100),
  middleName: z.coerce.string().nullable().nullish(),
  lastName: z.coerce.string().min(1).max(100),
  email: z.coerce.string().email().min(1),
  password: z.coerce.string().min(6).max(20),
  passwordConfirmation: z.coerce.string().min(6).max(20),
  mobileNumber: z.coerce.string().min(1),
  birthdate: z.string().datetime().optional(),
  gender: z.lazy(() => genderSchema).optional(),
  acceptTerms: z.boolean().optional(),
}) as z.ZodType<SignUpRequest>
export type SignUpRequestSchema = z.infer<typeof signUpRequestSchema>
