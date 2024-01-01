import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

const DisplayCart = ({ item }) => {
    const { image, name, price, rating } = item;

    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{price}</CardText>
                <CardText>{rating}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCart;