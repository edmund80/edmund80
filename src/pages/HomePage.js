import { Container, Row } from 'reactstrap';
import DisplayList from '../app/display/DisplayList'
import SubHeader from '../components/SubHeader';
import angelBabiesCollection from '../app/assets/img/angel-babies-collection.jpg';
import { PRODUCTS } from '../app/shared/PRODUCTS';

const HomePage = ({ product }) => {
  return (
    <Container>
      <SubHeader current='Home' />
        <Row>
          <h1>Welcome to MHB Dips</h1>
        </Row>
        
        <Row>
            <img className='home-page' src={angelBabiesCollection} alt={PRODUCTS.name} width='30rem' />
        </Row>
        
        <Row>
          <h2>Featured Products</h2>
        </Row>

        <Row>
          <DisplayList />
        </Row>
    </Container>
  );
};

export default HomePage;