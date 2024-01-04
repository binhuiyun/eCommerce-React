import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { FileImageOutlined } from "@ant-design/icons";
import "./product.css";

const ProductForm = () => {
  const navigate = useNavigate();
  
  const handleClick = () =>{ 
    // TODO: Add product to database
    console.log(`TODO: Add product to database`);
    navigate(`/`);
  }

  return (
    <div className="container">
      <h1 className="title mb-4 text-center">Create Product</h1>

      <Form className="form-field">
        <Form.Group className="mb-3">
          <Form.Label>Product name</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Description</Form.Label>
          <Form.Control as="textarea" style={{ height: "100px" }} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md={6}>
            <Form.Label>Catagory</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md={6}>
            <Form.Label>Price</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>In Stock Quantity</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} md={8}>
            <Form.Label>Add Image Link</Form.Label>
            <InputGroup>
              <Form.Control type="text" placeholder="http://" />

              <button className="btn btn-primary bg-chuwa-blue ">Upload</button>
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group className="image-field mb-3">
          <div className="image-icon">
            <FileImageOutlined />
          </div>
          <div>Image Preview!</div>
        </Form.Group>
        <button className="btn bg-chuwa-blue btn-primary btn-size d-block mx-auto mx-md-0" onClick={handleClick}>
          Add Product
        </button>
      </Form>
    </div>
  );
};

export default ProductForm;
