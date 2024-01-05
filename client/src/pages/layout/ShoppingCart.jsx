import React, { useEffect } from "react";
import CartItem from "../CartItem";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/cart.slice";

const mockCartItems = [
  // {
  //   productName: "Apple Macbook Pro",
  //   price: 1599,
  //   quantity: 1,
  //   _id: 123,
  // },
  // {
  //   productName: "Apple Watch",
  //   price: 299,
  //   quantity: 3,
  //   _id: 345,
  // },
];

const mockDiscount = -20;

const ShoppingCart = ({ handleCartClick }) => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  console.log(cart);

  return (
    <>
      <div className="absolute top-0 right-0 sm:w-full md:w-1/3 bg-indigo-600 z-50">
        <div className="flex justify-between">
          <h2 className="mt-4 mb-4 ml-8 text-2xl font-bold text-white flex items-center">
            Cart
            <span className="text-sm ml-2 font-normal">{`(${mockCartItems.reduce(
              (accumulator, item) => {
                return accumulator + item.quantity;
              },
              0
            )})`}</span>
          </h2>
          <div className="mt-6 mr-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="h-6 w-6 cursor-pointer"
              onClick={handleCartClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="w-full pl-[5%] pr-[5%] pt-6 bg-white flex flex-col justify-center items-center border-b border-stone-300">
          {mockCartItems.map((product, index) => {
            return <CartItem product={product} key={index} />;
          })}
          <div className="w-full pb-10">
            <p className="text-xs text-stone-500 mt-4">Apply Discount Code</p>
            <div className="flex justify-between">
              <input
                type="text"
                className="w-2/3 mt-3 mr-6 border border-stone-300 py-2 rounded"
              />
              <button className="bg-indigo-600 text-white text-sm px-5 py-3 mt-3 rounded">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-white pl-[5%] pr-[5%] flex flex-col">
          <ul>
            <li className="flex justify-between mt-4">
              <p className="font-bold">Subtotal</p>
              {/* <p className="font-bold">{`$${mockCartItems
                .reduce((accumulator, item) => {
                  return accumulator + item.quantity * parseInt(item.price);
                }, 0)
                .toFixed(2)}`}</p> */}

              <p className="font-bold">
                $
                {cart
                  .reduce((acc, item) => {
                    return acc + item.quantity * item.productPrice;
                  }, 0)
                  .toFixed(2)}
              </p>
            </li>
            <li className="flex justify-between mt-4">
              <p className="font-bold">Tax</p>
              <p className="font-bold">{`$${(
                mockCartItems.reduce((accumulator, item) => {
                  return accumulator + item.quantity * parseInt(item.price);
                }, 0) * 0.1
              ).toFixed(2)}`}</p>
            </li>
            <li className="flex justify-between mt-4">
              <p className="font-bold">Discount</p>
              <p className="font-bold">{`${
                mockDiscount < 0 ? "-" : ""
              }$${Math.abs(mockDiscount).toFixed(2)}`}</p>
            </li>
            <li className="flex justify-between mt-4 mb-4">
              <p className="font-bold">Estimated total</p>
              <p className="font-bold">{`$${(
                mockCartItems.reduce((accumulator, item) => {
                  return accumulator + item.quantity * parseInt(item.price);
                }, 0) *
                  1.1 +
                mockDiscount
              ).toFixed(2)}`}</p>
            </li>
          </ul>
          <button className="bg-indigo-600 text-white text-sm px-5 py-3 rounded mb-4">
            Continue to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
