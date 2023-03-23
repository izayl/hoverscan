import { useMemo, useState } from 'react'
import { ENSMark, UNSMark } from '../icons'
import { Column, Row } from '../Layout'
import { Address, Avatar, LensGradientText, ResolvedName } from './EOAAccount.styles'

type EOAAccountProps = {
  address?: string

  ensName?: string
  ensAvatar?: string

  unsName?: string
  unsAvatar?: string

  lensName?: string
  lensAvatar?: string
}

enum NameHandle {
  ENS = 'ENS',
  UNS = 'Unstoppable Domains',
  LENS = 'Lens',
}

const EOAAccount: React.FC<EOAAccountProps> = ({
  address, ensName, ensAvatar, unsName, unsAvatar, lensName, lensAvatar,
}) => {
  const [selectedNameHandle, setSelectedNameHandle] = useState<NameHandle | null>(null)
  const avatar = useMemo(() => {
    if (selectedNameHandle === NameHandle.ENS) return ensAvatar
    if (selectedNameHandle === NameHandle.UNS) return unsAvatar
    if (selectedNameHandle === NameHandle.LENS) return lensAvatar

    return 'http://place-hold.it/200x200/0033CC/FFFFFF/gif&text=null.gif'
  }, [selectedNameHandle])
  return (
    <Row gap align="center">
      <Avatar src={avatar} alt="avatar" />
      <Column gap justify="between">
        <Row gap>
          <ResolvedName onClick={() => setSelectedNameHandle(NameHandle.ENS)}><ENSMark /> {ensName}</ResolvedName>
          <ResolvedName onClick={() => setSelectedNameHandle(NameHandle.LENS)}>🌿 <LensGradientText>{lensName}</LensGradientText></ResolvedName>
          <ResolvedName onClick={() => setSelectedNameHandle(NameHandle.UNS)}><UNSMark /> {unsName}</ResolvedName>
        </Row>
        <Address>
          {address}
        </Address>
      </Column>
    </Row>
  )
}

export default EOAAccount
