import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ProductCardItem from "./ProductCardItem";
import { Flex } from "antd";
import "./card.css";
import PaginationBasic from "./PaginationBasic";


const ProductCard = () => {
  return (
    <>
      <div className="row ml-10 mt-10 mb-4">
        <div className="col-xs-12 col-md-8 p-title">Products</div>
        <div className="col-xs-6 col-md-2">
          <DropdownButton  title="Sort By" variant="light">
      
              <Dropdown.Item href="#/action-1">Last added</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Price: Low to High
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Price: High to Low
              </Dropdown.Item>
         
          </DropdownButton>
        </div>
        <div className="col-xs-2 col-md-2">
          <button className="btn btn-primary">Add Product</button>
        </div>
      </div>

      <div className="display-field justify-content-between">
        <Flex wrap="wrap" gap="small">
        {Array.from(
            { length: 10 },
            () => (ProductCardItem()),
        )}
         </Flex>
      <div className="d-flex justify-content-end m-5">
        <PaginationBasic />
      </div>
        </div>
    </>
  );
};

export default ProductCard;
