import { Card, CardTitle, CardImg, CardText, CardBody, Col, Button } from 'reactstrap';
import { useCart } from '../../shared/CART';

const ProductDetail = ({ product }) => {
    const { id, image, name, price, rating } = product;
    const { addToCart } = useCart();

    return (
        <Col md='12' className='m-4'>
            <Card className='card'
            style={{
                width: '32rem'
            }}
            >
                <CardImg
                    alt={name}
                    src={image}
                />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{price}</CardText>
                    <CardText>{rating}</CardText>
                    <Button onClick={() => addToCart({ image, id, name, price, rating })}>
                        Add to Card
                    </Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ProductDetail