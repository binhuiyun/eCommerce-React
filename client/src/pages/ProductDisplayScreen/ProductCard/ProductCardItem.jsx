
import Card from 'react-bootstrap/Card';
import { Button, Flex } from 'antd';

import "./card.css"
import GroupButtons from './GroupButtons';

const ProductCardItem = ({image, title, price}) => {
  return (
    <Card className='custom-card'>
      <Card.Img className="img-size"variant="top" src={image} />
      <Card.Body >
        <Card.Title className='title-font'>{title}</Card.Title>
        <Card.Text>
         {price}
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