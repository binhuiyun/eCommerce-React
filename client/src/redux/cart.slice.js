import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import axios from "axios";

const fetchCart = createAsyncThunk("cart/fetchCart", async (userID) => {
  const response = await axios.get(`/api/cart?userID=${userID}`);
  console.log(response.data.items);
  return response.data.items;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    // total: 0*,
  },
  reducers: {
    addToCart_: (state, action) => {
      const found = state.cart.find((item) => {
        //console.log(item);
        return item.product._id == action.payload.productID;
      });
      if (found) {
        console.log("found");
        const temp = state.cart.map((item) =>
          item.product._id == action.payload.productID
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
        state.cart = temp;
      } else {
        state.cart.push({
          product: {
            Date: action.payload.productDate,
            category: action.payload.productCategory,
            description: action.payload.productDescription,
            image: action.payload.productImage,
            name: action.payload.productTitle,
            price: action.payload.productPrice,
            stockQuantity: action.payload.productQuantity,
            _id: action.payload.productID,
          },
          quantity: 1,
        });
      }
    },
    removeFromCart_: (state, action) => {
      const found = state.cart.find((item) => {
        return item.product._id == action.payload.productID;
      });
      if (found) {
        const temp = state.cart.map((item) =>
          item.product._id != action.payload.productID
            ? item
            : item.quantity > 1 && {
                ...item,
                quantity: item.quantity - 1,
              }
        );
        state.cart = temp;
      } else {
        state.cart = state.cart.filter(
          (item) => item.product._id != action.payload.productID
        );
      }
    },
    removeOneProductFromCart_: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.product._id != action.payload.productID
      );
    },
    clearCart_: (state) => {
      state.cart = [];
    },
    updateTotal_: (state, action) => {
      state.total += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, { payload }) => {
      state.cart = payload;
    });
  },
});

const { reducer, actions } = cartSlice;
export { fetchCart };
export const {
  addToCart_,
  removeFromCart_,
  clearCart_,
  updateTotal_,
  removeOneProductFromCart_,
} = actions;
export const selectCart = (state) => state.cart.cart;
export const selectTotal = (state) => state.cart.total;
export default reducer;
