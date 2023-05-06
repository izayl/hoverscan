import { useCallback } from 'react'
import type { Address, PublicClient } from 'viem'
import { isERC20Contract } from '~/utils/isERC20Contract'
import { isNFTContract } from '~/utils/isNFTContract'

const contractTypes = [
  'ERC20',
  'ERC721',
  'ERC1155',
  'Unknown Type',
]

export type ContractType = typeof contractTypes[number]

export const useContractType = () => {
  return useCallback(async (address: Address, client: PublicClient) => {
    try {
      const [{ isERC721, isERC1155 }, isERC20] = await Promise.all([
        isNFTContract(address, client),
        isERC20Contract(address, client),
      ])
      console.log({ isERC721, isERC1155, isERC20 })
      if (isERC1155) return 'ERC1155'
      if (isERC721) return 'ERC721'
      if (isERC20) return 'ERC20'
      return 'Unknown Type'
    } catch (error) {
      console.error(error)
      return 'Unknown Type'
    }
  }, [])
}
