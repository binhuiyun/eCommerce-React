import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth.slice'
import productReducer from '../../reducers/product'
import editReducer from '../../reducers/edit'
import cartReducer from './cart.slice'

const reducer = {
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  edit: editReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;