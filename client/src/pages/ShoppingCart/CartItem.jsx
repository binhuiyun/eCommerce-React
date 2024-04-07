import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/cartSlice";
import axios from "axios";
import { formatCurrency } from "../../utils/formatCurrency";

export default function CartItem({ product, quantity }) {
  console.log("cartItem component", product)
  const dispatch = useDispatch();
  // const product = storeItems.find((item) => item._id === product);
  // if (!product) return null;

  const handleIncrement = async (product) => {
    dispatch(increaseQuantity(product));
  };

  const handleDecrement = async (product) => {
    dispatch(decreaseQuantity(product));
  };
  const handleRemove = async (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <div className="w-full h-24 flex flex-row pb-6">
      <div className="w-[20%] h-full bg-white">
        <img src={product.image} className="max-h-[60px] max-w-[60px]" />
      </div>
      <div className="relative w-[80%]">
        <h3 className="absolute top-0 left-2 font-bold">{product.name}</h3>
        <div className="absolute top-0 right-2 text-indigo-600">
          {formatCurrency(product.price * quantity)}
        </div>

        <div className="absolute bottom-0 left-2 w-12 h-4 flex border border-grey-500">
          <div className="flex items-center justify-center w-[33%] h-full cursor-pointer">
            <div
              className="font-light text-sm text-grey-500"
              onClick={() => handleDecrement(product)}
            >
              -
            </div>
          </div>
          <div className="flex items-center justify-center w-[33%] h-full border-left border-grey-500">
            <div className="font-light text-xs text-grey-500 border-x pl-1 pr-1">
              {quantity}
            </div>
          </div>
          <div className="flex items-center justify-center w-[33%] h-full cursor-pointer">
            <div
              className="font-light text-sm text-grey-500"
              onClick={() => handleIncrement(product)}
            >
              +
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 right-2 text-sm text-gray-600 underline cursor-pointer"
          onClick={() => handleRemove(product)}
        >
          Remove
        </div>
      </div>
    </div>
  );
}
