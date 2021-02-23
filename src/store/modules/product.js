import api from "../../service/api.service";

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
  // best product
  async fetchBestProducts({ commit }) {
    api.getData("best-products", (response) => {
      if (response.status === 200) {
        commit("setProducts", response.data);
      } else {
        console.log(response);
      }
    });
  },
  // all product
  async fetchProducts({ commit }) {
    api.getData("products", (response) => {
      if (response.status === 200) {
        commit("setProducts", response.data);
      } else {
        console.log(response);
      }
    });
  },
  // search product
  async searchProduct({ commit }, event) {
    api.getData("products?q=" + event.target.value, (response) => {
      if (response.status === 200) {
        commit("setProducts", response.data);
      } else {
        console.log(response);
      }
    });
  },
  // detail Product
  async detailProduct({ commit }, id) {
    api.getData("products/" + id, (response) => {
      if (response.status === 200) {
        commit("setProduct", response.data);
      } else {
        console.log(response);
      }
    });
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
