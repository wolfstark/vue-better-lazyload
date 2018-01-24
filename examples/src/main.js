import Vue from "vue";
import App from "./App.vue";
import Lazyload from "vue-better-lazyload";
import Loading from "./components/loading.vue";
import Error from "./components/error.vue";

Vue.use(Lazyload, { loading: Loading, error: Error });

new Vue({
  el: "#app",
  render: h => h(App)
});
