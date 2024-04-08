import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationBasic = ({ onPageChange, totalPages }) => {
  const [active, setActive] = useState(1);
  const handlePageClick = (number) => {
    setActive(number);
    onPageChange(number);
  };
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handlePageClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Pagination>
      <Pagination.First onClick={() => onPageChange(1)} />
      {items}

      <Pagination.Last onClick={() => handlePageClick(totalPages)}/>
    </Pagination>
  );
};
export default PaginationBasic;
