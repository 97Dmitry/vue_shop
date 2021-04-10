<template>
  <div class="cart_item">
    <img
      class="cart_item__image"
      :src="require('../assets/images/' + cart_item_data.image)"
      alt=""
    />
    <div class="cart_item__info">
      <p>Name: {{ cart_item_data.name }}</p>
      <p>Price: {{ cart_item_data.price }}</p>
    </div>
    <div class="cart_item__quantity">
      Quantity:{{ cart_item_data.quantity }}
    </div>
    <button v-on:click="deleteCartItem">Delete</button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteCartItem() {
      this.$emit("deleteCartItem");
    },
  },
};
</script>

<style lang="scss"></style>
