import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
  name: "productList",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    getAllProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { addProduct, getAllProducts } = productListSlice.actions;
export default productListSlice.reducer;
