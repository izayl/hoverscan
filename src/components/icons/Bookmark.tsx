
import React, { memo } from 'react'
import { IconProps } from '.'

const Bookmark: React.FC<IconProps> = ({
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
      <path d="M3.75 5.85C3.75 4.58988 3.75 3.95982 3.99524 3.47852C4.21095 3.05516 4.55516 2.71095 4.97852 2.49524C5.45982 2.25 6.08988 2.25 7.35 2.25H10.65C11.9101 2.25 12.5402 2.25 13.0215 2.49524C13.4448 2.71095 13.789 3.05516 14.0048 3.47852C14.25 3.95982 14.25 4.58988 14.25 5.85V15.75L9 12.75L3.75 15.75V5.85Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

const MemoBookmark = memo(Bookmark)

export default MemoBookmark
