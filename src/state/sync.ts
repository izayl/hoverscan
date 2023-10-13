import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { type Chain, type PublicClient, createPublicClient, http } from 'viem'
import { addressAtom } from './address'
import { ALL_SUPPORTED_CHAINS } from '~/chain'
import { rpcs } from '~/chain/rpcs'

export const syncChainsAtom = atom<Chain[]>(ALL_SUPPORTED_CHAINS)

export const inSyncAtom = atom(false)

export const syncClientsAtom = atom<PublicClient[]>(get => {
  const chains = get(syncChainsAtom)
  return chains.map(chain =>
    createPublicClient({
      chain,
      transport: http(rpcs[chain.id]),
    }),
  )
})

export type EOASyncState = {
  txn: number
  balance: bigint
  chain: Chain
}

export const eoaSyncTimeAtom = atom<number>(0)
export const eoaSyncStatesAtom = atom<Record<Chain['id'], EOASyncState>>({})
export const syncedEOAChains = atom(get => {
  const states = get(eoaSyncStatesAtom)
  return Object.keys(states).map(id => states[id]?.chain)
})
export const syncedExistEOAStatesAtom = atom(get => {
  const states = get(eoaSyncStatesAtom)
  return Object.values(states).filter(state => state.txn > 0 || state.balance > 0)
})

export const useEOASync = () => {
  const address = useAtomValue(addressAtom)
  const clients = useAtomValue(syncClientsAtom)
  const [inSync, setInSync] = useAtom(inSyncAtom)
  const setStates = useSetAtom(eoaSyncStatesAtom)
  const [syncTime, setSyncTime] = useAtom(eoaSyncTimeAtom)

  useEffect(() => {
    if (inSync) return
    if (!address) {
      setStates({})
      return
    }
    if (!syncTime) {
      setSyncTime(Date.now())
    }
    setStates({})
    setInSync(true)
    Promise.all(clients.map(async client => {
      const [txn, balance] = await Promise.all([
        client.getTransactionCount({ address }),
        client.getBalance({ address }),
      ])

      setStates(states => ({
        ...states,
        [client.chain.id]: {
          txn,
          balance,
          chain: client.chain,
        },
      }))
    })).then(() => {
      setInSync(false)
    })
  }, [address, clients, setStates, syncTime])
}
