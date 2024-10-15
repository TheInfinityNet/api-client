import client from 'client'
import type { ResponseConfig } from 'client'
import type { GetIdentityTestSeedDataQueryResponse } from '../models/GetIdentityTestSeedData'

/**
 * @link /identity/test/seed-data
 */
export async function getIdentityTestSeedData(
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetIdentityTestSeedDataQueryResponse>['data']> {
  const res = await client<GetIdentityTestSeedDataQueryResponse>({
    method: 'get',
    url: `/identity/test/seed-data`,
    ...options,
  })
  return res.data
}
