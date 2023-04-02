
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Card } from '../Layout'
import SyncStatusComp from './SyncStatus'
import ALL_SUPPORTED_CHAINS from '~/chain/all'

const meta: Meta<typeof SyncStatusComp> = {
  title: 'UI/SyncStatus',
  component: SyncStatusComp,
}

export default meta
type Story = StoryObj<typeof SyncStatusComp>

export const Syncing: Story = {
  render: () => {
    return (
      <Card>
        <SyncStatusComp
          syncChains={ALL_SUPPORTED_CHAINS}
          syncedChains={[]}
        />
      </Card>
    )
  },
}
export const Synced: Story = {
  render: () => {
    const allSynced = ALL_SUPPORTED_CHAINS.map((chain) => ({
      chain,
      synced: true,
      hasResult: true,
    }))
    const [syncedNetworks, setSyncedNetworks] = useState(allSynced)
    return (
      <Card>
        <SyncStatusComp
          syncChains={ALL_SUPPORTED_CHAINS}
          syncedChains={syncedNetworks}
          onSync={() => {
            setSyncedNetworks([])
            setTimeout(() => {
              setSyncedNetworks(allSynced)
            }, 2000)
          }}
        />
      </Card>
    )
  },
}
