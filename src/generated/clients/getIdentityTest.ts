import client from 'client'
import type { ResponseConfig } from 'client'
import type { GetIdentityTestQueryResponse } from '../models/GetIdentityTest'

/**
 * @link /identity/test
 */
export async function getIdentityTest(
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetIdentityTestQueryResponse>['data']> {
  const res = await client<GetIdentityTestQueryResponse>({
    method: 'get',
    url: `/identity/test`,
    ...options,
  })
  return res.data
}
