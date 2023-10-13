import React, { useEffect, useState } from 'react'
import type { Address, Chain } from 'viem'
import { Column } from '../Layout'
import { ChevronRight } from '../icons'
import { overviewSlot } from './ChainOverview.styles'
import { DEFAULT_THEME, getChainTheme } from '~/chain/theme'

type ChainOverview = {
  address: Address
  chain: Chain
  nativeBalance: bigint
  txn: number
}

const { overview, networkImage, networkName, overviewInfo, asset, indicatorRight } = overviewSlot()

export const ChainOverview: React.FC<React.PropsWithChildren<ChainOverview>> = ({
  address,
  chain,
  nativeBalance,
  txn,
}) => {
  // const theme = getChainTheme(chain)
  const [theme, setTheme] = useState(DEFAULT_THEME)
  const viewOnExplorer = () => {
    window.open(`${chain.blockExplorers.default.url}/address/${address}`, '_blank')
  }
  const { decimals, symbol } = chain.nativeCurrency
  const balance = nativeBalance * 10000n / BigInt(10 ** decimals)

  useEffect(() => {
    getChainTheme(chain).then(setTheme)
  }, [])

  return (
    <div className={overview()} style={{ backgroundColor: theme.background }} onClick={viewOnExplorer}>
      <img className={networkImage()} src={theme.iconUrl} alt={chain.name} />
      <Column>
        <div className={networkName()}>{chain.name}</div>
        <div className={overviewInfo()}>
          <span className={asset()}>{Number(balance) / 10000} {symbol}</span>
          <span>{txn} Transactions</span>
        </div>
      </Column>
      <ChevronRight className={indicatorRight()} />
    </div>
  )
}
