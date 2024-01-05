import Card from "react-bootstrap/Card";
import { Button, Flex } from "antd";
import "./card.css";
import GroupButtons from "./GroupButtons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {setEdit} from "../../../../reducers/editActions";

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
  const edit = useSelector((state) => state.edit);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setEdit(!edit)); 

    navigator(`/edit-product/${_id}`);
  };
  
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
          <GroupButtons
            productData={{
              productID: _id,
              productPrice: price,
              productQuantity: quantity,
              productTitle: title,
              productDescription: description,
              productCategory: category,
            }}
          />
          <Button className="w-1/2 border-2" onClick={handleEdit}>Edit</Button>
        </Flex>
      </Card.Body>
    </Card>
  );
};

export default ProductCardItem;
