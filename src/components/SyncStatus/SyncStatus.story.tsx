
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Card } from '../Layout'
import SyncStatusComp from './SyncStatus'
import Networks from '~/lib/constants/network'

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
          syncNetworks={Networks}
          syncedNetworks={[]}
        />
      </Card>
    )
  },
}
export const Synced: Story = {
  render: () => {
    const allSynced = Networks.map((network) => ({
      network,
      synced: true,
      hasResult: true,
    }))
    const [syncedNetworks, setSyncedNetworks] = useState(allSynced)
    return (
      <Card>
        <SyncStatusComp
          syncNetworks={Networks}
          syncedNetworks={syncedNetworks}
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
