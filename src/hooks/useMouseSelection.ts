import { useCallback, useEffect, useState } from 'react'

const ZERO_POSITION = { x: 0, y: 0 }

export const useMouseSelection = () => {
  const [selectPosition, setSelectPosition] = useState(ZERO_POSITION)
  const [selection, setSelection] = useState<Selection|null>(null)

  const onMouseUp = (e: MouseEvent) => {
    const selection = window.getSelection()
    if (selection && selection.toString()) {
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

  const clearSelection = () => {
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
