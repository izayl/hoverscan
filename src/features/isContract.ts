import type { Provider } from "ethers"

export const isContract = async (address: string, provider: Provider) => {
  const code = await provider.getCode(address)
  return code !== "0x"
}
