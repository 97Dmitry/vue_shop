<template>
  <div class="card">
    <h1>Cart</h1>
    <router-link :to="{ name: 'Catalog' }">
      <div class="navigate_link">Go back to Catalog</div>
    </router-link>
    <div v-if="!CART.length">
      <h1>Your cart is empty</h1>
    </div>
    <div v-else :key="CART.length">
      <CartItem
        v-for="(item, index) in CART"
        v-bind:cart_item_data="item"
        :key="item.arcticl"
        v-on:deleteCartItem="deleteCartItem(index)"
      />
    </div>
  </div>
</template>

<script>
import CartItem from "../components/CartItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Card",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  components: {
    CartItem,
  },
  props: ["data"],
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteCartItem(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style scoped></style>
