import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDirectoryPage from './pages/ProductDirectoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import Header from './components/Header'
import Footer from './components/Footer';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='products' element={<ProductDirectoryPage />} />
        <Route path='products/:productId'
               element={<ProductDetailPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='cart' element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

