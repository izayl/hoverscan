import { type Address, type PublicClient, parseAbi } from 'viem'

const TotalSupplyABI = parseAbi([
  'function totalSupply() external view returns (uint256)',
])

export const isERC20Contract = async (
  address: Address,
  client: PublicClient,
) => {
  try {
    const [totalSupply] = await Promise.all([
      client.readContract({
        address,
        abi: TotalSupplyABI,
        functionName: 'totalSupply',
      }),
    ])
    return totalSupply !== null
  } catch (error) {
    console.error(error)
    return false
  }
}

// const publicClient = createPublicClient({
//   chain: mainnet,
//   transport: http(),
// })
// isERC20Contract('0xE888864070D52d50C56fC3E0FDdB8DBA645D49af', publicClient).then(console.log)
