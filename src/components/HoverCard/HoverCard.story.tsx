
import type { Meta, StoryObj } from '@storybook/react'
import { Contract as ContractAccount } from '../ContractAccount/ContractAccount.story'
import { EOA as EOAAccount } from '../EOAAccount/EOAAccount.story'
import { Synced, Syncing } from '../SyncStatus/SyncStatus.story'
import { ChainOverview } from '../ChainOverview/ChainOverview.story'
import HoverCardComp from './HoverCard'

const meta: Meta<typeof HoverCardComp> = {
  title: 'Components/HoverCard',
  component: HoverCardComp,
}

export default meta

type Story = StoryObj<typeof HoverCardComp>

export const Account: Story = {
  render: () => (
    <>
      <HoverCardComp>
        {EOAAccount.render(null, null)}
        {Syncing.render(null, null)}
      </HoverCardComp>
      <HoverCardComp>
        {EOAAccount.render(null, null)}
        {Synced.render(null, null)}
        {ChainOverview.render(null, null)}
      </HoverCardComp>
    </>
  ),
}

export const Contract: Story = {
  render: () => (
    <HoverCardComp>
      {ContractAccount.render(null, null)}
    </HoverCardComp>
  ),
}
