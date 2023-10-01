import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

const container = tv({
  base: 'flex flex-col max-h-[300px] gap-3 -mx-4 px-4 overflow-auto',
})

type ContainerVariants = VariantProps<typeof container>

type ContainerProps = ContainerVariants & {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = (props) => {
  const { children, ...rest } = props
  return <div className={container(rest)}>{children}</div>
}
