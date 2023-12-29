
import Card from 'react-bootstrap/Card';
import { Button, Flex } from 'antd';

import "./card.css"
import GroupButtons from './GroupButtons';

const ProductCardItem = ()=> {
  return (
    <Card className='custom-card'>
      <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693010533609"/>
      <Card.Body >
        <Card.Title className='title-font'>Apple iPhone 15, 128G</Card.Title>
        <Card.Text>
         $999
        </Card.Text>
        <Flex wrap='wrap' gap="small">
         <GroupButtons/> 
        <Button className='btn-wide'>Edit</Button>
      </Flex>         
      </Card.Body>
    </Card>
  );
}

export default ProductCardItem;