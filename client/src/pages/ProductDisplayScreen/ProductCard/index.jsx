import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ProductCardItem from "./ProductCardItem";
import { Flex } from "antd";
import "./card.css";
import PaginationBasic from "./PaginationBasic";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllProducts } from "../../../services/productService";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = () => {
  const products = useSelector((state) => state.productList);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => 
    fetchAllProducts(dispatch),
   [currentPage, dispatch]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // const setLastAdded = () => {
  //   const sortedProducts = products.sort((a, b) => {
  //     if (a._id < b._id) return 1;
  //     if (a._id > b._id) return -1;
  //     return 0;
  //   });
  //   setProducts([...sortedProducts]);
  // };

  // const setLowToHigh = () => {
  //   const sortedProducts = products.sort((a, b) => a.price - b.price);
  //   setProducts([...sortedProducts]);
  // };

  // const setHighToLow = () => {
  //   const sortedProducts = products.sort((a, b) => b.price - a.price);
  //   setProducts([...sortedProducts]);
  // };

  return (
    <div className="m-5">
      <div className="grid grid-rows-1 grid-cols-2 xs:grid-rows-2 xs:grid-cols-1 md:grid-rows-1 md:grid-cols-2 mb-4 gap-y-3">
        <p className="flex text-3xl font-bold xs:justify-center md:justify-start">
          Products
        </p>
        <div className="flex justify-end xs:row-start-2 xs:justify-center md:row-start-1 md:col-start-2 md:justify-end space-x-4">
          <div>
            <DropdownButton title="Sort By" variant="light">
              {/* <Dropdown.Item onClick={setLastAdded}>Last added</Dropdown.Item>
              <Dropdown.Item onClick={setLowToHigh}>
                Price: Low to High
              </Dropdown.Item>
              <Dropdown.Item onClick={setHighToLow}>
                Price: High to Low
              </Dropdown.Item> */}
            </DropdownButton>
          </div>
          <div>
            <button
              className="hidden md:inline px-4 py-2 text-base bg-chuwa-blue hover:bg-gray-500 text-white justify-center items-center rounded focus:outline-none focus:shadow-outline"
              onClick={() => navigate("/create-product")}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white rounded p-4">
        <div className="grid grid-flow-row gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {displayedProducts.map((product) => {
            return (    
            <ProductCardItem
              key={product._id} 
              product={product}        
            />
            );
            })}
        </div>
        <div className="d-flex justify-content-end m-5">
          <PaginationBasic onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
