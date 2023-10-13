export const getAvgColor = async ({
  base64,
  width = 100,
  height = 100,
  alpha,
  defaultColor = 'rgba(213, 213, 213, 0.2)',
  ignoredColors,
}: {
  base64: string
  width?: number
  height?: number
  alpha?: number
  defaultColor?: string
  ignoredColors?: [number, number, number][]
}) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext && canvas.getContext('2d')

  let data: ImageData

  if (!ctx) {
    console.log('no ctx')
    return defaultColor
  }
  let res
  const p = new Promise(resolve => {
    res = resolve
  })
  const image = new Image(width, height)
  image.onload = function () {
    res()
  }
  image.src = base64

  await p

  try {
    canvas.width = width
    canvas.height = height
    ctx.drawImage(image, 0, 0, width, height)
    data = ctx.getImageData(0, 0, width, height)
  } catch (e) {
    return defaultColor
  }

  const DEFAULT_DOMINANT_DIVIDER = 25
  const pixels = data.data

  let max = [0, 0, 0, 0, 0]
  const colorHash: Record<string, number[]> = {}

  if (ignoredColors.length) {
    ignoredColors = ignoredColors.map(([r, g, b]) => [Math.round(r / DEFAULT_DOMINANT_DIVIDER), Math.floor(g / DEFAULT_DOMINANT_DIVIDER), Math.floor(b / DEFAULT_DOMINANT_DIVIDER)])
  }
  for (let i = 0; i < pixels.length; i += 4) {
    const [_r, _g, _b, a] = pixels.slice(i, i + 4)
    const [r, g, b] = [_r, _g, _b].map(c => Math.round(c / DEFAULT_DOMINANT_DIVIDER))

    if (ignoredColors?.some(([ir, ig, ib]) => ir === r && ig === g && ib === b)) {
      continue
    }

    const key = `${r}-${g}-${b}`
    if (colorHash[key]) {
      colorHash[key] = [
        colorHash[key][0] + _r * a,
        colorHash[key][1] + _g * a,
        colorHash[key][2] + _b * a,
        colorHash[key][3] + a,
        colorHash[key][4] + 1,

      ]
    } else {
      colorHash[key] = [_r * a, _g * a, _b * a, a, 1]
    }

    if (max[4] < colorHash[key][4]) {
      max = colorHash[key]
    }
  }

  const rgba = {
    r: Math.floor(max[0] / max[3]),
    g: Math.floor(max[1] / max[3]),
    b: Math.floor(max[2] / max[3]),
    a: max[3] / max[4],
  }

  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${alpha ?? rgba.a})`
}
