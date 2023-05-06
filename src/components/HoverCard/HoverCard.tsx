import React, { forwardRef } from 'react'
import { Bookmark, Close, Icon, Pin, Sun } from '../icons'
import { Card, Row, Text } from '../Layout'

type HoverCardProps = {
  onClose?: () => void
}

const Header: React.FC<{
  onClose?: () => void
}> = ({
  onClose,
}) => {
  return (
    <Row justify="between" css={{ width: '100%' }}>
      <Text css={{ fontWeight: 600 }}>Hoverscan</Text>

      <Row css={{ gap: 10 }} align="center">
        {/* <Icon type={<Pin />} /> */}
        {/* <Icon type={<Sun />} /> */}
        {/* <Icon type={<Bookmark />} /> */}
        <Icon type={<Close />} onClick={onClose} />
      </Row>
    </Row>
  )
}

export const HoverCard = forwardRef<HTMLDivElement, React.PropsWithChildren<HoverCardProps>>(({
  children,
  onClose,
}, ref) => {
  return (
    <Card ref={ref}>
      <Header onClose={onClose} />
      {children}
    </Card>
  )
})

HoverCard.displayName = 'HoverCard'
