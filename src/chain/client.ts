import { createPublicClient, http } from 'viem'
import { mainnet } from './chains'

export const mainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
