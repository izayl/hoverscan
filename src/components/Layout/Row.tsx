import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

const row = tv({
  base: 'flex flex-row',
  variants: {
    justify: {
      center: 'justify-center',
      between: 'justify-between',
    },
    align: {
      center: 'items-center',
      start: 'items-start',
      end: 'items-end',
      baseline: 'items-baseline',
    },
    gap: {
      true: 'gap-3',
      false: '',
      10: 'gap-2.5',
    },
    width: {
      fullWidth: 'w-full',
    },
  },
  defaultVariants: {
    align: 'start',
  },
})

type RowVariants = VariantProps<typeof row>

type RowProps = RowVariants & {
  children: React.ReactNode
}

export const Row: React.FC<RowProps> = (props) => {
  const { children, ...rest } = props
  return <div className={row(rest)}>{children}</div>
}
