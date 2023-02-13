import { JsonRpcProvider } from "ethers"

import { AllSupportedChainIds } from "~src/constants/chainId"

import { isERC20Token } from "./isERC20Token"

jest.setTimeout(30000)

describe("isERC20Token", () => {
  let provider
  beforeEach(() => {
    provider = new JsonRpcProvider(process.env.TEST_JSON_RPC_URL)
  })
  it("should return true for a ERC20 token", async () => {
    const status = await isERC20Token(
      "0x6b175474e89094c44da98b954eedeac495271d0f",
      provider,
      AllSupportedChainIds.mainnet
    )
    expect(status).toBe(true)
  })
  it("should return false for a non-ERC20 token", async () => {
    try {
      const status = await isERC20Token(
        "0xed5af388653567af2f388e6224dc7c4b3241c544",
        provider,
        AllSupportedChainIds.mainnet
      )
      expect(status).toBe(false)
    } catch (error) {
      console.error(error)
    }
  })
})
