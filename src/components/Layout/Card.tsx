import React, { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

const card = tv({
  base: `
    p-4
    flex flex-col
  bg-white dark:bg-slate-900
    gap-container min-w-[340px] max-w-[400px]
    shadow-card
    rounded-md
    font-sans
    dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10
  `,
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
