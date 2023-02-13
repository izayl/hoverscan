import type { Provider } from "ethers"
import wretch from "wretch"

import { AllSupportedChainIds } from "~src/constants/chainId"
import { ALL_SUPPORTED_EXPLORERS } from "~src/constants/explorers"

import { isNFTContract } from "./isNFTContract"

export const isERC20Token = async (
  address: string,
  provider: Provider,
  chainId: AllSupportedChainIds = AllSupportedChainIds.mainnet
) => {
  const explorer = ALL_SUPPORTED_EXPLORERS[chainId]

  if (!explorer) {
    console.warn(`Explorer for chainId ${chainId} not found`)
    return false
  }

  const [isNFT, result] = await Promise.all([
    isNFTContract(address, provider),
    wretch(
      `${explorer.endpoint}?apiKey=${explorer.apiKey}&module=stats&action=tokensupply&contractaddress=${address}`
    )
      .get()
      .json<{ result: "0" | string }>()
      .then((res) => res.result)
  ])

  console.log({ isNFT, result })

  return result !== "0" && !isNFT
}
