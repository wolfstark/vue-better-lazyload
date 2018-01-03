import './style.less'

import Vue, { VueConstructor } from 'vue'

import { stateEnum } from './constant'

export default Vue.extend({
  data () {
    return {
      state: stateEnum.loading // loading,success,error
    }
  },
  props: {
    height: String
  },
  mounted () {
    console.log(3)
  },
  render () {
    switch (this.$data.state) {
      case stateEnum.loading:
        return this.$slots.loading ? (
          this.$slots.loading[0]
        ) : (
          <div style={{ height: this.height }} class='lazyload-mask'>
            <div class='lazyload-spinner'>
              <svg viewBox='25 25 50 50' class='circular'>
                <circle cx='50' cy='50' r='20' fill='none' class='path' />
              </svg>
            </div>
          </div>
        )
      case stateEnum.error:
        return this.$slots.error ? this.$slots.error[0] : <div>加载失败</div>
      default:
        return this.$slots.default[0]
    }
  }
})
