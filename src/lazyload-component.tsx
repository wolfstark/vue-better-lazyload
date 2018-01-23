import Vue, { VNode } from 'vue'
import Component from 'vue-class-component'

import checkVisible from './check-visible'
import { stateEnum } from './constant'
import Container from './container'
import Core from './core'
import scrollParent from './scroll-parent'

@Component({
  props: {
    height: String,
    [stateEnum.loaded]: Object,
    [stateEnum.error]: Object
  }
})
export default class VLazyLoad extends Vue {
  state = stateEnum.loading // loading,loaded,error
  container: Container
  core: Core
  lock: boolean

  created () {
    this.core = new Core()
  }
  mounted () {
    this.container = new Container(scrollParent(this.$el))
    this.core.addListener(this)
    this.core.addContainer(this.container)
    this.$nextTick(() => {
      if (checkVisible(this)) this.load()
    })
  }
  render () {
    switch (this.state) {
      case stateEnum.loading:
        return this.getStateComponent(stateEnum.loading)
      case stateEnum.error:
        return this.getStateComponent(stateEnum.error)
      default:
        return this.$slots.default[0]
    }
  }
  getStateComponent (state: stateEnum) {
    const Component = this.core.options[state]
    return this.$slots[stateEnum[state]] ? this.$slots[stateEnum[state]][0] : <Component />
  }
  load () {
    if (this.isImage()) {
      const src = this.$slots.default[0].data.attrs.src
      // 加载图片是异步处理，需要上锁避免重复触发 load 函数
      this.lock = true
      this.core.imageLoader
        .load(src)
        .then(() => {
          this.state = stateEnum.loaded
          this.core.removeListener(this)
        })
        .catch(() => {
          this.state = stateEnum.error
          this.core.removeListener(this)
        })
    } else {
      this.state = stateEnum.loaded
    }
  }
  isImage () {
    return this.$slots.default[0].tag === 'img'
  }
  beforeDestroy () {
    this.core.removeListener(this)
  }
}
