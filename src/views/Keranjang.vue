<template>
  <div class="keranjang">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- table -->
      <div class="row">
        <div class="col">
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">keteranan</th>
                  <th scope="col" class="text-right">Harga</th>
                  <th scope="col" class="text-center">Jumlah</th>
                  <th scope="col" class="text-right">Total Harga</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(keranjang, index) in allKeranjangs"
                  :key="keranjang.id"
                >
                  <th scope="row">{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/images/' + keranjang.product.gambar"
                      alt=""
                      class="img-fluid shadow"
                      width="150"
                    />
                  </td>
                  <td>{{ keranjang.product.nama }}</td>
                  <td>
                    {{ keranjang.keterangan ? keranjang.keterangan : "-" }}
                  </td>
                  <td align="right">Rp. {{ keranjang.product.harga }}</td>
                  <td align="center" width="150">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          @click="
                            updateJumlah({ keranjang: keranjang, type: 0 })
                          "
                          >-</span
                        >
                      </div>
                      <input
                        type="text"
                        class="form-control text-center"
                        :value="keranjang.jumlah_pemesanan"
                        disabled
                      />
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          @click="
                            updateJumlah({ keranjang: keranjang, type: 1 })
                          "
                          >+</span
                        >
                      </div>
                    </div>
                  </td>
                  <td align="right">
                    <strong
                      >Rp.
                      {{
                        keranjang.jumlah_pemesanan * keranjang.product.harga
                      }}</strong
                    >
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon-trash
                      @click="deleteKeranjang({ vm: $toast, id: keranjang.id })"
                    ></b-icon-trash>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga :</strong>
                  </td>
                  <td align="right">
                    <strong>Rp. {{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Form Pesan -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Nama : </label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>
            <div class="form-group">
              <label for="noMeja">noMeja : </label>
              <input type="text" class="form-control" v-model="pesan.noMeja" />
            </div>
            <button
              type="submit"
              class="btn btn-success float-right"
              @click="checkout"
            >
              <b-icon-cart></b-icon-cart> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Keranjang",
  components: {
    Navbar,
  },
  data() {
    return { pesan: {} };
  },
  methods: {
    ...mapActions([
      "fetchKeranjangs",
      "deleteKeranjang",
      "checkoutAll",
      "updateJumlah",
    ]),
    checkout() {
      if (this.pesan.nama && this.pesan.noMeja) {
        this.checkoutAll({ vm: this, pesan: this.pesan });
      } else {
        this.$toast.error("Nama dan No Meja harus di isi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  computed: mapGetters(["allKeranjangs", "totalHarga"]),
  created() {
    this.fetchKeranjangs();
  },
};
</script>

<style></style>
