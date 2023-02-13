import { ethers, isAddress } from "ethers"

import { AllSupportedChainIds } from "./constants/chainId"
import { ALL_SUPPORTED_EXPLORERS } from "./constants/explorers"
import { getContractCodeUrl } from "./features/getContractCodeUrl"
import { getContractType } from "./features/getContractType"
import { getContractVerifyStatus } from "./features/getContractVerifyStatus"
import { isContract } from "./features/isContract"
import { getNativeTokenBalance } from "./features/nativeTokenBalance"
import type { ContractType } from "./types"

const provider = new ethers.JsonRpcProvider()

export const lookup = async (address: string) => {
  if (!isAddress(address)) return

  const nativeTokenBalance = await getNativeTokenBalance(address, provider)
  const isContractAddress = await isContract(address, provider)
  const explorerUrl = ALL_SUPPORTED_EXPLORERS[AllSupportedChainIds.mainnet].url
  const url = new URL(`/address/${address}`, explorerUrl).toString()
  let contractCodeUrl: string | null = null
  let contractType: ContractType | null = null
  let contractVerified: Boolean | null = null

  if (isContractAddress) {
    contractCodeUrl = getContractCodeUrl(address, AllSupportedChainIds.mainnet)
    contractType = await getContractType(address, provider)
    contractVerified = await getContractVerifyStatus(
      address,
      AllSupportedChainIds.mainnet
    )
  }

  return {
    url,
    nativeTokenBalance,
    isContractAddress,
    contractCodeUrl,
    contractType
  }
}
