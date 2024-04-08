import { Offcanvas, Stack, Form } from "react-bootstrap";
import { Col, Row } from "antd";
import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/formatCurrency";
import CartItem from "./CartItem";
import { toggleIsOpen } from "../../redux/cartSlice";
import "./ShoppingCart.css";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
//  const storeItems = useSelector((state) => state.productList.products);
  const cartItems = cart.items;
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState("");
  const [discountRate, setDiscountRate] = useState(0);

  // const subtotal = cartItems.reduce((total, cartItem) => {
  //   const item = storeItems.find((i) => i._id === cartItem.id);
  //   return total + (item?.price || 0) * cartItem.quantity;
  // }, 0);
  const subtotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.product.price * cartItem.quantity;
  }, 0);


  const handleCouponAdd = (e) => {
    e.preventDefault();
    if (coupon.toUpperCase() === "WELCOME20") {
      setDiscountRate(0.2);
      console.log("Coupon added");
    } else {
      alert("Invalid coupon code");
      setCoupon("");
      setDiscountRate(0);
    }
  };

  return (
    <Offcanvas show={cart.isOpen} onHide={()=>dispatch(toggleIsOpen(!cart.isOpen))} placement="end">
      <Offcanvas.Header closeButton className="bg-indigo-600">
        <Offcanvas.Title className="text-white">
          Cart
          <span className="text-sm ml-2 font-normal">{`(${cartItems.reduce(
            (accumulator, item) => {
              return accumulator + item.quantity;
            },
            0
          )})`}</span>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.map((item) => (
          console.log("cart item in shopping",item.product),
          <CartItem key={item.product._id} product={item.product} quantity={item.quantity} />
        ))}
        <p className="text-xs text-stone-500 mt-2">Apply Discount Code</p>
        <Stack direction="horizontal" gap={3} className="mb-4">
          <Form.Control
            className="me-auto mt-3"
            placeholder="WELCOME20"
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button
            className="bg-indigo-600 text-white text-sm px-5 py-2 mt-3 rounded"
            onClick={handleCouponAdd}
          >
            Apply
          </button>
        </Stack>
        <hr className="border-stone-300 mb-3" />

        <Row className="font-bold mb-3">
          <Col span={8}> Subtotal</Col>
          <Col span={8} offset={8}>
            {formatCurrency(subtotal)}
          </Col>
        </Row>

        <Row className="font-bold mb-3">
          <Col span={8}> Discount</Col>
          <Col span={8} offset={8}>
            {formatCurrency(discountRate * subtotal)}
          </Col>
        </Row>
        <Row className="font-bold mb-3">
          <Col span={8}> Tax</Col>
          <Col span={8} offset={8}>
            {formatCurrency(subtotal * (1 - discountRate) * 0.1)}
          </Col>
        </Row>
        <Row className="font-bold mb-3">
          <Col span={8}> Estimate Total</Col>
          <Col span={8} offset={8}>
            {formatCurrency(
              subtotal -
                discountRate * subtotal +
                subtotal * (1 - discountRate) * 0.1
            )}
          </Col>
        </Row>

          <button
            className="w-full bg-indigo-600 text-white text-sm px-5 py-2 rounded mt-4"
            onClick={() => console.log("Continue to checkout")}
          >
            Continue to checkout
          </button>
    
      </Offcanvas.Body>
    </Offcanvas>
  );
}
