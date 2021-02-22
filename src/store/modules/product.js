import axios from "axios";
import api from "../../service/url.service.js";

const state = {
  products: [],
  product: {},
};

const getters = {
  allProducts: (state) => {
    return state.products;
  },
  product: (state) => {
    return state.product;
  },
};

const actions = {
  //best product
  async fetchBestProducts({ commit }) {
    axios
      .get(api.url() + "best-products")
      .then((response) => {
        commit("setProducts", response.data);
      })
      .catch((error) => console.log(error));
  },
  // all product
  async fetchProducts({ commit }) {
    axios
      .get(api.url() + "products")
      .then((response) => {
        commit("setProducts", response.data);
      })
      .catch((error) => console.log(error));
  },
  // detail Product
  async detailProduct({ commit }, id) {
    axios
      .get(api.url() + "products/" + id)
      .then((response) => {
        commit("setProduct", response.data);
      })
      .catch((error) => console.log(error));
  },
  // search product
  async searchProduct({ commit }, event) {
    axios
      .get(api.url() + "products?q=" + event.target.value)
      .then((response) => {
        commit("setProducts", response.data);
      })
      .catch((error) => console.log(error));
  },
};

const mutations = {
  setProducts: (state, products) => {
    state.products = products;
  },
  setProduct: (state, product) => {
    state.product = product;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
