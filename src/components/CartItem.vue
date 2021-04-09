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
  mounted() {
    // eslint-disable-next-line vue/no-mutating-props
    this.cart_item_data.quantity = 1;
  },
};
</script>

<style lang="scss">
.cart_item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    width: 100px;
  }
}
</style>
