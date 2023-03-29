
import React, { memo } from 'react'
import type { IconProps } from '.'

const Sun: React.FC<IconProps> = ({
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

      <g clipPath="url(#sun_icon)">
        <path d="M9 1.5V3M9 15V16.5M3 9H1.5M4.73559 4.73559L3.67493 3.67493M13.2644 4.73559L14.3251 3.67493M4.73559 13.2675L3.67493 14.3282M13.2644 13.2675L14.3251 14.3282M16.5 9H15M12.75 9C12.75 11.0711 11.0711 12.75 9 12.75C6.92893 12.75 5.25 11.0711 5.25 9C5.25 6.92893 6.92893 5.25 9 5.25C11.0711 5.25 12.75 6.92893 12.75 9Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="sun_icon">
          <rect width="18" height="18" fill="white"/>
        </clipPath>
      </defs>
    </svg>

  )
}

const MemoSun = memo(Sun)

export default MemoSun
