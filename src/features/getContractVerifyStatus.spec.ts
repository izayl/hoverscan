import { AllSupportedChainIds } from "~src/constants/chainId"

import { getContractVerifyStatus } from "./getContractVerifyStatus"

export {}
describe("getContractVerifyStatus", () => {
  it("should return true for a verified contract", async () => {
    const status = await getContractVerifyStatus(
      "0x6b175474e89094c44da98b954eedeac495271d0f",
      AllSupportedChainIds.mainnet
    )
    expect(status).toBe(true)
  })
  it("should return false for a non-verified contract", async () => {
    const status = await getContractVerifyStatus(
      "0x6b175474e89094c44da98b954eedeac495271d0d",
      AllSupportedChainIds.mainnet
    )
    expect(status).toBe(false)
  })
})
