import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ProductCardItem from "./ProductCardItem";
import { Flex } from "antd";
import "./card.css";
import PaginationBasic from "./PaginationBasic";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { fetchTotal } from "../../../redux/product.slice";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const productsList = useSelector(state => state.product.products);
  //console.log(total);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/product/products");
      setProducts(response.data);
      dispatch(fetchTotal());
    };
    fetchProducts();
  }, []);

  return (
    <div className="m-5">
      <div className="grid grid-rows-1 grid-cols-2 xs:grid-rows-2 xs:grid-cols-1 md:grid-rows-1 md:grid-cols-2 mb-4 gap-y-3">
        <p className="flex text-3xl font-bold xs:justify-center md:justify-start">
          Products
        </p>
        <div className="flex justify-end xs:row-start-2 xs:justify-center md:row-start-1 md:col-start-2 md:justify-end space-x-4">
          <div>
            <DropdownButton title="Sort By" variant="light">
              <Dropdown.Item href="#/action-1">Last added</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Price: Low to High
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Price: High to Low
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div>
            <button
              className="hidden md:inline px-4 py-2 text-base bg-[#5048e5] hover:bg-gray-500 text-white justify-center items-center rounded focus:outline-none focus:shadow-outline"
              onClick={() => navigate("/create-product")}
            >
              Add Product
            </button>

            <button
              className="md:hidden px-4 py-2 font-bold text-base bg-[#5048e5] hover:bg-gray-500 text-white justify-center items-center rounded focus:outline-none focus:shadow-outline"
              onClick={() => navigate("/create-product")}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white rounded p-4">
        <Flex wrap="wrap" gap="middle" className="flex justify-between">
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
    </div>
  );
};

export default ProductCard;
