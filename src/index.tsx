import LazyComponent from './lazyload-component'
import Vue,{ VueConstructor } from 'vue'

// export interface VueConstructor {
//   component: (name: string,component: object) => void,
// }

const lazyloadPlugin = {
  /**
   * install function
   * @param  {VueConstructor} Vue
   * @param  {object} options  lazyload options
   */
  install (Vue: VueConstructor, options = {}) {
    Vue.component('VLazyload', LazyComponent)
  }
}
export default lazyloadPlugin
