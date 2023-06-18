import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

const avatar = tv({
  base: 'w-12 h-12 rounded-full',
})

type AvatarVariants = VariantProps<typeof avatar>

type AvatarProps = AvatarVariants & {
  children: React.ReactNode
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { children, ...rest } = props
  return <img className={avatar(rest)}>{children}</img>
}
