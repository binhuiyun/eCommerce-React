import Dropdown from 'react-bootstrap/Dropdown';
import ProductCardItem from './ProductCardItem';
import "./card.css"
import PaginationBasic from './PaginationBasic';

const ProductCard = () =>{
    return (
        <>
            <div className="row ml-10 mt-10 mb-4">
                <div className='col-4 p-title'>Products</div>
                <div className='col-4'></div>
                <div className='col-2'>
                <Dropdown>
                    <Dropdown.Toggle className='btn-white'>
                        Sort By
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Last added</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Price: Low to High</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Price: High to Low</Dropdown.Item>
              
                    </Dropdown.Menu>
                </Dropdown>
           </div>
                <div className='col-2'>
                <button className="btn btn-primary">Add Product</button>
             </div>
                </div>

        <div className="display-field justify-content-between">
            <div className="d-flex ">
            <ProductCardItem /> 
            <ProductCardItem /> 
            <ProductCardItem /> 
            <ProductCardItem /> 
            <ProductCardItem /> 
            
            </div>
            <div className="d-flex ">
            <ProductCardItem /> 
            <ProductCardItem /> 
            <ProductCardItem /> 
            <ProductCardItem /> 
            <ProductCardItem /> 
            </div>
        </div>
        <div className="d-flex justify-content-end m-5">
         <PaginationBasic />
             </div>
        </>
    )

}

export default ProductCard;