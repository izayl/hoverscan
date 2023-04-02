
import type { Meta, StoryObj } from '@storybook/react'
import { ContractAccount as Component } from './'

const meta: Meta<typeof Component> = {
  title: 'UI/Account',
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Contract: Story = {
  render: () => (
    <Component
      address="0x4200000000000000000000000000000000000006"
    />
  ),
}
