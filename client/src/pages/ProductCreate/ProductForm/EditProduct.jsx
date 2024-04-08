import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { FileImageOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import "./product.css";
import { getCurrentProductThunk, updateCurrentProductThunk } from "../../../thunks/product-thunk";
import { toggleEdit } from "../../../redux/editSlice";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const{ product }= useSelector((state) => state.product);
  const [imagePreview, setImagePreview] = useState("");
  
  const edit = useSelector((state) => state.edit);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getCurrentProductThunk(id)); 
  }, [id]);
  const [formData, setFormData] = useState({}); 
 
  useEffect(() => {
    setFormData(product);
  }, [product]);

  const handleUpload = (e) => {
    e.preventDefault();
    setImagePreview(formData.image);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (formData.category === "Choose...")
      newErrors.category = "Category is required!";
    if (isNaN(formData.price) || formData.price < 0)
      newErrors.price = "Price must be a positive number!";
    if (isNaN(formData.stockQuantity) || formData.stockQuantity < 0)
      newErrors.stockQuantity = "Stock quantity must be a positive number!";
    if (!formData.image.trim()) newErrors.image = "Image is required!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    //console.log("input change event triggered")
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));

  };

  const handleSave = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("form is valid");
      navigate("/");
      dispatch(toggleEdit(!edit));
      dispatch(updateCurrentProductThunk(formData));
    }
  };

  return (
    <div className="container mb-5">
      <h1 className="title mb-4 text-center">Edit Product</h1>
      <Form className="form-field">
        <Form.Group className="mb-3">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md={6}>
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              isInvalid={!!errors.category}
              defaultValue="Choose..."
            >
              <option value="Choose...">Choose...</option>
              <option value="watch">watch</option>
              <option value="phone">phone</option>
              <option value="laptop">laptop</option>
              <option value="accessories">accessories</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.category}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={6}>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              isInvalid={!!errors.price}
            />
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>In Stock Quantity</Form.Label>
            <Form.Control
              type="number"
              name="stockQuantity"
              value={formData.stockQuantity}
              onChange={handleInputChange}
              isInvalid={!!errors.stockQuantity}
            />
            <Form.Control.Feedback type="invalid">
              {errors.stockQuantity}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md={8}>
            <Form.Label>Add Image Link</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="http://"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                isInvalid={!!errors.image}
              />
              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
              <button className="btn btn-primary bg-[#5048e5] "
              onClick ={handleUpload}>Upload</button>
            </InputGroup>
          </Form.Group>
        </Row>

        <Form.Group className="image-field mb-3">
          {!imagePreview && (
            <>
               <div className="image-icon">
            <FileImageOutlined />
          </div>
          <div>Image Preview!</div>
            </>
          )}
         
          {imagePreview && <img className="image-size" src={imagePreview} alt="preview" />}
        </Form.Group>

        <button
          className="btn bg-chuwa-blue btn-primary btn-size d-block mx-auto mx-md-0"
          onClick={handleSave}
        >
          Save Product
        </button>
      </Form>
    </div>
  );
};

export default EditProduct;
