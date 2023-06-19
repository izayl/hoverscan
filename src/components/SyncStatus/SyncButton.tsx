import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

const syncButton = tv({
  base: 'flex items-center text-black text-sm rounded-md px-1.5 py-1 border border-[#D7DCE5] gap-1.5 before:w-2 before:h-2 before:rounded-full',
  variants: {
    syncing: {
      true: 'cursor-wait before:bg-[#F2C94C]',
      false: 'cursor-pointer before:bg-[#27AE60]',
    },
  },
  defaultVariants: {
    syncing: true,
  },
})

type SyncButtonVariants = VariantProps<typeof syncButton>

type SyncButtonProps = SyncButtonVariants & {
  children: React.ReactNode
  onClick?: () => void
}

export const SyncButton: React.FC<SyncButtonProps> = (props) => {
  const { children, onClick, ...rest } = props
  return <div onClick={onClick} className={syncButton(rest)}>{children}</div>
}
