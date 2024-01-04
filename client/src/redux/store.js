import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth.slice'
import productReducer from './product.slice'
import cartReducer from './cart.slice'

const reducer = {
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;