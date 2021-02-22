// Entrypoint for vuex

import Vuex from "vuex";
import Vue from "vue";
import product from "./modules/product";
import pesanan from "./modules/pesanan";

// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    product,
    pesanan,
  },
});
