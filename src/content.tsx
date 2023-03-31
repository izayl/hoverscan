import type { PlasmoCSConfig, PlasmoGetStyle, PlasmoRender, PlasmoWatchOverlayAnchor } from 'plasmo'
import React, { useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { useMouseSelection } from './hooks'
import HoverCard from './components/HoverCard/HoverCard'
import { getCssText } from './stitches.config'
import { Position } from './components/Layout'

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

const Content = () => {
  const { selectPosition, selection, clearSelection } = useMouseSelection()
  const isOpen = useMemo(() => Boolean(selection?.toString()), [selection])

  if (!isOpen) {
    return null
  }

  return (
    <Position x={selectPosition.x} y={selectPosition.y} offset={15}>
      <HoverCard onClose={clearSelection}>
        <div>{selection?.toString()}</div>
      </HoverCard>
    </Position>
  )
}

export const render: PlasmoRender = async ({ createRootContainer }) => {
  const rootContainer = await createRootContainer(null)
  const root = createRoot(rootContainer)
  root.render(<Content />)
}

export default Content
