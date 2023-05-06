import { MutableRefObject, useEffect, useState } from 'react'

const ZERO_POSITION = { x: 0, y: 0 }

export const useMouseSelection = (ref?: MutableRefObject<HTMLElement | null>) => {
  const [selectPosition, setSelectPosition] = useState(ZERO_POSITION)
  const [selection, setSelection] = useState<Selection|null>(null)

  const onMouseUp = (e: MouseEvent) => {
    if (ref?.current?.contains(e.target as Node)) return
    const selection = window.getSelection()
    if (selection?.toString()) {
      setSelection(selection)

      const domRect = selection.focusNode.parentElement.getBoundingClientRect()
      setSelectPosition({
        x: domRect.x,
        y: domRect.y + domRect.height,
      })
    } else {
      setSelection(null)
      setSelectPosition(ZERO_POSITION)
    }
  }

  const clearSelection = (e?: MouseEvent) => {
    if (ref?.current?.contains(e?.target as Node)) return
    setSelection(null)
    if (window.getSelection) {
      if (window.getSelection()?.empty) { // Chrome
        window.getSelection()?.empty()
      } else if (window.getSelection()?.removeAllRanges) { // Firefox
        window.getSelection()?.removeAllRanges()
      }
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mousedown', clearSelection)

    return () => {
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mousedown', clearSelection)
    }
  }, [])

  return {
    selectPosition,
    selection,
    clearSelection,
  }
}
