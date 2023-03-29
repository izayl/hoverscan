import { useMemo } from 'react'
import { Row } from '../Layout'
import { SyncButton } from './SyncStatus.styles'
import type { Network } from '~/lib/constants/network'

type SyncState = {
  network: Network
  synced: boolean
  hasResult: boolean
}

type SyncStatusProps = {
  syncNetworks: Network[]
  syncedNetworks: SyncState[]
  onSync?: () => void
}

const SyncStatus: React.FC<SyncStatusProps> = ({
  syncNetworks,
  syncedNetworks,
  onSync,
}) => {
  const syncing = useMemo(() => syncedNetworks.length < syncNetworks.length, [syncNetworks, syncedNetworks])
  const foundSynced = useMemo(() => syncedNetworks.filter((synced) => synced.hasResult), [syncedNetworks])
  const label = syncing ? `Searching for ${syncNetworks.length} networks` : `found in ${foundSynced?.length} networks`

  const onSyncButtonClick = () => {
    if (!syncing) {
      onSync?.()
    }
  }

  return (
    <Row align="center" justify="between">
      <span>{label}</span>
      <SyncButton syncing={syncing} onClick={onSyncButtonClick}>{ syncing ? `Syncing(${foundSynced?.length ?? 0}/${syncNetworks.length})` : 'Synced' }</SyncButton>
    </Row>
  )
}

export default SyncStatus
