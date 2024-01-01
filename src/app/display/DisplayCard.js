import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

const DisplayCard = ({ item }) => {
    const { image, name, price, rating } = item;

    return (
        <Card className='card'
            style={{
                width: '18rem'
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
            </CardBody>
        </Card>
    );
};

export default DisplayCard;