
import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../Layout'
import { ChainOverview as Component } from './'
import * as chains from '~/chain/chains'

const meta: Meta<typeof Component> = {
  title: 'UI/ChainOverview',
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const ChainOverview: Story = {
  render: () => {
    return (
      <Column gap>
        {Object.values(chains).map((chain) => (
          <Component
            key={chain.id}
            address="0x1234567890123456789012345678901234567890"
            chain={chain}
            nativeBalance={100n}
            txn={100}
          />
        ))}
      </Column>
    )
  },
}
