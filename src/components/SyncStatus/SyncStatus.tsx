import React, { useMemo } from 'react'
import type { Chain } from 'viem'
import { Row } from '../Layout'
import { SyncButton } from './SyncStatus.styles'

type SyncState = {
  chain: Chain
  synced: boolean
  hasResult: boolean
}

type SyncStatusProps = {
  syncChains: Chain[]
  syncedChains: SyncState[]
  onSync?: () => void
}

export const SyncStatus: React.FC<SyncStatusProps> = ({
  syncChains,
  syncedChains,
  onSync,
}) => {
  const syncing = useMemo(() => syncedChains.length < syncChains.length, [syncChains, syncedChains])
  const foundSynced = useMemo(() => syncedChains.filter((synced) => synced.hasResult), [syncedChains])
  const label = syncing ? `Searching for ${syncChains.length} networks` : `found in ${foundSynced?.length} networks`

  const onSyncButtonClick = () => {
    if (!syncing) {
      onSync?.()
    }
  }

  return (
    <Row align="center" justify="between">
      <span>{label}</span>
      <SyncButton syncing={syncing} onClick={onSyncButtonClick}>{ syncing ? `Syncing(${foundSynced?.length ?? 0}/${syncChains.length})` : 'Synced' }</SyncButton>
    </Row>
  )
}
