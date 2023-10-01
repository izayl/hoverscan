
import React, { memo } from 'react'
import type { SVGProps } from '.'

const ChevronRight: React.FC<SVGProps> = ({
  size = 16,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      height={size || height}
      width={size || width}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 12L10 8L6 4" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

const MemoChevronRight = memo(ChevronRight)

export default MemoChevronRight
