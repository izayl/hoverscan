import type { Provider } from "ethers"

export const NativeTokenSymbol = "ether"

export const getNativeTokenBalance = async (
  address: string,
  provider: Provider
) => {
  return provider.getBalance(address)
}
