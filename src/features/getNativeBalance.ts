import type { FeatureConfig, FeatureResolver } from './config'

export const getNativeBalance: FeatureResolver<{ nativeBalance: bigint }> = async ({
  publicClient,
  address,
}: FeatureConfig) => {
  const result = await publicClient.getBalance({
    address,
  })
  return { nativeBalance: result }
}
