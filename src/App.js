import logo from './logo.svg';
import './App.css';
import '@fontsource/raleway';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router';
import Cart from './components/cart/Cart';
import CategoryPage from './components/category-page/CategoryPage';
import { BrowserRouter } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Categories, Currencies, Category, Products } from './Queries';
import { useEffect, useState } from 'react';
import { ClickProvider } from './ClickContext';

function App() {
  const [products, setProducts] = useState([]);

  const {
    loading: categoriesLoading,
    error: categoriesError,
    data: categoriesData
  } = useQuery(Categories);

  // const {
  //   loading: currenciesLoading,
  //   error: currenciesError,
  //   data: currenciesData
  // } = useQuery(Currencies);

  // const {
  //   loading: categoryLoading,
  //   error: categoryError,
  //   data: categoryData
  // } = useQuery(Category);

  // const {
  //   loading: productsLoading,
  //   error: productsError,
  //   data: productsData
  // } = useQuery(Products);

  useEffect(() => {
    if (categoriesData) {
      const data = categoriesData.categories[0].products;

      setProducts(data);
    }
  }, [categoriesData]);

  const onClick = (e) => {
    const categoryName = e.target.value;

    switch (categoryName) {
      case 'All':
        console.log('All was chosen');

        break;

      case 'Tech':
        console.log('Tech was chosen');

        break;

      case 'Clothes':
        console.log('Clothes was chosen');

        break;

      default:
        break;
    }
  };

  return (
    <ClickProvider Provider value={onClick}>
      <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            {products && (
              <Route
                path={'/'}
                element={<CategoryPage products={products} />}
              />
            )}
            {/* /* <Route to="/cart" element={<Cart />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </ClickProvider>
  );
}

export default App;
