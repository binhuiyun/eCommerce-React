import React, {useState, useEffect }from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import "./product.css";

const ProductForm = ({onSubmit, initialData}) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    image: "",
    catagory: "",
  });

  useEffect(() => {
    if (initialData) {
      setProduct(initialData);
    }
  } , [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <div className="container">
      <h1 className="title mb-4 text-center">{initialData ? "Edit Product" : "Create Product"}</h1>

      <Form className="form-field">
        <Form.Group className="mb-3">
          <Form.Label>Product name</Form.Label>
          <Form.Control
          type="text" 
          name="name"
          value={product.name}
          onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Description</Form.Label>
          <Form.Control as="textarea" style={{ height: "100px" }}
          name="description"
          value={product.description}
          onChange={handleInputChange}          
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md={6}>
            <Form.Label>Catagory</Form.Label>
            <Form.Select
            name="catagory"
            value={product.catagory}
            onChange={handleInputChange}
             defaultValue="Choose...">
              <option>Choose...</option>
              <option>Electronics</option>
              <option>Food</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md={6}>
            <Form.Label>Price</Form.Label>
            <Form.Control 
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>In Stock Quantity</Form.Label>
            <Form.Control 
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} md={8}>
            <Form.Label>Add Image Link</Form.Label>
            <InputGroup>
              <Form.Control 
              type="text" placeholder="http://"
              name="image"
              value={product.image}
              onChange={handleInputChange}
               />

              <button className="btn btn-primary">Upload</button>
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group className="image-field mb-3">
          <div className="image-icon">
            <FileImageOutlined />
          </div>
          <div>Image Preview!</div>
        </Form.Group>
        <button className="btn btn-primary btn-size d-block mx-auto mx-md-0" onClick = {handleSubmit}>
          {initialData? "Save Changes" : "Add Product"}
        </button>
      </Form>
    </div>
  );
};

export default ProductForm;
