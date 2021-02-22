<template>
  <div class="food-detail">
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
                Food Detail
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- product detail -->
      <div class="row mt-2">
        <div class="col-md-6">
          <img
            :src="'../assets/images/' + product.gambar"
            alt=""
            class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h4>
            <strong>{{ product.nama }} </strong>
          </h4>
          <hr />
          <h5>
            Harga : <strong>Rp. {{ product.harga }} </strong>
          </h5>
          <form class="mt-4" v-on:submit.prevent @submit="pemesanan">
            <div class="form-group">
              <label for="jumlah-pesanan">Jumlah Pesanan</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_pemesanan"
              />
            </div>
            <div class="form-group">
              <label for="keteranan">Keteranagan</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Keterangan spr : Pedas, Tikak Pedas, Nasi Setengah ..."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success">
              <b-icon-cart></b-icon-cart> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "FoodDetail",
  components: { Navbar },
  data() {
    return { pesan: {} };
  },
  methods: {
    ...mapActions(["detailProduct", "addPemesanan"]),
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.product = this.product;
        this.addPemesanan({ vm: this, pesan: this.pesan });
      } else {
        this.$toast.error("Jumlah pesanan harus diisi.", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  computed: mapGetters(["product"]),
  created() {
    this.detailProduct(this.$route.params.id);
  },
};
</script>

<style></style>
