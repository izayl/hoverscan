import { type Address, type PublicClient, parseAbi } from 'viem'

const ERC165ABI = parseAbi([
  'function supportsInterface(bytes4 interfaceId) external view returns (bool)',
])

const erc721SupportSelector = '0x80ac58cd'
const erc1155SupportSelector = '0xd9b67a26'

export const isNFTContract = async (
  address: Address,
  client: PublicClient,
) => {
  try {
    const [isERC721, isERC1155] = await Promise.all([
      client.readContract({
        address,
        abi: ERC165ABI,
        functionName: 'supportsInterface',
        args: [erc721SupportSelector],
      }),
      client.readContract({
        address,
        abi: ERC165ABI,
        functionName: 'supportsInterface',
        args: [erc1155SupportSelector],
      }),
    ])
    return {
      isERC721,
      isERC1155,
      isERC165: true,
    }
  } catch (error) {
    console.error(error)
    return {
      isERC721: false,
      isERC1155: false,
      isERC165: false,
    }
  }
}

// const publicClient = createPublicClient({
//   chain: mainnet,
//   transport: http(),
// })
// isNFTContract('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', publicClient)
