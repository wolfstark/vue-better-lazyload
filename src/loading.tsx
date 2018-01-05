import { VNode } from 'vue/types/vnode'
import './style.less'

export default {
  render (): VNode {
    return (
      <div
        // key={this.state}
        // style={{ height: this.$props.height }}
        class='lazyload-mask'
      >
        <div class='lazyload-spinner'>
          <svg viewBox='25 25 50 50' class='circular'>
            <circle cx='50' cy='50' r='20' fill='none' class='path' />
          </svg>
        </div>
      </div>
    )
  }
}
