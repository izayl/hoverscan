import { useMemo, useState } from 'react'
import { Address } from '../EOAAccount/EOAAccount.styles'
import { Column, Row } from '../Layout'
import { Avatar, MetaInfoGroup, MetaInfoItem, Tag } from './ContractAccount.styles'

type ContractAccountProps = {
  address?: string
}

const ContractAccount: React.FC<ContractAccountProps> = ({
  address,
}) => {
  // @todo if contract is ERC20/ERC721/ERC1155, show the token image,
  //       otherwise show the contract hash image
  const avatar = 'http://place-hold.it/200x200/0033CC/FFFFFF/gif&text=null.gif'
  const contractName = 'Uniswap V2 Factory'
  return (
    <Column gap>
      <Row gap align="center">
        <Avatar src={avatar} alt="avatar" />
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
