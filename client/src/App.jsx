import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/AuthenticationScreen/HomePage";
import LoginPage from "./pages/AuthenticationScreen/LoginPage";
import SignUpPage from "./pages/AuthenticationScreen/SignUpPage";
import ForgotPasswordPage from "./pages/AuthenticationScreen/ForgotPasswordPage";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContextProvider } from "./UserContext";
import { PrivateRoute } from "./PrivateRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductCreateScreen from "./pages/ProductCreateScreen";
import ProductDisplayScreen from "./pages/ProductDisplayScreen";
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  var isLoggedIn = localStorage.getItem("user");

  return (
    <Provider store={store}>
      <Routes>
        {/* <Route
          index
          element={isLoggedIn ? <ProductDisplayScreen /> : <HomePage />}
        /> */}
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/create-product" element={<ProductCreateScreen />} />
        <Route
          path="/display-product"
          element={
            //<PrivateRoute isAuth={isLoggedIn}>
              <ProductDisplayScreen />
            ///* </PrivateRoute> */
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
