import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ProductCardItem from "./ProductCardItem";
import { Flex } from "antd";
import "./card.css";
import PaginationBasic from "./PaginationBasic";
import { useNavigate } from "react-router-dom";

const ProductData = [
  {
    id: 1,
    title: "Apple iPhone 15, 128G",
    price: "$999",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693010533609",
  },

  {
    id: 2,
    title: "MacBook Air 13-inch",
    price: "$999",
    image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1664581580690"
    
  },
  
    {
      id: 3,
      title: "Apple Watch Series 7",
      price: "$399",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s9-case-unselect-gallery-1-202309?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1693525062134"
      
    },
  
    {
      id: 4,
      title: "iPad Pro 12.9-inch",
      price: "$799",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&.v=1617124405000"
      
    },
  
    {
      id: 5,
      title: "Sony Camera",
      price: "$399",
      image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522416_sd.jpg"
      
    },
  
    {
      id: 6,
      title: "AirPods Pro",
      price: "$249",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985"
      
    },
  
    {
      id: 7,
      title: "AirPods Max",
      price: "$549",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011?wid=2000&hei=2000&fmt=png-alpha&.v=1604705328000"
      
    },
  
    {
      id: 8,
      title: "Apple Pencil",
      price: "$129",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUWA3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1695933856697"
    },
    {
      id: 9,
      title: "Apple TV 4K",
      price: "$179",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&.v=1617135058000"
    },

    {
      id: 10,
      title: "Magic Keyboard",
      price: "$299",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXQT2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1594854054000"
    }
]


const ProductCard = () => {
  const navigate = useNavigate();
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

          <button className="btn btn-primary" onClick={()=>navigate("/create-product")}>Add Product</button>
        
        </Flex>
      </div>

      <div className="display-field">
        <Flex wrap="wrap" gap="middle">
          {ProductData.map((product) => (
            <ProductCardItem
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
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
