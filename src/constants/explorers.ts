import type { Explorer } from "~src/types"

import { AllSupportedChainIds } from "./chainId"

export const etherscan: Explorer = {
  name: "Etherscan",
  chainId: AllSupportedChainIds.mainnet,
  endpoint: "https://api.etherscan.io/api",
  url: "https://etherscan.io/",
  apiKey: process.env.ETHERSCAN_API_KEY
}

export const bscscan: Explorer = {
  name: "BscScan",
  chainId: AllSupportedChainIds.bsc,
  endpoint: "https://api.bscscan.com/api",
  url: "https://bscscan.com/"
}

export const hecoscan: Explorer = {
  name: "HecoScan",
  chainId: AllSupportedChainIds.heco,
  endpoint: "https://api.hecoinfo.com/api",
  url: "https://hecoinfo.com/"
}

export const fantomscan: Explorer = {
  name: "FantomScan",
  chainId: AllSupportedChainIds.fantom,
  endpoint: "https://api.ftmscan.com/api",
  url: "https://ftmscan.com/"
}

export const polygonScan: Explorer = {
  name: "PolygonScan",
  chainId: AllSupportedChainIds.polygon,
  endpoint: "https://api.polygonscan.com/api",
  url: "https://polygonscan.com/"
}

export const avalancheScan: Explorer = {
  name: "snowtrace",
  chainId: AllSupportedChainIds.avalanche,
  endpoint: "https://api.avax.network/ext/bc/C/rpc",
  url: "https://snowtrace.io/"
}

export const arbiscan: Explorer = {
  name: "ArbiScan",
  chainId: AllSupportedChainIds.arbitrum,
  endpoint: "https://arbiscan.io/api",
  url: "https://arbiscan.io/"
}

export const optimismscan: Explorer = {
  name: "OptimismScan",
  chainId: AllSupportedChainIds.optimism,
  endpoint: "https://optimistic.etherscan.io/api",
  url: "https://optimistic.etherscan.io/"
}

export const ALL_SUPPORTED_EXPLORERS: Record<AllSupportedChainIds, Explorer> = {
  [AllSupportedChainIds.mainnet]: etherscan,
  [AllSupportedChainIds.bsc]: bscscan,
  [AllSupportedChainIds.heco]: hecoscan,
  [AllSupportedChainIds.fantom]: fantomscan,
  [AllSupportedChainIds.polygon]: polygonScan,
  [AllSupportedChainIds.avalanche]: avalancheScan,
  [AllSupportedChainIds.arbitrum]: arbiscan,
  [AllSupportedChainIds.optimism]: optimismscan

  // [ALL_SUPPORTED_CHAIN_IDS.ropsten]: undefined,
  // [ALL_SUPPORTED_CHAIN_IDS.rinkeby]: undefined,
  // [ALL_SUPPORTED_CHAIN_IDS.goerli]: undefined,
  // [ALL_SUPPORTED_CHAIN_IDS.kovan]: undefined,
  // [ALL_SUPPORTED_CHAIN_IDS.bscTestnet]: undefined,
  // [ALL_SUPPORTED_CHAIN_IDS.polygonTestnet]: undefined,
  // [ALL_SUPPORTED_CHAIN_IDS.avalancheTestnet]: undefined,
  // [ALL_SUPPORTED_CHAIN_IDS.fantomTestnet]: undefined,
  // [ALL_SUPPORTED_CHAIN_IDS.hecoTestnet]: undefined,
  // [ALL_SUPPORTED_CHAIN_IDS.arbitrumTestnet]: undefined,
  // [ALL_SUPPORTED_CHAIN_IDS.optimismTestnet]: undefined
}
