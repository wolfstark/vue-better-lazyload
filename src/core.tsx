import throttle from 'lodash.throttle'

import checkVisible from './check-visible'
import Container from './container'
import { off, on } from './event'
import VLazyLoad from './lazyload-component'
import ImageLoader from './image-loader'

export default class Core {
  listenerQueue: Array<VLazyLoad> = []
  containerQueue: Array<Container> = []
  eventList: Array<string> = [
    'scroll',
    'wheel',
    'resize',
    'animationend',
    'transitionend',
    'touchmove'
  ]
  imageLoader: ImageLoader
  constructor () {
    this.lazyLoadHandler = throttle(this.lazyLoadHandler, 200)
    this.imageLoader = new ImageLoader(3)
  }
  addListener (listener: VLazyLoad) {
    this.listenerQueue.push(listener)
  }
  addContainer (container: Container) {
    const hasContainer = this.containerQueue.some(
      item => item.$el === container.$el
    )
    if (hasContainer) {
      container.listenerCount += 1
    } else {
      this.bindListenerHandle(container.$el)
      this.containerQueue.push(container)
    }
  }
  removeListener (listener: VLazyLoad) {
    const index = this.listenerQueue.indexOf(listener)

    if (index !== -1) this.listenerQueue.splice(index, 1)
    this.removeContainer(listener)
    listener = null
  }
  removeContainer (listener: VLazyLoad) {
    const index = this.containerQueue.indexOf(listener.container)
    const container = this.containerQueue[index]

    if (index !== -1) {
      container.listenerCount -= 1

      if (container.listenerCount === 0) {
        this.removeListenerHandle(container.$el)
        this.containerQueue.splice(index, 1)
      }
    }
  }

  bindListenerHandle (node: HTMLElement | Window) {
    this.eventList.forEach(event =>
      on(node, event, this.lazyLoadHandler.bind(this))
    )
  }
  removeListenerHandle (node: HTMLElement | Window) {
    this.eventList.forEach(event =>
      off(node, event, this.lazyLoadHandler.bind(this))
    )
  }
  lazyLoadHandler () {
    this.listenerQueue.forEach(listener => {
      if (checkVisible(listener)) listener.load()
    })
  }
}
