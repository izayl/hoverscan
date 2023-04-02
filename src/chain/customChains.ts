// add custom network that wagmi not included

import type { Chain } from 'viem'

export const arbitrumNova = {
  id: 42170,
  name: 'Arbitrum Nova',
  network: 'arbitrum',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://rpc.ankr.com/arbitrumnova'] },
    default: { http: ['https://rpc.ankr.com/arbitrumnova'] },
  },
  blockExplorers: {
    etherscan: {
      name: 'Arbitrum Nova Explorer',
      url: 'https://nova.arbiscan.io',
    },
    default: {
      name: 'Arbitrum Nova Explorer',
      url: 'https://nova.arbiscan.io',
    },
  },
} as const satisfies Chain
