import './App.css';
import '@fontsource/raleway';
import Header from './components/header/Header';
import { Navigate, Route, Routes } from 'react-router';
import CategoryPage from './components/category-page/CategoryPage';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from './Queries';
import ProductPage from './components/product-page/ProductPage';
import { useEffect } from 'react';
import { Cart } from './components/cart/Cart';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/all" />} />
      </Routes>
    </div>
  );
}

export default App;
