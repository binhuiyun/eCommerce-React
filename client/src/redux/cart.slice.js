import { createSlice,current  } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0,
    },
    reducers: {
        addToCart_: (state, action) => {

            console.log(current(state));
            state.cart.push({
                ...action.payload,
                quantity: 1
              });
        // const find = state.product;
        //     console.log(find);
        // console.log(find);
        // state.cart.push({
        //     ...action.payload,
        //     quantity: 1
        //   });
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
export const { addToCart_, removeFromCart_, clearCart_, updateTotal_ } = actions;
export const selectCart = (state) => state.cart.cart;
export const selectTotal = (state) => state.cart.total;
export default reducer;