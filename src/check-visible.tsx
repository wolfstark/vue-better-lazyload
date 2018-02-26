import VLazyLoad from './lazyload-component'

export default function checkVisible (listener: VLazyLoad): boolean {
  if (listener.container.$el === window) {
    return checkViewVisible(listener)
  } else {
    return checkContainerVisible(listener)
  }
}
function checkContainerVisible (listener: VLazyLoad) {
  const rect = listener.$el.getBoundingClientRect()
  const containerRect = (listener.container
    .$el as HTMLElement).getBoundingClientRect()

  const containerHeight = containerRect.height
  const containerWidth = containerRect.width

  const top = rect.top - containerRect.top
  const left = rect.left - containerRect.left
  const { height, width } = rect

  return computeVisible({
    top,
    left,
    height,
    width,
    containerHeight,
    containerWidth
  })
}
function checkViewVisible (listener: VLazyLoad) {
  const rect = listener.$el.getBoundingClientRect()

  const containerHeight = window.innerHeight
  const containerWidth = window.innerWidth

  // return computeVisible({ ...rect, containerHeight, containerWidth })
  return computeVisible(Object.assign(rect,{ containerHeight, containerWidth }))
}
function computeVisible ({
  top,
  left,
  height,
  width,
  containerHeight,
  containerWidth
}: any) {
  return (
    top < containerHeight &&
    top + height > 0 &&
    (left < containerWidth && left + width > 0)
  )
}
