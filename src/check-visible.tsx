import VLazyLoad from './lazyload-component'

export default function checkVisible (listener: VLazyLoad) {
  if (listener.container.$el === window) {
    checkViewVisible(listener)
  } else {
    checkContainerVisible(listener)
  }
}
function checkContainerVisible (listener: VLazyLoad) {
  const rect = listener.$el.getBoundingClientRect()
  const containerRect = (listener.container
    .$el as HTMLElement).getBoundingClientRect()

  const containerHeight = containerRect.height
  const containerWidth = containerRect.width

  rect.top = rect.top - containerRect.top
  rect.left = rect.left - containerRect.left
  computeVisible({ ...rect, containerHeight, containerWidth })
}
function checkViewVisible (listener: VLazyLoad) {
  const rect = listener.$el.getBoundingClientRect()

  const containerHeight = window.innerHeight
  const containerWidth = window.innerWidth

  computeVisible({ ...rect, containerHeight, containerWidth })
}
function computeVisible ({
  top,
  left,
  height,
  wdith,
  containerHeight,
  containerWidth
}: any) {
  return (
    top < containerHeight &&
    top + height > 0 &&
    (left < containerWidth && left + wdith > 0)
  )
}
