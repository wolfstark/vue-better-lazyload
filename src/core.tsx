import VLazyLoad from './lazyload-component'
import Container from './container'
import { on, off } from './event'
import throttle from 'lodash.throttle'
import checkVisible from './check-visible'
export default class Core {
  listenerQueue: Array<VLazyLoad> = []
  containerQueue: Array<Container>= []
  eventList: Array<string>= ['scroll', 'wheel', 'resize', 'animationend', 'transitionend', 'touchmove']
  constructor () {
    this.lazyLoadHandler = throttle(this.lazyLoadHandler,200)
  }
  addListener (listener: VLazyLoad) {
    this.listenerQueue.push(listener)
  }
  addContainer (container: Container) {
    const hasContainer = this.containerQueue.some(item => item.$el === container.$el)
    if (hasContainer) {
      container.listenerCount += 1
    } else {
      this.bindListenerHandle(container.$el)
      this.containerQueue.push(container)
    }
  }
  bindListenerHandle (node: HTMLElement | Window) {
    this.eventList.forEach(event => on(node,event,this.lazyLoadHandler.bind(this)))
  }
  removeListenerHandle (node: HTMLElement | Window) {
    this.eventList.forEach(event => off(node,event,this.lazyLoadHandler.bind(this)))
  }
  lazyLoadHandler () {
    this.listenerQueue.forEach(listener => {
      if (checkVisible(listener.$el)) listener.load()
    })
  }
}
