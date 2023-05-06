import React, { useEffect, useState } from 'react'
import type { Address } from 'viem'
import { AddressText } from '../EOAAccount/EOAAccount.styles'
import { Column, Row } from '../Layout'
import { IdentIcon } from '../IdentIcon'
import { ContractName, MetaInfoGroup, MetaInfoItem, Tag } from './ContractAccount.styles'
import { mainnet, mainnetClient } from '~/chain'
import type { ContractInfo } from '~/chain/explorer'
import { getContractInfo } from '~/chain/explorer'
import { isNFTContract } from '~/utils/isNFTContract'
import { type ContractType, useContractType } from '~/hooks'

type ContractAccountProps = {
  address?: Address
}

export const ContractAccount: React.FC<ContractAccountProps> = ({
  address,
}) => {
  const [contractInfo, setContractInfo] = useState<ContractInfo>({
    name: '...',
    verified: false,
  })
  const [contractType, setContractType] = useState<ContractType>('Unknown Type')
  const getContractType = useContractType()

  console.log({ contractType })

  useEffect(() => {
    try {
      getContractInfo(mainnet.id, address).then((info) => {
        console.log({ info })
        setContractInfo(info)
      })
      getContractType(address, mainnetClient).then(setContractType)
    } catch (error) {
      console.error(error)
    }
  }, [address, getContractType])

  return (
    <Column gap>
      <Row gap align="center">
        {/* @todo if contract is ERC20/ERC721/ERC1155, show the token image */}
        <IdentIcon address={address} />
        <Column gap justify="between">
          <Row gap align="baseline">
            <ContractName>{contractInfo.name}</ContractName>
            <Tag>Contract</Tag>
          </Row>
          <AddressText>
            {address}
          </AddressText>
        </Column>
      </Row>
      <MetaInfoGroup>
        <MetaInfoItem>{contractType}</MetaInfoItem>
        <MetaInfoItem>{ contractInfo.verified ? 'Verified' : 'Not Verified' }</MetaInfoItem>
        <MetaInfoItem>Open Explorer</MetaInfoItem>
      </MetaInfoGroup>
    </Column>
  )
}
