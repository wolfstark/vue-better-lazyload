export default class Container {
  $el: HTMLElement | Window
  listenerCount: number = 1
  constructor (node: HTMLElement | Window) {
    this.$el = node
  }
}
