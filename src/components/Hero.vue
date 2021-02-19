<template>
  <div>
    <!-- desktop -->
    <div class="d-md-block d-none">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><Strong>Deliciouse Foods</Strong>, <br />in your gadget</h2>
              <p>Ayo segara pilih dan pesan makanan favorit Anda.</p>
              <router-link to="/foods" class="btn btn-success"
                >Pesan <b-icon-arrow-right></b-icon-arrow-right
              ></router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-4">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><Strong>Deliciouse Foods</Strong>, <br />in your gadget</h2>
              <p>Ayo segara pilih dan pesan makanan favorit Anda.</p>
              <router-link to="/foods" class="btn btn-success"
                >Pesan <b-icon-arrow-right></b-icon-arrow-right
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
