export const getTextWidth = (text, font) => {
  if (typeof document === 'undefined') {
    return 'auto'
  }
  // re-use canvas object for better performance
  const canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement('canvas'))

  const context = canvas.getContext('2d')
  context.font = font

  const metrics = context.measureText(text)

  return metrics.width
}
