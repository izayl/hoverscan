
import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../Layout'
import { ChainOverview as Component } from './'
import CHAIN_THEMES from '~/chain/theme'

const meta: Meta<typeof Component> = {
  title: 'UI/ChainOverview',
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const ChainOverview: Story = {
  render: () => {
    return (
      <Column gap="true">
        {Object.values(CHAIN_THEMES).map((theme) => (
          <Component
            key={theme.chain.id}
            address="0x1234567890123456789012345678901234567890"
            chain={theme.chain}
            nativeBalance="100"
            txn={100}
          />
        ))}
      </Column>
    )
  },
}
