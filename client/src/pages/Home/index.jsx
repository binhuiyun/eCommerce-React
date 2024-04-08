import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { Layout } from "antd";
import { fetchCartThunk } from "../../thunks/cart-thunk";
// import Header from "../layout/Header";
// import Footer from "../layout/Footer";

const Home = () => {
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log("home", user.id);
  useEffect(() => {
    if(user.id)
    dispatch(fetchCartThunk(user.id));
  }
  , [user.id]);

  return (
    <Layout className="min-h-screen justify-between">
      <ProductCard />
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
