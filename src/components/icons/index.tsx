import { CSS, styled } from '@stitches/react'
import type { ComponentProps } from 'react'

export interface IconProps {
  fill?: string
  filled?: boolean
  size?: string | number
  height?: string | number
  width?: string | number
  label?: string
  onClick?: () => void
  className?: string
  css?: CSS
}

export { default as Pin } from './Pin'
export { default as Close } from './Close'
export { default as Bookmark } from './Bookmark'
export { default as Sun } from './Sun'
export { default as Moon } from './Moon'
export { default as ENSMark } from './ENS'
export { default as UNSMark } from './UNS'

const IconWrapper = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: 3,
  background: '#fff',
  padding: 3,

  '&:hover': {
    filter: 'brightness(0.95)',
  },
})

export const Icon: React.FC<{
  children?: React.ReactNode
  type?: React.ReactNode
} & ComponentProps<typeof IconWrapper>> = ({
  children,
  type,
  ...props
}) => {
  return (<IconWrapper {...props}>{ children || type }</IconWrapper>)
}
