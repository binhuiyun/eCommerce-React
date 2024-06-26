import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../../redux/cartSlice";
import { addToCartThunk, decreaseOneThunk } from "../../../thunks/cart-thunk";
import { useNavigate } from "react-router-dom";

const GroupButton = ({ product }) => {
  const {user} = useSelector((state) => state.auth);
  const {isAuthenticated} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const getItemQuantity = (product) => {
    const selectedItem = cart.items.find((item) => item.product._id === product._id);
    return selectedItem ? selectedItem.quantity : 0;
  };

  const quantity = getItemQuantity(product);
  if (!isAuthenticated) {
    navigate("/login");
  }


  return (
    <div className="mt-auto">
      
      {quantity === 0 ? (
        <Button
          disabled={product.stockQuantity === 0}
          className="w-full border-none focus:outline-none focus:shadow-outline text-white text-base bg-chuwa-blue transition-colors duration-300 hover:bg-gray-300"
          onClick={ () => {

            dispatch(increaseQuantity(product));
            dispatch(addToCartThunk({userId:user.id, product}));
          }
          }
        >
          Add
        </Button>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center bg-chuwa-blue text-white rounded-3 "
          style={{ gap: ".5rem" }}
        >
          <Button
            className="border-none text-white text-base"
            onClick={() => {
           dispatch(decreaseQuantity(product));
           dispatch(decreaseOneThunk({userId:user.id, product}));
                  
          }}
          >
            -
          </Button>
          <span className="fs-5">{quantity}</span>
          <Button
            className=" border-none text-white text-base"
            onClick={() => {
              dispatch(increaseQuantity(product));
              dispatch(addToCartThunk({userId:user.id, product}));
            }
          }
          >
            +
          </Button>
        </div>
      )}
    </div>
  );
};

export default GroupButton;
