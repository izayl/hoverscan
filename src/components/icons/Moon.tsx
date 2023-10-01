
import React, { memo } from 'react'
import type { SVGProps } from '.'

const Sun: React.FC<SVGProps> = ({
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
      <path d="M21.9548 12.9566C20.5779 15.3719 17.9791 17.0003 15 17.0003C10.5817 17.0003 7 13.4186 7 9.00033C7 6.02096 8.62867 3.42199 11.0443 2.04517C5.96975 2.52631 2 6.79961 2 12.0001C2 17.5229 6.47715 22.0001 12 22.0001C17.2002 22.0001 21.4733 18.0308 21.9548 12.9566Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

const MemoSun = memo(Sun)

export default MemoSun
