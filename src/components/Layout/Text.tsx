import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

const text = tv({
  base: 'm-0 text-base',
  variants: {
    font: {
      semibold: 'font-semibold',
    },
  },
})

type TextVariants = VariantProps<typeof text>

type TextProps = TextVariants & {
  children: React.ReactNode
}

export const Text: React.FC<TextProps> = (props) => {
  const { children, ...rest } = props
  return <div className={text(rest)}>{children}</div>
}
