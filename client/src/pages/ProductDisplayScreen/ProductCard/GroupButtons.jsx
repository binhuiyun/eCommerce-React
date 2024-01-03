import React, { useState } from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToCart_ } from "../../../redux/cart.slice";

const GroupButtons = (productID) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  //console.log(productID);

  const handleIncrement = (data) => {
    setCount(count + 1);
    //console.log(data);
    dispatch(addToCart_(data));
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const displayCount = count > 0;

  return (
    <Button.Group className="w-1/2">
      {displayCount && (
        <Button
          className="border-none flex justify-center items-center focus:outline-none focus:shadow-outline text-white  text-base bg-[#5048e5] hover:bg-gray-500"
          onClick={handleDecrement}
          disabled={count === 0}
        >
          {" "}
          -
        </Button>
      )}
      {displayCount && (
        <div className="w-1/2 bg-[#5048e5] flex items-center justify-center text-white">
          {count}
        </div>
      )}
      {displayCount && (
        <Button
          className="flex justify-center items-center border-none focus:outline-none focus:shadow-outline text-white  text-base bg-[#5048e5] hover:bg-gray-500"
          onClick={() => handleIncrement(productID)}
          disabled={count === 0}
        >
          {" "}
          +
        </Button>
      )}
      {!displayCount && (
        <Button
          className="flex w-full justify-center items-center border-none focus:outline-none focus:shadow-outline text-white  text-base bg-[#5048e5] hover:bg-gray-500"
          onClick={() => handleIncrement(productID)}
        >
          Add
        </Button>
      )}
    </Button.Group>
  );
};

export default GroupButtons;
