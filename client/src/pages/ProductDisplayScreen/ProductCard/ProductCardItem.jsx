import Card from "react-bootstrap/Card";
import { Button, Flex } from "antd";
import "./card.css";
import GroupButtons from "./GroupButtons";
import { useNavigate } from "react-router-dom";

const ProductCardItem = ({
  Date,
  _id,
  description,
  category,
  image,
  name,
  price,
  stockQuantity,
}) => {
  const navigator = useNavigate();
  return (
    <Card className="custom-card">
      <Card.Img
        className="img-size p-3"
        variant="top"
        src={image}
        onClick={(e) =>
          navigator(`/product/${_id}`, {
            state: {
              _id: _id,
              productName: name,
              productDescription: description,
              category: category,
              price: price,
              quantity: stockQuantity,
              link: image,
            },
          })
        }
      />
      <Card.Body className="grid gap-y-2">
        <Card.Title className=" title-font">{name}</Card.Title>
        <Card.Text className="price-font">${price}</Card.Text>
        <Flex gap="small">
          <GroupButtons
            productData={{
              productID: _id,
              productDate: Date,
              productPrice: price,
              productQuantity: stockQuantity,
              productTitle: name,
              productImage: image,
              productDescription: description,
              productCategory: category,
            }}
          />
          <button className="flex items-center justify-center w-1/2 text-base border border-[#6B7280] rounded-md transition-colors duration-300 hover:bg-gray-300">
            Edit
          </button>
        </Flex>
      </Card.Body>
    </Card>
  );
};

export default ProductCardItem;
