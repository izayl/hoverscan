import { Contract, Interface, Provider } from "ethers"

const IERC165 = new Interface([
  "function supportsInterface(bytes4 interfaceId) external view returns (bool)"
])
const IERC721 = new Interface([
  "function onERC721Received(address _operator, address _from, uint256 _tokenId, bytes _data) external returns(bytes4)"
])
const IERC1155 = new Interface([
  "function onERC1155Received(address _operator, address _from, uint256 _id, uint256 _value, bytes _data) external returns(bytes4)"
])

export const isNFTContract = async (
  address: string,
  provider: Provider
): Promise<boolean> => {
  try {
    const erc165Contract = new Contract(address, IERC165.fragments, provider)

    return (
      (await erc165Contract.supportsInterface(
        IERC165.getFunction("supportsInterface").selector
      )) ||
      (await erc165Contract.supportsInterface(
        IERC721.getFunction("onERC721Received").selector
      )) ||
      (await erc165Contract.supportsInterface(
        IERC1155.getFunction("onERC1155Received").selector
      ))
    )
  } catch (e) {
    if (process.env.NODE_ENV === "test") {
      console.error(e)
    }
    return false
  }
}
