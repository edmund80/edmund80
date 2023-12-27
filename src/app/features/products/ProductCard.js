import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const ProductCard = ({ product }) => {
    const { image, name } = product
    
    return (
        <Card>
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default ProductCard;