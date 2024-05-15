import Card from "react-bootstrap/Card";
import { Flex } from "antd";
import "./card.css";
import GroupButton from "./GroupButton";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleEdit } from "../../../redux/editSlice";
import { formatCurrency } from "../../../utils/formatCurrency";

const ProductCardItem = ({ product }) => {
  const {user} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const edit = useSelector((state) => state.edit);
  const dispatch = useDispatch();
  console.log("home", );


  const handleEdit = () => {
    dispatch(toggleEdit(!edit));
    navigate(`/edit-product/${product._id}`);
  };

  return (
    <Card>
      <Card.Img
        className="img-size p-3"
        variant="top"
        src={product.image}
        style = {{objectFit: "cover"}}
        onClick={() => navigate(`/product/${product._id}`)}
      />
      <Card.Body className="grid gap-y-2">
        <Card.Title className=" title-font">{product.name}</Card.Title>
        <Card.Text className="price-font">
          {formatCurrency(product.price)}
        </Card.Text>

        {user && (
          <Flex gap="small">
            <GroupButton
              product={product}
            />
            {user.email === "admin@gmail.com" && (
              <button
                className="flex items-center justify-center w-1/2 text-base border border-[#6B7280] rounded-md transition-colors duration-300 hover:bg-gray-300"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
          </Flex>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCardItem;
