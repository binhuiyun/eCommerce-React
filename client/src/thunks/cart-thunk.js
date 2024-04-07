import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCart, addToCart, decreaseOne} from "../services/cart";

export const fetchCartThunk = createAsyncThunk(
    "fetchCart",
    (userID) => fetchCart(userID)
    );  

export const addToCartThunk = createAsyncThunk(
    "addToCart",
    (data) => addToCart(data)
    );

export const decreaseOneThunk = createAsyncThunk(
    "decreaseOne",
    (data) => decreaseOne(data)
    );