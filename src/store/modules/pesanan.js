import api from "../../service/api.service";

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
  // all keranjangs
  async fetchKeranjangs({ commit }) {
    api.getData("keranjangs", (response) => {
      if (response.status === 200) {
        commit("setKeranjangs", response.data);
      } else {
        console.log(response);
      }
    });
  },
  // delete keranjang
  async deleteKeranjang({ commit }, { vm, id }) {
    api.deleteData("keranjangs/" + id, (response) => {
      if (response.status === 200) {
        commit("deleteKeranjang", id);
        vm.error("Keranjang dihapus", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      } else {
        console.log(response);
      }
    });
  },
  // pemesanan
  async addPemesanan({ commit }, { vm, pesan }) {
    api.postData("keranjangs", pesan, (response) => {
      if (response.status === 201) {
        commit("addKeranjangs", response.data);
        vm.$toast.success("Berhasil di Pesan", {
          type: "success",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      } else {
        console.log(response);
      }
    });
  },
  // edit jumlah pesanan
  async updateJumlah({ commit }, { keranjang, type }) {
    if (type === 1) {
      keranjang.jumlah_pemesanan = parseInt(keranjang.jumlah_pemesanan) + 1;
    } else {
      keranjang.jumlah_pemesanan = parseInt(keranjang.jumlah_pemesanan) - 1;
    }
    api.putData("keranjangs/" + keranjang.id, keranjang, (response) => {
      if (response.status === 200) {
        commit("updateKeranjang", response.data);
      } else {
        console.log(response);
      }
    });
  },
  // checkout
  async checkoutAll({ commit }, { vm, pesan }) {
    pesan.keranjangs = state.keranjangs;
    api.postData("pesanans", pesan, () => {
      //hapus semua keranjangs
      state.keranjangs.map((item) => {
        return api.deleteData("keranjangs/" + item.id);
      });
      commit("setKeranjangs", []);
      vm.$router.push({ path: "pesanan-sukses" });
      vm.$toast.success("Berhasil Di Pesan.", {
        type: "success",
        position: "top-right",
        duration: 3000,
        dismissible: true,
      });
    });
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
