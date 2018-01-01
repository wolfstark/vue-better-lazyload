import LazyComponent from './lazyload-component'

export interface Vue {
  component: (name: string,component: object) => void,
}

const lazyloadPlugin = {
  /**
   * install function
   * @param  {Vue} Vue
   * @param  {object} options  lazyload options
   */
  install (Vue: Vue, options = {}) {
    Vue.component('VLazyload', LazyComponent)
  }
}
export default lazyloadPlugin
