import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'
import { mainnetClient } from '~/chain/client'
import { addressAtom } from '~/state/address'

export const useWeb3Domain = () => {
  const address = useAtomValue(addressAtom)
  const [ensName, setEnsName] = useState<string | null>(null)

  useEffect(() => {
    if (address) {
      mainnetClient
        .getEnsName({ address: address as `0x${string}` })
        .then(res => {
          return res
        })
        .then(setEnsName)
        .catch(console.error)
    }
  }, [address])

  return { ensName }
}
