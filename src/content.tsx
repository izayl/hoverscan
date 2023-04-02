import type { PlasmoCSConfig, PlasmoGetStyle, PlasmoRender } from 'plasmo'
import { getAddress, isAddress } from 'viem'
import { Provider, useAtom } from 'jotai'
import React, { useEffect, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { useMouseSelection, useWeb3Domain } from './hooks'
import { getCssText } from './stitches.config'
import { addressAtom } from './state/address'
import ALL_SUPPORTED_CHAINS from './chain/all'
import { ChainOverview, EOAAccount, HoverCard, Position, SyncStatus } from './components'
import { mainnet } from '~/chain'

console.log(`
 +-++-++-++-++-++-++-++-++-+
 |H||O||V||E||R||S||C||A||N|
 +-++-++-++-++-++-++-++-++-+
`)

export const config: PlasmoCSConfig = {
  matches: ['*://*/*'],
  all_frames: true,
}

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement('style')
  style.textContent = getCssText()
  return style
}

// @fixme: stitches not support Shadow DOM now
export const getRootContainer = () => {
  const root = document.createElement('div')
  root.id = 'hoverscan-root'
  const firstChild = document.body.firstChild
  document.body.insertBefore(root, firstChild)
  return root
}

const HoverScanExtension: React.FC<{
  address: string
  onClose?: () => void
  position?: { x: number; y: number }
}> = ({
  address,
  onClose,
  position = { x: 0, y: 0 },
}) => {
  const { ensName } = useWeb3Domain()
  return (
    <Position x={position.x} y={position.y} offset={15}>
      <HoverCard onClose={onClose}>
        <EOAAccount ensName={ensName} address={address} />
        <SyncStatus syncChains={[mainnet]} syncedChains={[]} />
        {
          [mainnet].map((chain) => (
            <ChainOverview
              key={chain.id}
              address={address}
              chain={chain}
              nativeBalance="0"
              txn={0}
            />
          ))
        }
      </HoverCard>
    </Position>
  )
}

const Content = () => {
  const { selection, clearSelection, selectPosition } = useMouseSelection()
  const isOpen = useMemo(() => Boolean(selection?.toString()), [selection])
  const maybeAddress = useMemo(() => selection?.toString()?.trim(), [selection])
  // @todo support regex parse or dom parse for better recognition
  const isValidAddress = useMemo(() => isAddress(maybeAddress), [maybeAddress])
  const [address, setAddress] = useAtom(addressAtom)

  useEffect(() => {
    if (isAddress(maybeAddress)) {
      setAddress(getAddress(maybeAddress))
    } else {
      setAddress(null)
    }
  }, [maybeAddress])

  if (!isOpen || !isValidAddress) {
    return null
  }

  return (
    <HoverScanExtension
      address={address}
      position={selectPosition}
      onClose={clearSelection}
    />
  )
}

export const render: PlasmoRender = async ({ createRootContainer }) => {
  const rootContainer = await createRootContainer(null)
  const root = createRoot(rootContainer)
  root.render(<Provider><Content /></Provider>)
}

export default Content
