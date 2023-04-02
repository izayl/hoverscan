
import type { Meta, StoryObj } from '@storybook/react'
import { Contract as ContractAccount } from '../ContractAccount/ContractAccount.story'
import { EOA as EOAAccount } from '../EOAAccount/EOAAccount.story'
import { Synced, Syncing } from '../SyncStatus/SyncStatus.story'
import { ChainOverview } from '../ChainOverview/ChainOverview.story'
import { HoverCard as Component } from './HoverCard'

const meta: Meta<typeof Component> = {
  title: 'Components/HoverCard',
  component: Component,
}

export default meta

type Story = StoryObj<typeof Component>

export const Account: Story = {
  render: () => (
    <>
      <Component>
        {EOAAccount.render(null, null)}
        {Syncing.render(null, null)}
      </Component>
      <Component>
        {EOAAccount.render(null, null)}
        {Synced.render(null, null)}
        {ChainOverview.render(null, null)}
      </Component>
    </>
  ),
}

export const Contract: Story = {
  render: () => (
    <Component>
      {ContractAccount.render(null, null)}
    </Component>
  ),
}
