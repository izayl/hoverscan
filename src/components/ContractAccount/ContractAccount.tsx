import React, { useEffect, useState } from 'react'
import type { Address } from 'viem'
import { eoaSlots } from '../EOAAccount/EOAAccount.styles'
import { Column, Row } from '../Layout'
import { IdentIcon } from '../IdentIcon'
import { contractAccountSlots } from './ContractAccount.styles'
import { mainnet, mainnetClient } from '~/chain'
import type { ContractInfo } from '~/chain/explorer'
import { getContractInfo } from '~/chain/explorer'
import { type ContractType, useContractType } from '~/hooks'

type ContractAccountProps = {
  address?: Address
}

const { tag, metaInfoGroup, metaInfoItem } = contractAccountSlots()
const { addressText } = eoaSlots()

export const ContractAccount: React.FC<ContractAccountProps> = ({
  address,
}) => {
  const [contractInfo, setContractInfo] = useState<ContractInfo>({
    name: '...',
    verified: false,
  })
  const [contractType, setContractType] = useState<ContractType>('Unknown Type')
  const getContractType = useContractType()
  // @notice: support mainnet only for now
  const viewOnExplorer = () => {
    window.open(`${mainnet.blockExplorers.default.url}/address/${address}`, '_blank')
  }
  const viewSourceCode = () => {
    if (contractInfo.verified) window.open(`https://vscode.blockscan.com/ethereum/${address}`, '_blank')
  }
  const viewOnExchange = () => {
    if (contractType === 'ERC20') {
      window.open(`https://etherscan.io/token/${address}`, '_blank')
    } else if (contractType === 'ERC1155' || contractType === 'ERC721') {
      window.open(`https://opensea.io/assets?search[query]=${address}`, '_blank')
    }
  }

  useEffect(() => {
    try {
      getContractInfo(mainnet.id, address).then(setContractInfo)
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
            <span className="font-medium dark:text-gray-100">{contractInfo.name}</span>
            <span className={tag()}>Contract</span>
          </Row>
          <div className={addressText()}>
            {address}
          </div>
        </Column>
      </Row>
      <div className={metaInfoGroup()}>
        <div className={metaInfoItem({ class: 'rounded-r-none border-r-0' })} onClick={viewOnExchange}>{contractType}</div>
        <div className={metaInfoItem({ class: 'rounded-none' })} onClick={viewSourceCode}>{ contractInfo.verified ? '✅ Verified' : '🟡 Not Verified' }</div>
        <div className={metaInfoItem({ class: 'rounded-l-none border-l-0' })} onClick={viewOnExplorer}>Open Explorer</div>
      </div>
    </Column>
  )
}
