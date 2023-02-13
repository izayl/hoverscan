export interface Explorer {
  // Explorer name
  name: string
  // Explorer for the given network(only support evm chain for now)
  chainId: number
  // Explorer api endpoint url
  endpoint: string
  // optional Explorer api key
  apiKey?: string
  // explorer url
  url: string
  // is testnet
  isTestnet?: boolean
}

export type ContractType = "NFT" | "Token" | null
