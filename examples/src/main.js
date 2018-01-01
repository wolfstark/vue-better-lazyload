import Vue from 'vue'
import App from './App.vue'
import Lazyload from './vue-better-lazyload'

Vue.use(Lazyload)
console.log(Lazyload,111)

new Vue({
  el: '#app',
  render: h => h(App)
})
