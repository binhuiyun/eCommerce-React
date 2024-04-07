import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCartThunk,
  addToCartThunk,
  decreaseOneThunk,
} from "../thunks/cart-thunk";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    items: [],
  },
  reducers: {
    increaseQuantity(state, action) {
      console.log("slice add ", action.payload);
      const newProduct = action.payload;
      const selectedItem = state.items.find(
        (item) => item.product._id == newProduct._id
      );

      if (selectedItem) {
        selectedItem.quantity += 1; 
      } else {
        state.items.push({ product: newProduct, quantity: 1 });
      }
    },

    decreaseQuantity(state, action) {
      console.log("slice decrease ", action.payload);
      const newProduct = action.payload;
      const selectedItem = state.items.find(
        (item) => item.product._id == newProduct._id
      );
      if (selectedItem) {
        console.log("selectedItem type", selectedItem);
        if (selectedItem.quantity === 1) {
          state.items = state.items.filter((item) => item.product._id != newProduct._id);
        } else {
          console.log("decrease selected", selectedItem);
          selectedItem.quantity -= 1;
      }
    }
  },
    removeFromCart(state, action) {
      const newProduct = action.payload;
      state.items = state.items.filter((item) => item.product._id != newProduct._id);
    },

    toggleIsOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartThunk.fulfilled, (state, action) => {
      state.items = action.payload.items;
    });
    builder.addCase(addToCartThunk.fulfilled, (state, action) => {
      state.items = action.payload.items;
    });
    builder.addCase(decreaseOneThunk.fulfilled, (state, action) => {
      state.items = action.payload.items;
    });
  },
});

export const {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleIsOpen,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
