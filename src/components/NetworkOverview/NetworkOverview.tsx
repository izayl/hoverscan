import React from 'react'
import { Column, Row } from '../Layout'
import { IndicatorRight, NetworkImage, NetworkName, OverviewInfo, StyledOverview } from './NetworkOverview.styles'
import type { Network } from '~/lib/constants/network'

type NetworkOverviewProps = {
  address: string
  network: Network
  nativeBalance: string
  txn: number
}

const NetworkOverview: React.FC<React.PropsWithChildren<NetworkOverviewProps>> = ({
  address,
  network,
  nativeBalance,
  txn,
}) => {
  const viewOnExplorer = () => {
    window.open(`${network.explorer.url}/address/${address}`, '_blank')
  }
  return (
    <StyledOverview css={{ backgroundColor: network.bgColor }} onClick={viewOnExplorer}>
      <NetworkImage src={network.logoURI} alt={network.name} />
      <Column>
        <NetworkName>{network.name}</NetworkName>
        <OverviewInfo>
          <span>{nativeBalance} {network.nativeToken.symbol}</span>
          <span>{txn} Transactions</span>
        </OverviewInfo>
      </Column>
      <IndicatorRight />
    </StyledOverview>
  )
}

export default NetworkOverview
