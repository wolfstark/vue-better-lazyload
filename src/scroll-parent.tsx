/**
 * @fileoverview 找到滚动容器,找不到则为 window
 */

export default (node: HTMLElement) => {
  if (!(node instanceof HTMLElement)) {
    return window
  }

  const overflowRegex = /(scroll|auto)/
  let parent = node

  while (parent) {
    if (parent === document.body || parent === document.documentElement || !parent.parentNode) {
      break
    }

    const overflow = getStyle(parent, 'overflow')
    const overflowX = getStyle(parent, 'overflow-x')
    const overflowY = getStyle(parent, 'overflow-y')

    if (overflowRegex.test(overflow + overflowX + overflowY)) {
      return parent
    }

    parent = parent.parentNode as HTMLElement
  }

  return window
}
const getStyle = (el: HTMLElement, prop: string) => window.getComputedStyle(el, null).getPropertyValue(prop)
