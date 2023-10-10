
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Card } from '../Layout'
import { SyncStatus as Component } from './'
import { ALL_SUPPORTED_CHAINS } from '~/chain/all'

const meta: Meta<typeof Component> = {
  title: 'UI/SyncStatus',
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

const CardWrapper: React.FC<React.PropsWithChildren<{ passedProps: unknown[] }>> = ({ children, passedProps }) => {
  if (passedProps.every(x => !x)) return <>{children}</>
  return <Card>{children}</Card>
}

export const Syncing: Story = {
  render: (...args) => {
    return (
      <CardWrapper passedProps={args}>
        <Component
          all={ALL_SUPPORTED_CHAINS.length}
          synced={0}
          existed={0}
        />
      </CardWrapper>
    )
  },
}
export const Synced: Story = {
  render: (...args) => {
    const allSynced = ALL_SUPPORTED_CHAINS.map((chain) => ({
      chain,
      synced: true,
      hasResult: true,
    }))
    const [syncedNetworks, setSyncedNetworks] = useState(allSynced)
    return (
      <CardWrapper passedProps={args}>
        <Component
          all={ALL_SUPPORTED_CHAINS.length}
          synced={syncedNetworks.length}
          existed={syncedNetworks.length}
          onSync={() => {
            setSyncedNetworks([])
            setTimeout(() => {
              setSyncedNetworks(allSynced)
            }, 2000)
          }}
        />
      </CardWrapper>
    )
  },
}
