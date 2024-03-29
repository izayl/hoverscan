import React from 'react'
export * from './Avatar'
export * from './Card'
export * from './Container'
export * from './Column'
export * from './Row'
export * from './Text'

// export const Card = styled('div', {
//   padding: 16,
//   display: 'flex',
//   flexDirection: 'column',
//   background: '$bg0',
//   gap: '$container',
//   minWidth: 340,
//   maxWidth: 400,
//   boxShadow: '0px 3.2px 7.2px rgba(0, 0, 0, 0.132), 0px 0.6px 1.8px rgba(0, 0, 0, 0.108)',
//   borderRadius: 6,

//   fontFamily: '$sans',
// })

export const Position: React.FC<React.PropsWithChildren<{
  x: number
  y: number
  offset?: number
}>> = ({
  x,
  y,
  offset = 0,
  children,
}) => {
  // @todo use react portal
  // @todo detect if the position is out of the viewport
  // @todo detect window resize
  return (
    <div
      style={{
        position: 'fixed',
        left: (x ?? 0),
        top: (y ?? 0) + offset,
        zIndex: 2147483647,
      }}
    >
      {children}
    </div>
  )
}

// export const Avatar = styled('img', {
//   height: 48,
//   width: 48,
//   borderRadius: '50%',
// })

// export const Container = styled('div', {
//   maxHeight: 300,
//   overflow: 'auto',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: 12,
//   marginRight: -16,
//   marginLeft: -16,
//   paddingLeft: 16,
//   paddingRight: 16,
// })
