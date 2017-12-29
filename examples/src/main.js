import Vue from 'vue'
import App from './App.vue'
import Lazyload from './vue-better-lazyload'

Vue.use(Lazyload)

new Vue({
  el: '#app',
  render: h => h(App)
})
