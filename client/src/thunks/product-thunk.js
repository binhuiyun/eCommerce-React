import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrentProduct,
  updateCurrentProduct,
  createProduct,
   fetchAllProducts 
} from "../services/productService";

export const getCurrentProductThunk = createAsyncThunk(
  "getCurrentProduct",
  (id) => getCurrentProduct(id)
);

export const updateCurrentProductThunk = createAsyncThunk(
  "updateCurrentProduct",
  (product) => updateCurrentProduct(product)
);

export const createProductThunk = createAsyncThunk(
  "createProduct",
  (newProduct) => createProduct(newProduct)
);

export const fetchAllProductsThunk = createAsyncThunk("fetchAllProducts", () =>
  fetchAllProducts()
);
