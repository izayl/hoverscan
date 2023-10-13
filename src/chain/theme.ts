import type { Chain } from 'viem'
import { icons } from './assets'
import { mainnet } from '~/chain/chains'
import { getAvgColor } from '~/utils/getAvgColor'

export type ChainTheme = {
  chain: Chain
  iconUrl?: string
  background?: string
}

export const getChainTheme = async (chain: Chain): Promise<ChainTheme> => {
  if (icons[chain.id]) {
    return {
      chain,
      iconUrl: icons[chain.id],
      background: await getAvgColor({ base64: icons[chain.id], alpha: 0.2, ignoredColors: [[255, 255, 255]] }),
    }
  }
  return DEFAULT_THEME
}

export const DEFAULT_THEME: ChainTheme = {
  chain: mainnet,
  iconUrl: icons.default,
  background: 'rgba(213, 213, 213, 0.2)',
}
