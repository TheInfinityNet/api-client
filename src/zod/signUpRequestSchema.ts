import { z } from 'zod'
import { genderSchema } from './genderSchema'
import type { SignUpRequest } from '../models/SignUpRequest'

export const signUpRequestSchema = z.object({ firstName: z.coerce.string().nullable().nullish(), middleName: z.coerce.string().nullable().nullish(), lastName: z.coerce.string().nullable().nullish(), email: z.coerce.string().nullable().nullish(), password: z.coerce.string().nullable().nullish(), passwordConfirmation: z.coerce.string().nullable().nullish(), mobileNumber: z.coerce.string().nullable().nullish(), birthdate: z.string().datetime().optional(), gender: z.lazy(() => genderSchema).optional(), acceptTerms: z.boolean().optional() }) as z.ZodType<SignUpRequest>
export type SignUpRequestSchema = z.infer<typeof signUpRequestSchema>
