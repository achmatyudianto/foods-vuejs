import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

const store = new Vuex.Store({
  state: {
    url: "http://localhost:3000/",
    products: [],
    product: {},
    errorProduct: false,
  },
  actions: {
    // load best product
    loadBestProducts({ commit }) {
      axios
        .get(this.state.url + "best-products")
        .then((response) => {
          commit("SET_PRODUCTS", response.data);
        })
        .catch((error) => console.log(error));
    },

    // load semua product + search
    loadProducts({ commit }, data) {
      axios
        .get(this.state.url + "products?q=" + data.search)
        .then((response) => {
          commit("SET_PRODUCTS", response.data);
        })
        .catch((error) => console.log(error));
    },

    // load detail product
    loadProduct({ commit }, data) {
      axios
        .get(this.state.url + "products/" + data.id)
        .then((response) => {
          commit("SET_PRODUCT", response.data);
          commit("SET_ERROR", false);
        })
        .catch((error) => {
          console.log(error);
          commit("SET_ERROR", true);
        });
    },

    pemesanan(data) {
      console.log(data.data);
      //   axios
      //     .post("http://localhost:3000/keranjangs", this.pesan)
      //     .then(() => {

      //     })
      //     .catch((error) => console.log(error));
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },

    SET_PRODUCT(state, product) {
      state.product = product;
    },

    // SET ERROR
    SET_ERROR(state, data) {
      state.errorProduct = data;
    },
  },
});

export default store;
