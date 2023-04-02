
import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../Layout'
import ChainOverviewComp from './ChainOverview'
import CHAIN_THEMES from '~/chain/theme'

const meta: Meta<typeof ChainOverviewComp> = {
  title: 'UI/ChainOverview',
  component: ChainOverviewComp,
}

export default meta
type Story = StoryObj<typeof ChainOverviewComp>

export const ChainOverview: Story = {
  render: () => {
    return (
      <Column gap="true">
        {Object.values(CHAIN_THEMES).map((theme) => (
          <ChainOverviewComp
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
