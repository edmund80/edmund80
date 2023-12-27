import { Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import Header from './components/Header'
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='products' element={<ProductsPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='cart' element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

