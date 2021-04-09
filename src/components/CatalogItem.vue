<template>
  <div class="catalog-item">
    <img
      class="catalog-item__image"
      :src="require('../assets/images/' + product_data.image)"
      alt=""
    />
    <p class="catalog-item__name">Name: {{ product_data.name }}</p>
    <p class="catalog-item__price">Price: {{ product_data.price }}</p>
    <button class="catalog-item__add_to_card btn" v-on:click="addToCard">
      Add to card
    </button>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    addToCard() {
      this.$emit("addToCard", this.product_data);
    },
  },
};
</script>

<style lang="scss">
.catalog-item {
  height: 250px;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    width: 100px;
  }
}
</style>
