import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTotal = createAsyncThunk("products/fetchTotal", async (thunkAPI) => {
  const response = axios.get("/api/product/products");
  //   console.log(response);
  return response;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    loading: false,
  },
  reducers: {
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTotal.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTotal.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload.data;
      })
      .addCase(fetchTotal.rejected, (state) => {
        state.loading = false;
      });
  },
});

export { fetchTotal };
//export const selectProduct = (state) => state.products.product;
export const { reducer, actions } = productSlice;
export default reducer;
