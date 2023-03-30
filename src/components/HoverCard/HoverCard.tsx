import { Bookmark, Close, Icon, Pin, Sun } from '../icons'
import { Card, Column, Row, Text } from '../Layout'

type HoverCardProps = {
  open?: boolean
  address?: string
}

const Header = () => {
  return (
    <Row justify="between" css={{ width: '100%' }}>
      <Text css={{ fontWeight: 600 }}>Hoverscan</Text>

      <Row css={{ gap: 10 }} align="center">
        {/* <Icon type={<Pin />} /> */}
        {/* <Icon type={<Sun />} /> */}
        {/* <Icon type={<Bookmark />} /> */}
        <Icon type={<Close />} />
      </Row>
    </Row>
  )
}

const HoverCard: React.FC<React.PropsWithChildren<HoverCardProps>> = ({
  open = false,
  address = '',
  children,
}) => {
  if (!open) {
    return null
  }

  return (
    <Card>
      <Header />
      {children}
    </Card>
  )
}

export default HoverCard
