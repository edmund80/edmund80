import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

const ProductCard = ({ product }) => {
    const { id, image, name, price, rating } = product;
    
    
    return (
        <Card className='card'
            style={{
                width: '18rem'
            }}
        >
            <Link to={`${id}`}>
                <CardImg
                    alt={name}
                    src={image}
                />
                <CardBody>
                    <CardTitle>
                        <h3>{name}</h3>
                    </CardTitle>
                    <CardText>{name}</CardText>
                    <CardText>{price}</CardText>
                    <CardText>{rating}</CardText>
                </CardBody>
            </Link>
        </Card>
    );
};

export default ProductCard;