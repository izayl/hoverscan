import { useCallback, useEffect, useState } from 'react'

const ZERO_POSITION = { x: 0, y: 0 }

export const useMouseSelection = () => {
  const [selectPosition, setSelectPosition] = useState(ZERO_POSITION)
  const [selection, setSelection] = useState<Selection|null>(null)

  const onMouseUp = useCallback((e: MouseEvent) => {
    const selection = window.getSelection()
    if (selection && selection.toString()) {
      setSelectPosition({ x: e.clientX, y: e.clientY })
      setSelection(selection)
    } else {
      setSelection(null)
      setSelectPosition(ZERO_POSITION)
    }
  }, [setSelectPosition])

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp)

    return () => {
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return {
    selectPosition,
    selection,
  }
}
