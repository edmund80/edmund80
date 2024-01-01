import { Col, Row } from 'reactstrap'
import ProductCard from "./ProductCard"
import { selectALLProducts } from "./ProductsSlice";


const ProductsList = () => {
    const products = selectALLProducts();

    return (
        <Row className='ms-auto'>
            {products.map((product) => {
                return (
                    <Col md='5' 
                         className='m-4' 
                         key={product.id}
                    >
                       
                       <ProductCard product={product} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ProductsList