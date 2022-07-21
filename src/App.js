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

function App() {
  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError
  } = useQuery(GET_CATEGORIES);

  if (categoriesLoading)
    <div style={{ marginTop: '80px', textAlign: 'center' }}>Loading...</div>;

  return (
    <div className="App">
      <Header data={categoriesData} />

      <Routes>
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:productId" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/all" />} />
      </Routes>
    </div>
  );
}

export default App;
