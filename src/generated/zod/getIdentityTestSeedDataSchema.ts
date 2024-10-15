import { z } from 'zod'

/**
 * @description OK
 */
export const getIdentityTestSeedData200Schema = z.any()
export type GetIdentityTestSeedData200Schema = z.infer<
  typeof getIdentityTestSeedData200Schema
>

export const getIdentityTestSeedDataQueryResponseSchema = z.any()
export type GetIdentityTestSeedDataQueryResponseSchema = z.infer<
  typeof getIdentityTestSeedDataQueryResponseSchema
>
