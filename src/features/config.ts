import type { Address, Chain, PublicClient } from 'viem'

export type FeatureConfig = {
  chain?: Chain
  publicClient: PublicClient
  address: Address
}

export type FeatureResolver<ResolverResult = Record<string, unknown>> = (
  config: FeatureConfig
) => Promise<ResolverResult>
