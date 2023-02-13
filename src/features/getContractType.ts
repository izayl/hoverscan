import type { Provider } from "ethers"

import type { ContractType } from "~src/types"

import { isERC20Token } from "./isERC20Token"
import { isNFTContract } from "./isNFTContract"

export const getContractType = async (address: string, provider: Provider) => {
  let contractType: ContractType = null
  if (await isNFTContract(address, provider)) {
    contractType = "NFT"
  }

  if (await isERC20Token(address, provider)) {
    contractType = "Token"
  }

  return contractType
}
