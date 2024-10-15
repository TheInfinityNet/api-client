import { z } from 'zod'
import type { CommonMessageResponse } from '../models/CommonMessageResponse'

export const commonMessageResponseSchema = z.object({
  message: z.coerce.string().nullable().nullish(),
}) as z.ZodType<CommonMessageResponse>
export type CommonMessageResponseSchema = z.infer<
  typeof commonMessageResponseSchema
>
