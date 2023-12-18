
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./card.css"

const ProductCard = ()=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693010533609"/>
      <Card.Body>
        <Card.Title>Apple iPhone 15, 128G</Card.Title>
        <Card.Text>
         $999
        </Card.Text>
        <Row>
        <Col>  <button className='btn btn-primary' >Add</button> </Col>
        <Col> <button className='btn btn-light'>Edit</button></Col>
      </Row>         
      </Card.Body>
    </Card>
  );
}

export default ProductCard;