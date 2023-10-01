import React from 'react'
import { tv } from 'tailwind-variants'

export interface SVGProps {
  fill?: string
  filled?: boolean
  size?: string | number
  height?: string | number
  width?: string | number
  label?: string
  onClick?: () => void
  className?: string
}

interface IconProps extends SVGProps {
  type?: React.ReactNode
}

export { default as Pin } from './Pin'
export { default as Close } from './Close'
export { default as Bookmark } from './Bookmark'
export { default as Sun } from './Sun'
export { default as Moon } from './Moon'
export { default as ENSMark } from './ENS'
export { default as UNSMark } from './UNS'
export { default as ChevronRight } from './ChevronRight'

const icon = tv({
  base: 'flex items-center justify-center cursor-pointer rounded-sm bg-white p-0.5 hover:brightness-[0.95]',
})

export const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({
  children,
  type,
  className,
  ...props
}) => {
  return (<span className={icon({ class: className })} {...props}>{ children || type }</span>)
}
