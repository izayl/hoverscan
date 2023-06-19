import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

const avatar = tv({
  base: 'w-12 h-12 rounded-full',
})

type AvatarVariants = VariantProps<typeof avatar>

type AvatarProps = AvatarVariants & {
  src: string
  alt?: string
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { src, alt, ...rest } = props
  return <img src={src} alt={alt} className={avatar(rest)} />
}
