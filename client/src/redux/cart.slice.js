import { createSlice, current } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

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
        return item.productID == action.payload.productID;
      });

      if (found) {
        console.log("found");
        const temp = state.cart.map((item) =>
          item.productID == action.payload.productID
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
        state.cart = temp;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart_: (state, action) => {
      state.cart = action.payload;
    },
    clearCart_: (state) => {
      state.cart = [];
    },
    updateTotal_: (state, action) => {
      state.total += action.payload;
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addToCart_, removeFromCart_, clearCart_, updateTotal_ } =
  actions;
export const selectCart = (state) => state.cart.cart;
export const selectTotal = (state) => state.cart.total;
export default reducer;
