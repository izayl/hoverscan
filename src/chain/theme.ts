import type { Chain } from 'viem'
import {
  arbitrumNova,
  arbitrumOne,
  avalanche,
  bsc,
  fantom,
  gnosis,
  mainnet,
  optimism,
  polygon,
} from '~/chain/chains'

export type ChainTheme = {
  chain: Chain
  iconUrl?: string
  background?: string
}

type chainId = number

const CHAIN_THEMES: Record<chainId, ChainTheme> = {
  [mainnet.id]: {
    chain: mainnet,
    iconUrl: 'https://www.ankr.com/rpc/static/media/eth.4ca298ae.svg',
    background: 'rgba(98, 126, 234, 0.2)',
  },
  [arbitrumNova.id]: {
    chain: arbitrumNova,
    iconUrl: 'https://www.ankr.com/rpc/static/media/arbitrum-nova.b93b7dfa.svg',
    background: 'rgba(239, 130, 32, 0.2)',
  },
  [arbitrumOne.id]: {
    chain: arbitrumOne,
    iconUrl: 'https://www.ankr.com/rpc/static/media/arbitrum.5e332f88.svg',
    background: 'rgba(40, 160, 240, 0.2)',
  },
  [avalanche.id]: {
    chain: avalanche,
    iconUrl: 'https://www.ankr.com/rpc/static/media/avax.04d124b0.svg',
    background: 'rgba(227, 69, 61, 0.2)',
  },
  [bsc.id]: {
    chain: bsc,
    iconUrl: 'https://www.ankr.com/rpc/static/media/bsc.e1bfba92.svg',
    background: 'rgba(243, 186, 47, 0.2)',
  },
  [fantom.id]: {
    chain: fantom,
    iconUrl: 'https://www.ankr.com/rpc/static/media/ftm.c92e9c29.svg',
    background: 'rgba(46, 108, 246, 0.2)',
  },
  [gnosis.id]: {
    chain: gnosis,
    iconUrl: 'https://www.ankr.com/rpc/static/media/gnosis.682dc52c.svg',
    background: 'rgba(0, 166, 196, 0.2)',
  },
  [optimism.id]: {
    chain: optimism,
    iconUrl: 'https://www.ankr.com/rpc/static/media/optimism.53b7f574.svg',
    background: 'rgba(255, 4, 32, 0.2)',
  },
  [polygon.id]: {
    chain: polygon,
    iconUrl: 'https://www.ankr.com/rpc/static/media/polygon.a5e91b5d.svg',
    background: 'rgba(121, 80, 221, 0.2)',
  },
}

export default CHAIN_THEMES
