import Card from "react-bootstrap/Card";
import { Button, Flex } from "antd";
import "./card.css";
import GroupButtons from "./GroupButtons";
import { useNavigate } from "react-router-dom";

const ProductCardItem = ({
  _id,
  description,
  category,
  image,
  title,
  price,
  quantity,
}) => {
  const navigator = useNavigate();
  return (
    <Card className="custom-card">
      <Card.Img
        className="img-size"
        variant="top"
        src={image}
        onClick={(e) =>
          navigator(`/product/${_id}`, {
            state: {
              productName: title,
              productDescription: description,
              category: category,
              price: price,
              quantity: quantity,
              link: image,
            },
          })
        }
      />
      <Card.Body className="grid gap-y-2">
        <Card.Title className=" title-font">{title}</Card.Title>
        <Card.Text className="price-font">{price}</Card.Text>
        <Flex gap="small">
          <GroupButtons productID={_id} />
          <Button className="w-1/2 border-2">Edit</Button>
        </Flex>
      </Card.Body>
    </Card>
  );
};

export default ProductCardItem;
