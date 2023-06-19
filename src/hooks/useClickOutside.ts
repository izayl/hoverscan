import { useEffect } from 'react'

export const useClickOutside = (
  shadowRoot: string,
  handler: (event: MouseEvent | TouchEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const shadowRootEl = event.target as Element
      if (shadowRootEl?.tagName?.toLowerCase() === shadowRoot.toLowerCase()) return

      handler(event)
    }
    document.addEventListener('click', listener)

    return () => {
      document.removeEventListener('click', listener)
    }
  }, [shadowRoot, handler])
}
