import { z } from 'zod'
import type { Gender } from '../models/Gender'

export const genderSchema = z.enum(['Male', 'Female', 'Other']) as z.ZodType<Gender>
export type GenderSchema = z.infer<typeof genderSchema>
