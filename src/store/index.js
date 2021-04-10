import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    cart: [],
    cartValue: 0,
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_PRODUCT_TO_STATE: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
          state.cart.push({ ...product, quantity: 1 });
        }
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    CART_VALUE_CALC: (state) => {
      state.cartValue = 0;
      state.cart.map((item) => {
        state.cartValue += item.quantity;
      });
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios(`http://localhost:3000/products`, {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((e) => {
          console.log(e);
          return e;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_PRODUCT_TO_STATE", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    CALC_CART_VALUE({ commit }) {
      commit("CART_VALUE_CALC");
    },
  },
  modules: {},
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    CART_VALUE(state) {
      return state.cartValue;
    },
  },
});
