import React, { useMemo, useState } from 'react'
import type { Address } from 'viem'
import { ENSMark, UNSMark } from '../icons'
import { Avatar, Column, Row } from '../Layout'
import { IdentIcon } from '../IdentIcon'
import { AddressText, LensGradientText, ResolvedName, eoaSlots } from './EOAAccount.styles'

type EOAAccountProps = {
  address?: Address

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

const { resolvedName, lens, addressText } = eoaSlots()

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
          {ensName ? <div className={resolvedName()} onClick={() => setSelectedNameHandle(NameHandle.ENS)}><ENSMark /> {ensName}</div> : null}
          {lensName ? <div className={resolvedName()} onClick={() => setSelectedNameHandle(NameHandle.LENS)}>🌿 <span className={lens()}>{lensName}</span></div> : null}
          {unsName ? <div className={resolvedName()} onClick={() => setSelectedNameHandle(NameHandle.UNS)}><UNSMark /> {unsName}</div> : null}
        </Row>
        <div className={addressText()}>
          {address}
        </div>
      </Column>
    </Row>
  )
}
