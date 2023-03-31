import React from 'react'
import { Address } from '../EOAAccount/EOAAccount.styles'
import { Column, Row } from '../Layout'
import { IdentIcon } from '../IdentIcon'
import { MetaInfoGroup, MetaInfoItem, Tag } from './ContractAccount.styles'

type ContractAccountProps = {
  address?: string
}

const ContractAccount: React.FC<ContractAccountProps> = ({
  address,
}) => {
  const contractName = 'Uniswap V2 Factory'
  return (
    <Column gap>
      <Row gap align="center">
        {/* @todo if contract is ERC20/ERC721/ERC1155, show the token image */}
        <IdentIcon address={address} />
        <Column gap justify="between">
          <Row gap>
            {contractName}
            <Tag>Contract</Tag>
          </Row>
          <Address>
            {address}
          </Address>
        </Column>
      </Row>
      <MetaInfoGroup>
        <MetaInfoItem>ERC20</MetaInfoItem>
        <MetaInfoItem>View Source</MetaInfoItem>
        <MetaInfoItem>Open Explorer</MetaInfoItem>
      </MetaInfoGroup>
    </Column>
  )
}

export default ContractAccount
