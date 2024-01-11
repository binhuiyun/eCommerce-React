import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProductsThunk, createProductThunk } from "../thunks/products-thunk";
const initialState = {
  products: [],
  loading: true,
};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  extraReducers: builder => {
         builder.addCase(fetchAllProductsThunk.fulfilled,(state, action) => {
          state.products = action.payload;
          state.loading = false;
        }),
        builder.addCase(createProductThunk.fulfilled, (state, action) => {
          state.products.push(action.payload);  
        });
      
    }
    });

export default productListSlice.reducer;
