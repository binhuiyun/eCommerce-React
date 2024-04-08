import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCartThunk,
  addToCartThunk,
  decreaseOneThunk,
  removeItemThunk,
} from "../thunks/cart-thunk";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    items: [],
    status: "idle",
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
        if (selectedItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.product._id != newProduct._id
          );
        } else {
          selectedItem.quantity -= 1;
        }
      }
    },
    removeFromCart(state, action) {
      const newProduct = action.payload;
      state.items = state.items.filter(
        (item) => item.product._id != newProduct._id
      );
    },
    clearCart(state) {
      state.items = [];
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
      state.status = "fulfilled";
    });
 
    builder.addCase(decreaseOneThunk.fulfilled, (state, action) => {
      state.items = action.payload.items;
    });
    builder.addCase(removeItemThunk.fulfilled, (state, action) => {
      state.items = action.payload.items;
    });
  },
});

export const {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleIsOpen,
  clearCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
