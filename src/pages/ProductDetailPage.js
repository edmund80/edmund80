import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectProductById } from '../app/features/products/ProductsSlice';
import ProductDetail from '../app/features/products/ProductDetail';
import SubHeader from '../components/SubHeader';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = selectProductById(productId)

    return (
        <Container>
            <SubHeader current={product.name} detail={true} />
            <Row>
                <ProductDetail product={product} />
            </Row>
        </Container>
    )
}


export default ProductDetailPage