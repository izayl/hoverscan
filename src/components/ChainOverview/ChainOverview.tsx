import React from 'react'
import type { Address, Chain } from 'viem'
import { Column } from '../Layout'
import { IndicatorRight, NetworkImage, NetworkName, OverviewInfo, StyledOverview } from './ChainOverview.styles'
import CHAIN_THEMES from '~/chain/theme'

type ChainOverview = {
  address: Address
  chain: Chain
  nativeBalance: bigint
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
  const { decimals, symbol } = chain.nativeCurrency
  const balance = nativeBalance * 10000n / BigInt(10 ** decimals)
  return (
    <StyledOverview css={{ backgroundColor: theme.background }} onClick={viewOnExplorer}>
      <NetworkImage src={theme.iconUrl} alt={chain.name} />
      <Column>
        <NetworkName>{chain.name}</NetworkName>
        <OverviewInfo>
          <span>{Number(balance) / 10000} {symbol}</span>
          <span>{txn} Transactions</span>
        </OverviewInfo>
      </Column>
      <IndicatorRight />
    </StyledOverview>
  )
}
