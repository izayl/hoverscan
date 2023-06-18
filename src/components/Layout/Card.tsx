import React, { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

const card = tv({
  base: 'p-4 flex flex-col bg-white gap-container min-w-[340px] max-w-[400px] shadow-md rounded-md font-sans',
})

type CardVariants = VariantProps<typeof card>
type CardProps = CardVariants & {
  children: React.ReactNode
}

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { children, ...rest } = props
  return <div ref={ref} className={card(rest)}>{children}</div>
})

Card.displayName = 'Card'
