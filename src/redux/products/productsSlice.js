import { createSlice } from "@reduxjs/toolkit";
import { Products, TotalProducts } from "../../data";

const INITIAL_STATE = {
  products: Products,
  totalProducts: TotalProducts,
};

export const productSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state) => {
      return state;
    },
  },
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
