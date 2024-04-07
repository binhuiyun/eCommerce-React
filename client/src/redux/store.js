import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userSlice";
import productListReducer from "../redux/productListSlice";
import cartReducer from "./cartSlice";
import editReducer from "../redux/editSlice";
import productItemReducer from "../redux/productItemSlice";
import errorReducer from "../redux/errorSlice";


const reducer = {
  auth: authReducer,
  productList: productListReducer,
  productItem: productItemReducer,
  cart: cartReducer,
  edit: editReducer,
  error: errorReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
});


export default store;
