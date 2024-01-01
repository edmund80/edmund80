import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedProduct } from '../features/products/ProductsSlice';

const DisplayList = () => {
    const items = selectFeaturedProduct();

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                <Col md className='md-1' key={idx}>
                    <DisplayCard item={item} />
                </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList