import { z } from 'zod'

/**
 * @description OK
 */
export const getIdentityTest200Schema = z.any()
export type GetIdentityTest200Schema = z.infer<typeof getIdentityTest200Schema>

export const getIdentityTestQueryResponseSchema = z.any()
export type GetIdentityTestQueryResponseSchema = z.infer<
  typeof getIdentityTestQueryResponseSchema
>
