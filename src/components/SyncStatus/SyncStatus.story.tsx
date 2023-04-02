
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Card } from '../Layout'
import { SyncStatus as Component } from './'
import ALL_SUPPORTED_CHAINS from '~/chain/all'

const meta: Meta<typeof Component> = {
  title: 'UI/SyncStatus',
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Syncing: Story = {
  render: () => {
    return (
      <Card>
        <Component
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
        <Component
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
