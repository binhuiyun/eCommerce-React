import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentProductThunk,
  updateCurrentProductThunk,
} from "../thunks/product-thunk";

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
  extraReducers: builder => {
        builder.addCase(getCurrentProductThunk.fulfilled, (state, action) => {
          return action.payload;
        });
        builder.addCase(updateCurrentProductThunk.pending, (state, action) => { 
          return action.payload;
        });
      }
      
    });


export default productItemSlice.reducer;
