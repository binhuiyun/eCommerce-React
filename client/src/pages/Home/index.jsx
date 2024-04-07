import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { Layout } from "antd";
import { fetchCartThunk } from "../../thunks/cart-thunk";
import { fetchCart } from "../../services/cart";
import Header from "../../components/Header";
import ShoppingCart from "../ShoppingCart";
// import Header from "../layout/Header";
// import Footer from "../layout/Footer";

const Home = () => {
  const {user} = useSelector((state) => state.auth);
  const [showCart, setShowCart] = useState(false);
  const handleToggleCart = () => {
    setShowCart(!showCart);
  //  dispatch(fetchCartThunk(user.id));
  }
  const dispatch = useDispatch();
  console.log("home", user.id);
  useEffect(() => {
    dispatch(fetchCartThunk(user.id));
  }
  , []);

  return (
    <Layout className="min-h-screen justify-between">
     {/* <Header userInfo={userInfo} /> */}
     <Header toggleShow={handleToggleCart}/>
    <ShoppingCart show={showCart} onHide={()=> setShowCart(false)}/>
      <ProductCard />
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
