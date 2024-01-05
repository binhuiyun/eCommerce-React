import React, { useState } from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToCart_, removeFromCart_ } from "../../../redux/cart.slice";
import axios from "axios";

const GroupButtons = (props) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  async function handleIncrement(data) {

    console.log(data);
    
    setCount(count + 1);
    dispatch(addToCart_(data));
    try{
      const cart = await axios.post("/api/cart/add", {
        product: data._id,
        quantity: 1,
      }).then((response) => {
        console.log(response);
      });
    } catch (err) {
      console.log("sadadsadasdsaddsadsa");
    }
  };

  const handleDecrement = (data) => {
    if (count > 0) {
      setCount(count - 1);
      dispatch(removeFromCart_(data));
    }
  };

  const displayCount = count > 0;

  return (
    <Button.Group className="w-1/2">
      {displayCount && (
        <Button
          className="border-none flex justify-center items-center focus:outline-none focus:shadow-outline text-white text-base bg-chuwa-blue transition-colors duration-300 hover:bg-gray-300"
          onClick={() => handleDecrement(props.productData)}
          disabled={count === 0}
        >
          -
        </Button>
      )}
      {displayCount && (
        <div className="w-1/2 bg-chuwa-blue flex items-center justify-center text-white">
          {count}
        </div>
      )}
      {displayCount && (
        <Button
          className="flex justify-center items-center border-none focus:outline-none focus:shadow-outline text-white text-base bg-chuwa-blue transition-colors duration-300 hover:bg-gray-300"
          onClick={() => handleIncrement(props.productData)}
          disabled={count === 0}
        >
          +
        </Button>
      )}
      {!displayCount && (
        <Button
          className="flex w-full justify-center items-center border-none focus:outline-none focus:shadow-outline text-white text-base bg-chuwa-blue transition-colors duration-300 hover:bg-gray-300 "
          onClick={() => handleIncrement(props.productData)}
        >
          Add
        </Button>
      )}
    </Button.Group>
  );
};

export default GroupButtons;
