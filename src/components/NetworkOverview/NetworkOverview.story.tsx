
import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../Layout'
import NetworkOverviewComp from './NetworkOverview'
import Networks from '~/lib/constants/network'

const meta: Meta<typeof NetworkOverviewComp> = {
  title: 'UI/NetworkOverview',
  component: NetworkOverviewComp,
}

export default meta
type Story = StoryObj<typeof NetworkOverviewComp>

export const NetworkOverview: Story = {
  render: () => {
    return (
      <Column gap="true">
        {Networks.map((network) => (
          <NetworkOverviewComp
            key={network.name}
            address="0x1234567890123456789012345678901234567890"
            network={network}
            nativeBalance="100"
            txn={100}
          />
        ))}
      </Column>
    )
  },
}
