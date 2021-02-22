import axios from "axios";
import api from "../../service/url.service.js";
const state = {
  keranjangs: [],
};

const getters = {
  allKeranjangs: (state) => {
    return state.keranjangs;
  },
  totalHarga: () => {
    return state.keranjangs.reduce(function(items, data) {
      return items + data.product.harga * data.jumlah_pemesanan;
    }, 0);
  },
  bag: (state) => {
    return state.keranjangs.length;
  },
};

const actions = {
  //all keranjangs
  async fetchKeranjangs({ commit }) {
    axios
      .get(api.url() + "keranjangs")
      .then((response) => {
        commit("setKeranjangs", response.data);
      })
      .catch((error) => console.log(error));
  },
  // delete keranjangs
  async deleteKeranjang({ commit }, { vm, id }) {
    axios
      .delete(api.url() + "keranjangs/" + id)
      .then(() => {
        commit("deleteKeranjang", id);
        vm.error("Keranjang dihapus", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      })
      .catch((error) => console.log(error));
  },
  //pemesanan
  async addPemesanan({ commit }, { vm, pesan }) {
    axios
      .post(api.url() + "keranjangs", pesan)
      .then((response) => {
        commit("addKeranjangs", response.data);
        vm.$toast.success("Berhasil di Pesan", {
          type: "success",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      })
      .catch((error) => console.log(error));
  },
  //edit jumlah pesanan
  async updateJumlah({ commit }, { keranjang, type }) {
    if (type === 1) {
      keranjang.jumlah_pemesanan = parseInt(keranjang.jumlah_pemesanan) + 1;
    } else {
      keranjang.jumlah_pemesanan = parseInt(keranjang.jumlah_pemesanan) - 1;
    }
    axios
      .put(api.url() + "keranjangs/" + keranjang.id, keranjang)
      .then((response) => {
        commit("updateKeranjang", response.data);
      })
      .catch((error) => console.log(error));
  },
  // checkout
  async checkoutAll({ commit }, { vm, pesan }) {
    pesan.keranjangs = state.keranjangs;
    axios
      .post(api.url() + "pesanans", pesan)
      .then(() => {
        // hapus Seemua Keranjang
        state.keranjangs.map(function(item) {
          return axios
            .delete(api.url() + "keranjangs/" + item.id)
            .catch((error) => console.log(error));
        });
        commit("setKeranjangs", []);
        vm.$router.push({ path: "pesanan-sukses" });
        vm.$toast.success("Berhasil Di Pesan.", {
          type: "success",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      })
      .catch((error) => console.log(error));
  },
};

const mutations = {
  setKeranjangs: (state, keranjangs) => {
    state.keranjangs = keranjangs;
  },
  addKeranjangs: (state, keranjang) => {
    state.keranjangs.push(keranjang);
  },
  deleteKeranjang: (state, id) => {
    state.keranjangs = state.keranjangs.filter(
      (keranjang) => keranjang.id !== id
    );
  },
  updateKeranjang: (state, updatekeranjang) => {
    // Find index
    const index = state.keranjangs.findIndex(
      (keranjang) => keranjang.id === updatekeranjang.id
    );

    if (index !== -1) {
      state.keranjangs.splice(index, 1, updatekeranjang);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
