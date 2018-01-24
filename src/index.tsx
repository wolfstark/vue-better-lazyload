import Vue, { VueConstructor, Component, ComponentOptions } from 'vue'

import Core from './core'
import LazyComponent from './lazyload-component'
import DefaultComponent from './default-component'
import { stateEnum } from './constant'

export interface Options {
  retry?: number
  wait?: number
  error?: VueConstructor
  loading?: VueConstructor
  [state: number]: VueConstructor
}

const lazyloadPlugin = {
  /**
   *
   *
   * @param {VueConstructor} Vue
   * @param {Options} { retry, wait }
   */
  install (Vue: VueConstructor, { retry, wait, error, loading }: Options = {}) {
    const options = {
      retry: retry || 3,
      wait: wait || 200,
      [stateEnum.error]: error || DefaultComponent,
      [stateEnum.loading]: loading || DefaultComponent
    }
    // tslint:disable-next-line:no-unused-expression
    new Core(options)
    Vue.component('VLazyload', LazyComponent)
  }
}
export default lazyloadPlugin
