import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  price: 0,
  stockQuantity: 0,
  image: "",
  category: "Choose...",
};

const productItemSlice = createSlice({
  name: "productItem",
  initialState,
  reducers: {
    getProductItem: (state, action) => {
      return action.payload;
    },
    updateProductItem: (state, action) => {
      return action.payload;
    },
  },
});

export const { getProductItem, updateProductItem } = productItemSlice.actions;
export default productItemSlice.reducer;
