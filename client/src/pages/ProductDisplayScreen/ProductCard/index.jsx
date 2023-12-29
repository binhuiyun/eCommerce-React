import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ProductCardItem from "./ProductCardItem";
import { Flex } from "antd";
import "./card.css";
import PaginationBasic from "./PaginationBasic";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-product");
  };

  return (
    <>
      <div className="row ml-10 mt-10 mb-4">
        <p className="col-md-8 p-title">Products</p>
        <Flex className="col-md-4" wrap="wrap" gap="small">
          <DropdownButton title="Sort By" variant="light">
            <Dropdown.Item href="#/action-1">Last added</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Price: Low to High</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Price: High to Low</Dropdown.Item>
          </DropdownButton>

          <button className="btn btn-primary" onClick={handleClick}>Add Product</button>
        </Flex>
      </div>

      <div className="display-field">
        <Flex wrap="wrap" gap="middle">
          {Array.from({ length: 10 }, () => ProductCardItem())}
        </Flex>
        <div className="d-flex justify-content-end m-5">
          <PaginationBasic />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
