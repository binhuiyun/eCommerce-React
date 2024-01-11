import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentProduct, updateCurrentProduct } from "../services/productService";

export const getCurrentProductThunk = createAsyncThunk(
    "getCurrentProduct",
    (id) => getCurrentProduct(id)
    );

export const updateCurrentProductThunk = createAsyncThunk(
    "updateCurrentProduct",
    (product) => updateCurrentProduct(product)
    );
    