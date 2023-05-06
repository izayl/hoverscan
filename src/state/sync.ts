import { atom, useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { Chain, PublicClient, createPublicClient, http } from 'viem'
import { addressAtom } from './address'
import { ALL_SUPPORTED_CHAINS } from '~/chain'

export const syncChainsAtom = atom<Chain[]>(ALL_SUPPORTED_CHAINS)

export const inSyncAtom = atom(false)

export const syncClientsAtom = atom<PublicClient[]>(get => {
  const chains = get(syncChainsAtom)
  return chains.map(chain =>
    createPublicClient({
      chain,
      transport: http(),
    }),
  )
})

export type EOASyncState = {
  txn: number
  balance: bigint
  chain: Chain
}

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
  const setInSync = useSetAtom(inSyncAtom)
  const setStates = useSetAtom(eoaSyncStatesAtom)

  useEffect(() => {
    if (!address) {
      setStates({})
      return
    }
    setInSync(true)
    Promise.all(clients.map(async client => {
      const [txn, balance] = await Promise.all([
        client.getTransactionCount({ address }),
        client.getBalance({ address }),
      ])
      console.log('sync', client.chain.id, txn, balance)
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
  }, [address, clients, setStates])
}
