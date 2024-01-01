import { Container } from 'reactstrap';
import ProductsList from '../app/features/products/ProductsList';
import SubHeader from '../components/SubHeader';

const ProductDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Products' />
           <ProductsList />
        </Container>
    );
};

export default ProductDirectoryPage