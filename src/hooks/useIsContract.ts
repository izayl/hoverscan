import { useEffect, useState } from 'react'
import { Address, PublicClient, isAddress } from 'viem'

export const useIsContract = (client: PublicClient, address?: Address) => {
  const [isContract, setIsContract] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if (!address || !isAddress(address)) return

    const checkIsContract = async () => {
      client.getBytecode({ address }).then((code) => {
        setIsContract(Boolean(code))
      })
    }

    checkIsContract()
  }, [address, client])

  return isContract
}
