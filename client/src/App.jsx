import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./components/Layout/ProtectedRoute";
import ProductDetail from "./pages/ProductDetail";
import ProductCreate from "./pages/ProductCreate";
import Home from "./pages/Home";
import SearchResultPage from "./pages/SearchResultPage";
import Header from "./components/Header";
import ShoppingCart from "./pages/ShoppingCart";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Header />
      <ShoppingCart />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/create-product" element={<ProductCreate />} />
          <Route path="/edit-product/:id" element={<ProductCreate />} />
        </Route>

        {/*         
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
