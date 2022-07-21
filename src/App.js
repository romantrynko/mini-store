import logo from './logo.svg';
import './App.css';
import '@fontsource/raleway';
import Header from './components/header/Header';
import { Navigate, Route, Routes } from 'react-router';
import Cart from './components/cart/Cart';
import CategoryPage from './components/category-page/CategoryPage';
import { BrowserRouter } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { GET_CATEGORIES, GET_CURRENCIES, GET_CATEGORY, GET_PRODUCT } from './Queries';
import { useEffect, useState } from 'react';
import { ClickProvider } from './ClickContext';
import ProductPage from './components/product-page/ProductPage';

function App() {
  const [products, setProducts] = useState([]);
  const [catName, setCatName] = useState('All');
  const [product, setProduct] = useState(null);

  const {
    loading: categoriesLoading,
    error: categoriesError,
    data: categoriesData
  } = useQuery(GET_CATEGORIES);

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

  // useEffect(() => {
  //   if (categoriesData) {
  //     const data = categoriesData.categories[0].products;

  //     setProducts(data);
  //     return;
  //   }
  // }, [categoriesData]);

  // const onClick = (e) => {
  //   const categoryName = e.target.value;
  //   setCatName(categoryName);
  //   console.log(categoriesData);

  //   switch (categoryName) {
  //     case 'all':
  //       console.log('All was chosen');
  //       const all = categoriesData.categories[0].products;

  //       setProducts(all);
  //       break;

  //     case 'clothes':
  //       console.log('Clothes was chosen');
  //       const clothes = categoriesData.categories[1].products;

  //       setProducts(clothes);

  //       break;

  //     case 'tech':
  //       console.log('Tech was chosen');
  //       const tech = categoriesData.categories[2].products;

  //       setProducts(tech);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const onProductClick = (props) => {
    // e.stopPropagation();
    console.log(props);

    // setProduct(product);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header data={categoriesData} />

        <Routes>
          {products && <Route path='/:category' element={<CategoryPage />} />}
          <Route path="*" element={<Navigate to="/all" />} />
          {/* <Route
              path={'/a'}
              element={<ProductPage product={product} catName={catName} />}
            /> */}
          {/* /* <Route to="/cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
