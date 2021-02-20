<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />

      <div class="row mt-5">
        <div class="col">
          <h4>Best <strong>Food</strong></h4>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right"
            >Lihat Semua</router-link
          >
        </div>
      </div>

      <div class="row mb-3">
        <div
          class="col-md-3 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";

import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  mounted() {
    this.$store.dispatch('loadBestProducts');
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>
