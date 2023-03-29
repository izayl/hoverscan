type NativeCurrency = {
  symbol: string
  name?: string
  decimals: number
}

type Explorer = {
  name: string
  standard: 'EIP3091' | string
  url: string
}

export type Network = {
  name: string
  chainId: number
  logoURI: string
  rpc: string[]
  nativeToken: NativeCurrency
  explorer: Explorer
  bgColor: string
}

export const ArbitrumNova: Network = {
  name: 'Arbitrum Nova',
  chainId: 42170,
  // @todo create a repo to store
  logoURI: 'https://www.ankr.com/rpc/static/media/arbitrum-nova.b93b7dfa.svg',
  rpc: ['https://rpc.ankr.com/arbitrumnova'],
  nativeToken: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  explorer: {
    name: 'Arbitrum Nova Explorer',
    standard: 'EIP3091',
    url: 'https://nova.arbiscan.io',
  },
  bgColor: 'rgba(239, 130, 32, 0.2)',
}

export const ArbitrumOne: Network = {
  name: 'Arbitrum One',
  chainId: 42161,
  logoURI: 'https://www.ankr.com/rpc/static/media/arbitrum.5e332f88.svg',
  rpc: ['https://rpc.ankr.com/arbitrum'],
  nativeToken: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  explorer: {
    name: 'Arbitrum One Explorer',
    standard: 'EIP3091',
    url: 'https://arbiscan.io',
  },
  bgColor: 'rgba(40, 160, 240, 0.2)',
}

export const Avalanche: Network = {
  name: 'Avalanche C-Chain',
  chainId: 43114,
  logoURI: 'https://www.ankr.com/rpc/static/media/avax.04d124b0.svg',
  rpc: ['https://rpc.ankr.com/avalanche-c'],
  nativeToken: {
    decimals: 18,
    name: 'Avalanche',
    symbol: 'AVAX',
  },
  explorer: {
    name: 'snowtrace',
    standard: 'EIP3091',
    url: 'https://snowtrace.io',
  },
  bgColor: 'rgba(227, 69, 61, 0.2)',
}
export const BSC: Network = {
  name: 'BSC',
  chainId: 56,
  logoURI: 'https://www.ankr.com/rpc/static/media/bsc.e1bfba92.svg',
  rpc: ['https://rpc.ankr.com/bsc'],
  nativeToken: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
  },
  explorer: {
    name: 'bscscan',
    url: 'https://bscscan.com',
    standard: 'EIP3091',
  },
  bgColor: 'rgba(243, 186, 47, 0.2)',
}
export const Ethereum: Network = {
  name: 'Ethereum mainnet',
  chainId: 1,
  logoURI: 'https://www.ankr.com/rpc/static/media/eth.3ee8ddd4.svg',
  rpc: ['https://rpc.ankr.com/eth'],
  nativeToken: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  explorer: {
    name: 'etherscan',
    url: 'https://etherscan.io',
    standard: 'EIP3091',
  },
  bgColor: 'rgba(98, 126, 234, 0.2)',
}
export const Fantom: Network = {
  name: 'Fantom',
  chainId: 250,
  logoURI: 'https://www.ankr.com/rpc/static/media/ftm.c92e9c29.svg',
  rpc: ['https://rpc.ankr.com/fantom'],
  nativeToken: {
    name: 'Fantom',
    symbol: 'FTM',
    decimals: 18,
  },
  explorer: {
    name: 'ftmscan',
    url: 'https://ftmscan.com',
    standard: 'EIP3091',
  },
  bgColor: 'rgba(46, 108, 246, 0.2)',
}
export const Gnosis: Network = {
  name: 'Gnosis',
  chainId: 100,
  logoURI: 'https://www.ankr.com/rpc/static/media/gnosis.682dc52c.svg',
  rpc: ['https://rpc.ankr.com/gnosis'],
  nativeToken: {
    name: 'xDAI',
    symbol: 'xDAI',
    decimals: 18,
  },
  explorer: {
    name: 'gnosisscan',
    url: 'https://gnosisscan.io',
    standard: 'EIP3091',
  },
  bgColor: 'rgba(0, 166, 196, 0.2)',
}
export const Optimism: Network = {
  name: 'Optimism',
  chainId: 10,
  logoURI: 'https://www.ankr.com/rpc/static/media/optimism.53b7f574.svg',
  rpc: ['https://rpc.ankr.com/optimism'],
  nativeToken: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  explorer: {
    name: 'etherscan',
    url: 'https://optimistic.etherscan.io',
    standard: 'EIP3091',
  },
  bgColor: 'rgba(255, 4, 32, 0.2)',
}
export const PolygonPOS: Network = {
  name: 'Polygon POS',
  chainId: 137,
  logoURI: 'https://www.ankr.com/rpc/static/media/polygon.859b6d49.svg',
  rpc: ['https://rpc.ankr.com/polygon'],
  nativeToken: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  explorer: {
    name: 'polygonscan',
    url: 'https://polygonscan.com',
    standard: 'EIP3091',
  },
  bgColor: 'rgba(121, 80, 221, 0.2)',
}

export default [
  ArbitrumOne,
  ArbitrumNova,
  Avalanche,
  BSC,
  Ethereum,
  Fantom,
  Gnosis,
  Optimism,
  PolygonPOS,
]
