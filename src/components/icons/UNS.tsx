
import React, { memo } from 'react'
import type { SVGProps } from '.'

const UNSMark: React.FC<SVGProps> = ({
  size = 18,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 1080 1008.2"
      fill="none"
      height={size || height}
      width={size || width}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >

      <path fill="#00c9ff" d="M885.1 199.1v237.6L193.9 717.5z"/>
      <path d="M755.5 188.3v410.4c0 119.3-96.7 216-216 216s-216-96.7-216-216V425.9l129.6-71.3v244.1c0 41.8 33.8 75.6 75.6 75.6s75.6-33.8 75.6-75.6V271.4l151.2-83.1z" fill="#0d67fe"/>

    </svg>

  )
}

const MemoUNSMark = memo(UNSMark)

export default MemoUNSMark
