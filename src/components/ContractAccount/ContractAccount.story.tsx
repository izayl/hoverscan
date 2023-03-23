
import type { Meta, StoryObj } from '@storybook/react'
import ContractComp from './ContractAccount'

const meta: Meta<typeof ContractComp> = {
  title: 'UI/Account',
  component: ContractComp,
}

export default meta
type Story = StoryObj<typeof ContractComp>

export const Contract: Story = {
  render: () => (
    <ContractComp
      address="0x4200000000000000000000000000000000000006"
    />
  ),
}
