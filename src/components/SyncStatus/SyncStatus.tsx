import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import React, { useMemo } from 'react'
import { Row } from '../Layout'
import { SyncButton } from './SyncStatus.styles'
import { eoaSyncTimeAtom, syncChainsAtom, syncedEOAChains, syncedExistEOAStatesAtom } from '~/state/sync'
import { addressAtom } from '~/state/address'

type SyncStatusProps = {
  all: number
  synced: number
  existed: number
  onSync?: () => void
}

export const SyncStatus: React.FC<SyncStatusProps> = ({
  all,
  synced,
  existed,
  onSync,
}) => {
  const syncing = useMemo(() => synced < all, [all, synced])
  const label = syncing ? `Searching for ${all} networks` : `Founded in ${existed} networks`

  const onSyncButtonClick = () => {
    if (!syncing) {
      onSync?.()
    }
  }

  return (
    <Row align="center" justify="between">
      <span>{label}</span>
      <SyncButton syncing={syncing} onClick={onSyncButtonClick}>
        {syncing ? `Syncing(${synced ?? 0}/${all})` : 'Synced ↺'}
      </SyncButton>
    </Row>
  )
}

export const EOASyncStatus = () => {
  const syncedChains = useAtomValue(syncedEOAChains)
  const allChains = useAtomValue(syncChainsAtom)
  const existState = useAtomValue(syncedExistEOAStatesAtom)
  const setSyncTime = useSetAtom(eoaSyncTimeAtom)

  const onRefresh = () => {
    setSyncTime(Date.now())
  }
  return (
    <SyncStatus all={allChains.length} synced={syncedChains.length} existed={existState.length} onSync={onRefresh} />
  )
}
