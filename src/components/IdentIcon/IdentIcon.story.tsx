
import type { Meta, StoryObj } from '@storybook/react'
import { IdentIcon as Component } from './IdentIcon'

const meta: Meta<typeof Component> = {
  title: 'UI/IdentIcon',
  component: Component,
}

export default meta

type Story = StoryObj<typeof Component>

export const IdentIcon: Story = {
  render: () => (
    <Component address="0x4200000000000000000000000000000000000006" />
  ),
}
