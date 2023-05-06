import wretch from 'wretch'
import QueryStringAddon from 'wretch/addons/queryString'
import type { Address } from 'viem'
import { arbitrumOne, avalanche, bsc, fantom, mainnet, optimism, polygon } from './chains'

export type BlockScanApi = {
  // BlockScan Explorer name
  name?: string
  // Explorer for the given network(only support evm chain for now)
  chainId: number
  // Explorer api endpoint url
  endpoint: string
  // optional Explorer api key
  apiKey?: string
}

export const etherscanApi: BlockScanApi = {
  name: 'Etherscan',
  chainId: mainnet.id,
  endpoint: 'https://api.etherscan.io/api',
  apiKey: process.env.ETHERSCAN_API_KEY,
}

export const bscscanApi: BlockScanApi = {
  name: 'BscScan',
  chainId: bsc.id,
  endpoint: 'https://api.bscscan.com/api',
}

// @todo: add heco
// export const hecoscanApi: BlockScanApi = {
//   name: 'HecoScan',
//   chainId: heco.id,
//   endpoint: 'https://api.hecoinfo.com/api',
// }

export const fantomscanApi: BlockScanApi = {
  name: 'FantomScan',
  chainId: fantom.id,
  endpoint: 'https://api.ftmscan.com/api',
}

export const polygonScanApi: BlockScanApi = {
  name: 'PolygonScan',
  chainId: polygon.id,
  endpoint: 'https://api.polygonscan.com/api',
}

export const avalancheScanApi: BlockScanApi = {
  name: 'snowtrace',
  chainId: avalanche.id,
  endpoint: 'https://api.avax.network/ext/bc/C/rpc',
}

export const arbiscanApi: BlockScanApi = {
  name: 'ArbiScan',
  chainId: arbitrumOne.id,
  endpoint: 'https://arbiscan.io/api',
}

export const optimismscanApi: BlockScanApi = {
  name: 'OptimismScan',
  chainId: optimism.id,
  endpoint: 'https://optimistic.etherscan.io/api',
}

export const blockScanApis = [
  etherscanApi,
  bscscanApi,
  fantomscanApi,
  polygonScanApi,
  avalancheScanApi,
  arbiscanApi,
  optimismscanApi,
].reduce((acc, cur) => ({
  ...acc,
  [cur.chainId]: cur,
}), {})

export type ContractGetSourceCodeResponse = {
  status: string
  message: string
  result: Array<{
    SourceCode: string
    ABI: string
    ContractName: string
    CompilerVersion: string
    OptimizationUsed: string
    Runs: string
    ConstructorArguments: string
    EVMVersion: string
    Library: string
    LicenseType: string
    Proxy: string
    Implementation: string
    SwarmSource: string
  }>
}

export type ContractInfo = {
  name: string
  verified: boolean
}
export const getContractInfo = async (chainId: number, address: Address): Promise<ContractInfo> => {
  const api = blockScanApis[chainId]
  if (!api) {
    throw new Error('Unsupported chain')
  }
  const { result, status } = await wretch(api.endpoint)
    .addon(QueryStringAddon)
    .query({
      module: 'contract',
      action: 'getsourcecode',
      address,
    })
    .get()
    .json<ContractGetSourceCodeResponse>()

  // reach rate limit
  // {
  //   status: "0",
  //   message: "NOTOK",
  //   result: "Max rate limit reached, please use API Key for higher rate limit"
  // }
  if (status !== '1') {
    throw new Error('reach rate limit')
  }
  return {
    name: result[0]?.ContractName !== '' ? result[0]?.ContractName : 'Unknown',
    verified: result[0]?.SourceCode !== '',
  }
}
