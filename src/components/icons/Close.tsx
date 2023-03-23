
import React, { memo } from 'react'
import { IconProps } from '.'

const Close: React.FC<IconProps> = ({
  size = 18,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      height={size || height}
      width={size || width}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

const MemoClose = memo(Close)

export default MemoClose
