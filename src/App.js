import './App.css';
import '@fontsource/raleway';
import Header from './components/header/Header';
import { Navigate, Route, Routes } from 'react-router';
import CategoryPage from './components/category-page/CategoryPage';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from './Queries';
import ProductPage from './components/product-page/ProductPage';
import { useEffect, useState } from 'react';
import Cart from './components/cart/Cart';
import ModalAddToCart from './components/modal-add-to-cart/ModalAddToCart';

function App() {
  const [showModal, setShowModal] = useState(false);

  const modal = () => {
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };

  return (
    <div className="App">
      <Header />
      <div className={showModal ? 'modal_hide' : 'modal_show'}>
        <ModalAddToCart />
      </div>
      <Routes>
        <Route path="/:category" element={<CategoryPage />} />
        <Route
          path="/:category/:productId"
          element={<ProductPage modal={modal} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/all" />} />
      </Routes>
    </div>
  );
}

export default App;
