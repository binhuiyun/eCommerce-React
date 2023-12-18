import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import "./product.css"

const ProductForm = () => {
  return (
    <Container className='content-field'>
  
    <h1 className='title'>Create Product</h1>

    <Form>
     
      <Form.Group className="mb-3">
        <Form.Label>Product name</Form.Label>
        <Form.Control/>
      </Form.Group>
       
      <Form.Group className="mb-3">
        <Form.Label>Product Description</Form.Label>
        <Form.Control as="textarea" style={{ height: '120px' }}  />
      </Form.Group>

      <Row className="mb-3">
    
        <Form.Group as={Col}>
          <Form.Label>Catagory</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Price</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Row className="mb-3">
    
        <Form.Group as={Col }>
          <Form.Label>In Stock Quantity</Form.Label>
            <Form.Control />    
        </Form.Group>

        <Form.Group as= {Col} md = {8}>
          <Form.Label>Add Image Link</Form.Label>  
          <InputGroup>
            <Form.Control type="text" placeholder="http://" />
         
             <button className='btn btn-primary'>Upload</button>
       
             </InputGroup>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <div>
      <img
        src="https://placekitten.com/200/200"
        alt="Image Preview"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
      </Form.Group>
      <button className="btn btn-primary" >
        Add Product
      </button>
    </Form>

    </Container>
  );
}

export default ProductForm;