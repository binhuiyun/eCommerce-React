import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createProduct,
  fetchAllProducts,

} from "../services/productService";

export const createProductThunk = createAsyncThunk("createProduct", (newProduct) =>
  createProduct(newProduct)
);



export const fetchAllProductsThunk = createAsyncThunk("fetchAllProducts", () =>
  fetchAllProducts()
);

