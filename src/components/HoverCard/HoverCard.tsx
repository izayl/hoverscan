import React from 'react'
import { Bookmark, Close, Icon, Pin, Sun } from '../icons'
import { Card, Column, Row, Text } from '../Layout'

type HoverCardProps = {
  address?: string
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

const HoverCard: React.FC<React.PropsWithChildren<HoverCardProps>> = ({
  address = '',
  children,
  onClose,
}) => {
  return (
    <Card>
      <Header onClose={onClose} />
      {children}
    </Card>
  )
}

export default HoverCard
