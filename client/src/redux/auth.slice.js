import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.post("/api/auth/login", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("loginToken", response.loginToken);
      localStorage.setItem("user", JSON.stringify(response));
      console.log("response", response);
      return response;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (user, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.post("/api/auth/signup", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("loginToken", response.loginToken);
      localStorage.setItem("user", JSON.stringify(response));
      console.log("response", response);
      return response;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

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
      state.status = "idle";
    },
    logout_: (state) => {
      state.user = null;
      state.loggedIn = false;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      state.status = "succeeded";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.user = null;
      state.loggedIn = false;
      state.status = "failed";
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      state.status = "succeeded";
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.user = null;
      state.loggedIn = false;
      state.status = "failed";
    });
    builder.addCase(signUpUser.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

const { reducer, actions } = authSlice;
export const { login_, logout_ } = actions;
export const selectUser = (state) => state.auth.user;
export default reducer;
