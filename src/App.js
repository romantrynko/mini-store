import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router';
import Cart from './components/cart/Cart';
import CategoryPage from './components/category-page/CategoryPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={'/home'} element={<CategoryPage />} />
          {/* <Route to="/cart" element={<Cart />} />
        <Route to="/category?=:cat" element={<MainPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
