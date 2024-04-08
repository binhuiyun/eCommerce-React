import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchCartThunk } from "../../thunks/cart-thunk";


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
      <ProductCard />
  )
};

export default Home;
