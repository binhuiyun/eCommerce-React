import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth.slice'

const reducer = {
  auth: authReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;