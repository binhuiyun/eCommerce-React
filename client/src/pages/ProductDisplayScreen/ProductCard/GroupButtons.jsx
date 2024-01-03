import React, { useState } from "react";
import { Button } from "antd";

const GroupButtons = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
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
        <Button className="border-none flex justify-center items-center focus:outline-none focus:shadow-outline text-white  text-base bg-[#5048e5] hover:bg-gray-500" onClick={handleDecrement} disabled={count === 0}>
          {" "}
          -
        </Button>
      )}
      {displayCount && <div className="w-1/2 bg-[#5048e5] flex items-center justify-center text-white" >{count}</div>}
      {displayCount && (
        <Button className="flex justify-center items-center border-none focus:outline-none focus:shadow-outline text-white  text-base bg-[#5048e5] hover:bg-gray-500" onClick={handleIncrement} disabled={count === 0}>
          {" "}
          +
        </Button>
      )}
      {!displayCount && <Button className="flex w-full justify-center items-center border-none focus:outline-none focus:shadow-outline text-white  text-base bg-[#5048e5] hover:bg-gray-500" onClick={handleIncrement}>Add</Button>}
    </Button.Group>
  );
};

export default GroupButtons;
