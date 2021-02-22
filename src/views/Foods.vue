<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h5>Daftar <strong>makanan</strong></h5>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Cari makanan favorit anda ..."
              aria-label="cari"
              aria-describedby="basic-addon1"
              @keyup="searchProduct($event)"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                ><b-icon-search></b-icon-search
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div
          class="col-md-3 mt-4"
          v-for="product in allProducts"
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
import CardProduct from "@/components/CardProduct.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Foods",
  components: {
    Navbar,
    CardProduct,
  },
  methods: {
    ...mapActions(["fetchProducts", "searchProduct"]),
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.fetchProducts();
  },
};
</script>

<style></style>
