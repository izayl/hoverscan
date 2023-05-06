import type { Address, Chain, PublicClient } from 'viem'

export type FeatureConfig = {
  chain?: Chain
  publicClient: PublicClient
  address: Address
}

export type FeatureResolver<T> = (
  config: FeatureConfig
) => Promise<T>
