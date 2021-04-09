<template>
  <div class="card">
    <h1>Cart</h1>
    <CartItem
      v-for="(cart_item, index) in cart_data"
      v-bind:cart_item_data="cart_item"
      :key="cart_item.arcticl"
      v-on:deleteCartItem="deleteCartItem(index)"
    />
  </div>
</template>

<script>
import CartItem from "./CartItem";
import { mapActions } from "vuex";

export default {
  name: "Card",
  dart() {
    return {};
  },
  components: {
    CartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteCartItem(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style scoped></style>
