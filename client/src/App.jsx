import "./App.css";
import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import ErrorPage from "./pages/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrivateRoute } from "./PrivateRoute";
//import { ProtectedRoute } from "./ProtectedRoute";
import ProductDetail from "./pages/ProductDetail";
import ProductCreate from "./pages/ProductCreate";
import Home from "./pages/Home";
import SearchResultPage from "./pages/SearchResultPage";
import { Header } from "./components/Header";
import ShoppingCart from "./pages/ShoppingCart";


function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
    <Header toggleShow={()=>setShowCart(!showCart)}/>
    <ShoppingCart show={showCart} onHide={()=> setShowCart(false)}/>

      <Routes>  
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/create-product"
         element={
         <ProductCreate/>
        } />
        <Route path="/edit-product/:id" element={<ProductCreate />} />
       
        <Route
          path="/display-product"
          element={
            <Home />
          }
        />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
 
      </>
  );
}

export default App;
