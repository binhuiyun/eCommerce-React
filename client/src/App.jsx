import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProductsPage from "./pages/ProductsPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import { PrivateRoute } from "./PrivateRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/products"
          element={<PrivateRoute children={<ProductsPage />} />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
