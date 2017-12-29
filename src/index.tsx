import LazyComponent from './lazyload-component'
import { VueConstructor } from 'vue/types/vue';
// import { VueConstructor } from '@types/vue';
// import { Vue } from './index';
// declare Vue from 'vue/types/vue'

const lazyloadPlugin = {
  /**
   * install function
   * @param  {Vue} Vue
   * @param  {object} options  lazyload options
   */
  install (Vue:VueConstructor, options = {}) {
      Vue.component('VLazyload', LazyComponent)
  }
}
export default lazyloadPlugin
