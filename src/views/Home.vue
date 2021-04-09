<template>
  <div class="home">
    <Catalog />
    <Card v-if="CART.length" v-bind:cart_data="CART" />
  </div>
</template>

<script>
import Catalog from "../components/Catalog";
import Card from "../components/Cart";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Card,
    Catalog,
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style>
.home {
  max-width: 900px;
  margin: 0 auto;
}
</style>
