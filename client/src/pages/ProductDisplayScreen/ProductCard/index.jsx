import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ProductCardItem from "./ProductCardItem";
import { Flex } from "antd";
import "./card.css";
import PaginationBasic from "./PaginationBasic";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/product/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);
  const navigate = useNavigate();
  console.log(products);
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

          <button
            className="btn btn-primary"
            onClick={() => navigate("/create-product")}
          >
            Add Product
          </button>
        </Flex>
      </div>

      <div className="display-field">
        <Flex wrap="wrap" gap="middle">
          {products.map((product) => (
            <ProductCardItem
              key={product._id}
              _id={product._id}
              title={product.name}
              description={product.description}
              category={product.category}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
            />
          ))}
        </Flex>
        <div className="d-flex justify-content-end m-5">
          <PaginationBasic />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
