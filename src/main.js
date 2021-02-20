import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueToast from "vue-toast-notification";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/main.css";

import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueToast);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
