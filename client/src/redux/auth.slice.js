import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loggedIn: false,
  },
  reducers: {
    login_: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
    logout_: (state) => {
      state.user = null;
      state.loggedIn = false;
    },
  },
});

const { reducer, actions } = authSlice;
export const { login_, logout_ } = actions;
export const selectUser = (state) => state.auth.user;
export default reducer;
