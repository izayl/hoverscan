import { createPublicClient, http } from 'viem'
import {
  arbitrumOne,
  avalanche,
  bsc,
  fantom,
  gnosis,
  mainnet,
  optimism,
  polygon,
} from './chains'

export const mainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})

export const arbitrumOneClient = createPublicClient({
  chain: arbitrumOne,
  transport: http(),
})

export const avalancheClient = createPublicClient({
  chain: avalanche,
  transport: http(),
})

export const bscClient = createPublicClient({
  chain: bsc,
  transport: http(),
})

export const fantomClient = createPublicClient({
  chain: fantom,
  transport: http(),
})

export const gnosisClient = createPublicClient({
  chain: gnosis,
  transport: http(),
})

export const optimismClient = createPublicClient({
  chain: optimism,
  transport: http(),
})

export const polygonClient = createPublicClient({
  chain: polygon,
  transport: http(),
})
