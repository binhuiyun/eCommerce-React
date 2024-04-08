import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userSlice";
import productReducer from "../redux/productSlice";
import cartReducer from "./cartSlice";
import editReducer from "../redux/editSlice";
import errorReducer from "../redux/errorSlice";


const reducer = {
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  edit: editReducer,
  error: errorReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
});


export default store;
