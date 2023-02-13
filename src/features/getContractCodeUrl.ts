import { ALL_SUPPORTED_EXPLORERS } from "~src/constants/explorers"

export const getContractCodeUrl = (address: string, chainId: number) => {
  const explorer = ALL_SUPPORTED_EXPLORERS[chainId]

  if (!explorer) return null

  return `${explorer.url.replace(/\.\w+(\/)/, ".deth.net/")}/address/${address}`
}
