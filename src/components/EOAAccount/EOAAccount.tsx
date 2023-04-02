import React, { useMemo, useState } from 'react'
import { ENSMark, UNSMark } from '../icons'
import { Avatar, Column, Row } from '../Layout'
import { IdentIcon } from '../IdentIcon'
import { Address, LensGradientText, ResolvedName } from './EOAAccount.styles'

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

export const EOAAccount: React.FC<EOAAccountProps> = ({
  address, ensName, ensAvatar, unsName, unsAvatar, lensName, lensAvatar,
}) => {
  const [selectedNameHandle, setSelectedNameHandle] = useState<NameHandle | null>(null)
  const avatar = useMemo(() => {
    if (selectedNameHandle === NameHandle.ENS) return ensAvatar
    if (selectedNameHandle === NameHandle.UNS) return unsAvatar
    if (selectedNameHandle === NameHandle.LENS) return lensAvatar

    return null
  }, [selectedNameHandle])
  return (
    <Row gap align="center">
      {avatar ? <Avatar src={avatar} alt="avatar" /> : <IdentIcon address={address} />}
      <Column gap justify="between">
        <Row gap>
          {ensName ? <ResolvedName onClick={() => setSelectedNameHandle(NameHandle.ENS)}><ENSMark /> {ensName}</ResolvedName> : null}
          {lensName ? <ResolvedName onClick={() => setSelectedNameHandle(NameHandle.LENS)}>🌿 <LensGradientText>{lensName}</LensGradientText></ResolvedName> : null}
          {unsName ? <ResolvedName onClick={() => setSelectedNameHandle(NameHandle.UNS)}><UNSMark /> {unsName}</ResolvedName> : null}
        </Row>
        <Address>
          {address}
        </Address>
      </Column>
    </Row>
  )
}
