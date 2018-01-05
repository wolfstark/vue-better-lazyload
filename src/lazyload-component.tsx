import './style.less'

import Vue,{ VNode } from 'vue'
import Component from 'vue-class-component'

import checkVisible from './check-visible'
import { stateEnum } from './constant'
import Container from './container'
import Core from './core'
import scrollParent from './scroll-parent'

@Component({
  props: {
    height: String
  }
})
export default class VLazyLoad extends Vue {
  // @Prop(String) height:string;

  state = stateEnum.loading // loading,success,error
  container: Container
  core: Core
  lock: boolean

  render () {
    switch (this.state) {
      case stateEnum.loading:
        return this.$slots.loading ? (
          this.$slots.loading[0]
        ) : (
          <div style={{ height: this.$props.height }} class='lazyload-mask'>
            <div class='lazyload-spinner'>
              <svg viewBox='25 25 50 50' class='circular'>
                <circle cx='50' cy='50' r='20' fill='none' class='path' />
              </svg>
            </div>
          </div>
        )
      case stateEnum.error:
        return this.$slots.error ? this.$slots.error[0] : <div style={{ height: this.$props.height }}>加载失败</div>
      default:
        return this.$slots.default[0]
    }
  }
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
