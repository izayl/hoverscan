import type { FeatureConfig, FeatureResolver } from './config'

export const getTxn: FeatureResolver<{ txn: number }> = async ({
  publicClient,
  address,
}: FeatureConfig) => {
  const result = await publicClient.getTransactionCount({
    address,
  })
  return { txn: result }
}
