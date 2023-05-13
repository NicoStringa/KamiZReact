import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemCart, resetShipping } from "./cartUtils";
import { SHIPPING_COST } from "../../utils/constants";

const INITIAL_STATE = {
  cartItems: [],
  shippingCost: 0,
  hidden: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        shippingCost: SHIPPING_COST,
      };
    },
    toggleCartHidden: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
        shippingCost: 0,
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemCart(state.cartItems, action.payload),
        shippingCost: resetShipping(state.cartItems, SHIPPING_COST),
      };
    },
  },
});

export const { addToCart, toggleCartHidden, clearCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
