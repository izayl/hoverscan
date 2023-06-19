import type { PlasmoCSConfig, PlasmoRender } from 'plasmo'
import cssText from 'data-text:~/base.css'
import { type Address, getAddress, isAddress } from 'viem'
import { Provider, useAtom, useAtomValue } from 'jotai'
import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { useIsContract, useMouseSelection, useWeb3Domain } from './hooks'
import { addressAtom } from './state/address'
import {
  ChainOverview,
  Container,
  ContractAccount,
  EOAAccount,
  EOASyncStatus,
  HoverCard,
  Position,
} from './components'
import { syncedExistEOAStatesAtom, useEOASync } from './state/sync'
import { useClickOutside } from './hooks/useClickOutside'
import { mainnetClient } from '~/chain'

// console.log(`
//  +-++-++-++-++-++-++-++-++-+
//  |H||O||V||E||R||S||C||A||N|
//  +-++-++-++-++-++-++-++-++-+
// `)

export const config: PlasmoCSConfig = {
  matches: ['*://*/*'],
  all_frames: true,
}

export const getRootContainer = () => {
  const shadowHost = document.createElement('hoverscan-content')
  const shadowRoot = shadowHost.attachShadow({ mode: 'open' })
  const style = document.createElement('style')
  style.textContent = cssText
  shadowRoot.appendChild(style)
  document.body.insertAdjacentElement('beforebegin', shadowHost)
  return shadowRoot
}

const EoaOverview = () => {
  const existState = useAtomValue(syncedExistEOAStatesAtom)
  const address = useAtomValue(addressAtom)

  return (
    <>
      {
        existState.sort((a, b) => (a.txn - b.txn) > 0 ? -1 : 1).map(({ chain, txn, balance }) => (
          <ChainOverview
            key={chain.id}
            address={address}
            chain={chain}
            nativeBalance={balance}
            txn={txn}
          />
        ))
      }
    </>
  )
}

type HoverScanExtensionProps = {
  address: Address
  onClose?:() => void
  position?: { x: number; y: number }
}

const HoverScanExtension = forwardRef<HTMLDivElement, HoverScanExtensionProps>((props, ref) => {
  const { address, onClose, position = { x: 0, y: 0 } } = props
  const { ensName } = useWeb3Domain()
  const isContract = useIsContract(mainnetClient, address)
  useEOASync()

  return (
    <Position x={position.x} y={position.y} offset={15}>
      <HoverCard onClose={onClose} ref={ref}>
        {isContract
          ? (
            <ContractAccount address={address} />
          )
          : (
            <EOAAccount ensName={ensName} address={address} />
          )}
        <EOASyncStatus />
        <Container>
          <EoaOverview />
        </Container>
      </HoverCard>
    </Position>
  )
})
HoverScanExtension.displayName = 'HoverScanExtension'

const Content = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { selection, clearSelection, selectPosition } = useMouseSelection(ref)
  const [isOpen, setIsOpen] = useState(false)
  const maybeAddress = useMemo(() => selection?.toString()?.trim(), [selection])
  // @todo support regex parse or dom parse for better recognition
  const isValidAddress = useMemo(() => isAddress(maybeAddress), [maybeAddress])
  const [address, setAddress] = useAtom(addressAtom)

  useEffect(() => {
    if (isValidAddress) {
      setIsOpen(true)
    }
  }, [isValidAddress])

  useClickOutside(ref, () => {
    if (isOpen) {
      onClose()
    }
  })

  const onClose = () => {
    setIsOpen(false)
    clearSelection()
  }

  useEffect(() => {
    console.log('maybeAddress', maybeAddress)
    if (isAddress(maybeAddress)) {
      setAddress(getAddress(maybeAddress))
    }
  }, [maybeAddress])

  if (!isOpen) {
    return null
  }

  return (
    <HoverScanExtension
      ref={ref}
      address={address}
      position={selectPosition}
      onClose={onClose}
    />
  )
}

export const render: PlasmoRender<HTMLDivElement> = async ({ createRootContainer }) => {
  const rootContainer = await createRootContainer(null)
  const root = createRoot(rootContainer)
  root.render(
    <Provider>
      <Content />
    </Provider>,
  )
}

export default Content
