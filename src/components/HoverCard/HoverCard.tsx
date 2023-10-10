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
    <Row justify="between" width="fullWidth">
      <Text font="semibold">Hoverscan</Text>

      <Row gap={10} align="center">
        {/* <Icon type={<Pin />} /> */}
        {/* <Icon type={<Sun />} /> */}
        {/* <Icon type={<Bookmark />} /> */}
        <Icon className="dark:invert" type={<Close />} onClick={onClose} />
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
