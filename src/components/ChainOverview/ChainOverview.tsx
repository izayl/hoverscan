import React from 'react'
import type { Chain } from 'viem'
import { Column } from '../Layout'
import { IndicatorRight, NetworkImage, NetworkName, OverviewInfo, StyledOverview } from './ChainOverview.styles'
import CHAIN_THEMES from '~/chain/theme'

type ChainOverview = {
  address: string
  chain: Chain
  nativeBalance: string
  txn: number
}

export const ChainOverview: React.FC<React.PropsWithChildren<ChainOverview>> = ({
  address,
  chain,
  nativeBalance,
  txn,
}) => {
  const theme = CHAIN_THEMES[chain.id]
  const viewOnExplorer = () => {
    window.open(`${chain.blockExplorers.default.url}/address/${address}`, '_blank')
  }
  return (
    <StyledOverview css={{ backgroundColor: theme.background }} onClick={viewOnExplorer}>
      <NetworkImage src={theme.iconUrl} alt={chain.name} />
      <Column>
        <NetworkName>{chain.name}</NetworkName>
        <OverviewInfo>
          <span>{nativeBalance} {chain.nativeCurrency.symbol}</span>
          <span>{txn} Transactions</span>
        </OverviewInfo>
      </Column>
      <IndicatorRight />
    </StyledOverview>
  )
}
