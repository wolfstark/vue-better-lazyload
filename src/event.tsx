// 测试是否兼容被动事件,如果不兼容会抛出异常

function passiveEventSupported () {
  let flag = false
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get () {
        flag = true
      }
    })
    window.addEventListener('test', null, opts)
    window.removeEventListener('test', null, false)
  } catch (e) { console.warn('not suppot passive') }
  return flag
}
// 如果不兼容使用原始冒泡参数
const passiveEvent: boolean | AddEventListenerOptions = passiveEventSupported()
  ? { capture: false, passive: true }
  : false

export function on (
  el: HTMLElement | Window,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options: boolean | AddEventListenerOptions = passiveEvent
) {
  el.addEventListener(type, listener, passiveEvent)
}

export function off (
  el: HTMLElement | Window,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options: boolean | AddEventListenerOptions = passiveEvent
) {
  el.removeEventListener(type, listener, false)
}
