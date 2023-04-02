
import type { Meta, StoryObj } from '@storybook/react'
import { EOAAccount as Account } from './'

const meta: Meta<typeof Account> = {
  title: 'UI/Account',
  component: Account,
}

export default meta
type Story = StoryObj<typeof Account>

export const EOA: Story = {
  render: () => (
    <Account
      address="0x4200000000000000000000000000000000000006"
      ensName="0x.eth"
      ensAvatar="https://avatars.githubusercontent.com/u/1378168?s=200&v=4"
      unsName="0x.bitcoin"
      unsAvatar="https://avatars.githubusercontent.com/u/1378169?s=200&v=4"
      lensName="0x.lens"
      lensAvatar="https://avatars.githubusercontent.com/u/1378170?s=200&v=4"
    />
  ),
}
