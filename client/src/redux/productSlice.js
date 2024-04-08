import {createSlice} from "@reduxjs/toolkit";
import {fetchAllProductsThunk, createProductThunk,
    getCurrentProductThunk, updateCurrentProductThunk} from "../thunks/product-thunk";

const initialState = {
    products: [],
    product: {
        name: "",
        description: "",
        price: 0,
        stockQuantity: 0,
        image: "",
        category: "Choose...",
    },
};

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllProductsThunk.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(createProductThunk.fulfilled, (state, action) => {
            state.products.push(action.payload);
        });
        builder.addCase(getCurrentProductThunk.fulfilled, (state, action) => {
            state.product = action.payload;
        });
        builder.addCase(updateCurrentProductThunk.pending, (state, action) => {
            state.product = action.payload;
        });
    }
});

export default productSlice.reducer;