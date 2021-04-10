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
      <p>Quantity:</p>
      <button
        class="btn"
        v-on:click.prevent="decrementItem(cart_item_data.article)"
      >
        -
      </button>
      <span style="margin: 0 10px 0 10px">{{ cart_item_data.quantity }}</span>
      <button
        class="btn"
        v-on:click.prevent="incrementItem(cart_item_data.article)"
      >
        +
      </button>
    </div>
    <button class="btn delete" v-on:click="deleteCartItem">Delete</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
    ...mapActions(["DECREMENT_CART_ITEM", "INCREMENT_CART_ITEM"]),
    incrementItem(article) {
      this.INCREMENT_CART_ITEM(article);
    },
    decrementItem(article) {
      this.DECREMENT_CART_ITEM(article);
    },

    deleteCartItem() {
      this.$emit("deleteCartItem");
    },
  },
};
</script>

<style lang="scss"></style>
