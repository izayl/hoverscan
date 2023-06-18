import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

const column = tv({
  base: 'flex flex-col',
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
      true: 'gap-2.5',
      false: '',
    },
  },
  defaultVariants: {
    align: 'start',
  },
})

type ColumnVariants = VariantProps<typeof column>

type ColumnProps = ColumnVariants & {
  children: React.ReactNode
}

export const Column: React.FC<ColumnProps> = (props) => {
  const { children, ...rest } = props
  return <div className={column(rest)}>{children}</div>
}
