import { atom } from 'jotai'
import { Chain, PublicClient, createPublicClient, http } from 'viem'
import { addressAtom } from './address'
import { ALL_SUPPORTED_CHAINS } from '~/chain'
import { getTxn } from '~/features'
import type { FeatureResolver } from '~/features/config'

const syncChains = atom<Chain[]>(ALL_SUPPORTED_CHAINS)

const syncClients = atom<PublicClient[]>(get => {
  const chains = get(syncChains)
  return chains.map(chain =>
    createPublicClient({
      chain,
      transport: http(),
    }),
  )
})

export const eoaFeaturesAtom = atom<FeatureResolver[]>([
  getTxn,
  getTxn,
])

export const eoaSyncAtom = atom(async (get) => {
  const address = get(addressAtom)
  const clients = get(syncClients)
  const features = get(eoaFeaturesAtom)

  console.log('syncing', { address })

  if (!address) {
    return Promise.resolve([{
      error: `Invalid address: ${address}`,
    }])
  }

  const resolveClients = (clients: PublicClient[], resolvers: (client: PublicClient) => Promise<Record<string, unknown>>) => {
    return clients.map(resolvers)
  }
  const resolveFeatures = async (client: PublicClient) => {
    return Promise.all(
      features.map(async (feature) => {
        return feature({
          publicClient: client,
          address,
        })
      }),
    ).then((results) => {
      return results.reduce((acc, result) => ({ ...acc, ...result }), {
        chain: client.chain,
      })
    })
  }

  return Promise.all(resolveClients(clients, resolveFeatures))
})
