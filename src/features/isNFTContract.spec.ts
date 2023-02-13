import { JsonRpcProvider } from "ethers"

import { isNFTContract } from "./isNFTContract"

export {}
describe("isNFTContract", () => {
  const provider = new JsonRpcProvider(process.env.TEST_JSON_RPC_URL)

  const erc721Address = "0xed5af388653567af2f388e6224dc7c4b3241c544"
  const erc1155Address = "0xf1f3ca6268f330fda08418db12171c3173ee39c9"
  const nonNFTAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"

  it("should return true for a contract that implements ERC721", async () => {
    const isNFT = await isNFTContract(erc721Address, provider)
    expect(isNFT).toBe(true)
  })
  it("should return true for a contract that implements ERC1155", async () => {
    const isNFT = await isNFTContract(erc1155Address, provider)
    expect(isNFT).toBe(true)
  })
  it("should return false for a contract that does not implement ERC721 or ERC1155", async () => {
    const isNFT = await isNFTContract(nonNFTAddress, provider)
    expect(isNFT).toBe(false)
  })
})
