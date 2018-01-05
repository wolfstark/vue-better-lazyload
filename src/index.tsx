import Vue, { VueConstructor } from 'vue'

import Core from './core'
import LazyComponent from './lazyload-component'

const lazyloadPlugin = {
  /**
   *
   * @param {VueConstructor} Vue
   * @param {any} [options={}]
   */
  install (Vue: VueConstructor, options = { retry: 3 ,wait: 200 }) {
    // tslint:disable-next-line:no-unused-expression
    new Core(options)
    Vue.component('VLazyload', LazyComponent)
  }
}
export default lazyloadPlugin
