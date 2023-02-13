import wretch from "wretch"

import { AllSupportedChainIds } from "~src/constants/chainId"
import { ALL_SUPPORTED_EXPLORERS } from "~src/constants/explorers"

export const getContractVerifyStatus = async (
  address: string,
  chainId: AllSupportedChainIds = AllSupportedChainIds.mainnet
) => {
  const explorer = ALL_SUPPORTED_EXPLORERS[chainId]

  if (!explorer) {
    console.warn(`Explorer for chainId ${chainId} not found`)
    return false
  }

  const { status } = await wretch(
    `${explorer.endpoint}?apiKey=${explorer.apiKey}&module=contract&action=getabi&address=${address}`
  )
    .get()
    .json<{ status: "1" | "0" }>()

  return status === "1"
}
