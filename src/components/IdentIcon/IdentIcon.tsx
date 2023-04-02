import React, { useEffect, useRef, useState } from 'react'
import { renderIcon } from '@download/blockies'
import { Avatar } from '../Layout'

type IdentIconProps = {
  address: string
  size?: number
}

export const IdentIcon: React.FC<IdentIconProps> = ({
  address,
}) => {
  const [dataUrl, setDataUrl] = useState(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    renderIcon({ seed: address?.toLowerCase() }, canvas)
    const updatedDataUrl = canvas.toDataURL()

    if (updatedDataUrl !== dataUrl) {
      setDataUrl(updatedDataUrl)
    }
  }, [dataUrl, address])

  return (
    <>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <Avatar src={dataUrl} alt={address} />
    </>
  )
}
