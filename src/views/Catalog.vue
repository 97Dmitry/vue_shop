<template>
  <div
    class="loading"
    style="text-align: center; margin-top: 150px"
    v-if="loading"
  >
    <h1>Загрузка...</h1>
  </div>
  <div class="catalog" v-else>
    <router-link :to="{ name: 'Cart' }">
      <div class="navigate_link">Cart: {{ CART_VALUE }}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="catalog__content">
      <CatalogItem
        v-for="product in PRODUCTS"
        v-bind:product_data="product"
        :key="product.article"
        v-on:addToCard="addToCard"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from "../components/CatalogItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Catalog",
  data() {
    return {
      loading: true,
    };
  },
  components: {
    CatalogItem,
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    ...mapActions(["ADD_TO_CART"]),
    ...mapActions(["CALC_CART_VALUE"]),
    async addToCard(data) {
      await this.ADD_TO_CART(data);
      await this.CALC_CART_VALUE();
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        this.loading = false;
      }
    });
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
    ...mapGetters(["CART"]),
    ...mapGetters(["CART_VALUE"]),
  },
};
</script>

<style lang="scss"></style>
