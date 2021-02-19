<template>
  <div class="pesanan-sukses">
    <Navbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/images/menunggu.png" alt="menunggu" width="250" class="img-fluid"/>
          <h2><strong>Success !!</strong></h2>
          <h5>
            Pesananan Anda Segera Diproses, <strong>Selamat Menunggu...</strong>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "PesananSukses",
  components: { Navbar },
};
</script>

<style></style>
