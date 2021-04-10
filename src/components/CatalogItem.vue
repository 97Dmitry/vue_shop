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
  mounted() {
    // eslint-disable-next-line vue/no-mutating-props
    // this.product_data.quantity = 1;
  },
  methods: {
    addToCard() {
      this.$emit("addToCard", this.product_data);
    },
  },
};
</script>

<style lang="scss"></style>
