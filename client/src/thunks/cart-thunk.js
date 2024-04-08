import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCart, addToCart, decreaseOne, removeItem} from "../services/cart";

export const fetchCartThunk = createAsyncThunk(
    "fetchCart",
    (userId) => fetchCart(userId)
    );  

export const addToCartThunk = createAsyncThunk(
    "addToCart",
    (data) => addToCart(data)
    );

export const decreaseOneThunk = createAsyncThunk(
    "decreaseOne",
    (data) => {
        decreaseOne(data)
        console.log("decreaseOneThunk", data)
    }

    );

export const removeItemThunk = createAsyncThunk(
    "removeItem",
    (data) => removeItem(data)
    );