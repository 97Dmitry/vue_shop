<template>
  <div
    class="loading"
    style="text-align: center; margin-top: 150px"
    v-if="loading"
  >
    <h1>Загрузка...</h1>
  </div>
  <div class="catalog" v-else>
    <h1>Catalog</h1>
    <div class="catalog-content">
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
import CatalogItem from "./CatalogItem";
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
    addToCard(data) {
      this.ADD_TO_CART(data);
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
  },
};
</script>

<style lang="scss">
.catalog {
  .catalog-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
