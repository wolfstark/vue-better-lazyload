import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
