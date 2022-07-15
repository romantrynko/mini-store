import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router';
import MainPage from './components/main-page/MainPage';
import Cart from './components/cart/Cart';
import CategoryPage from './components/category-page/CategoryPage';

function App() {
  return (
    <div className="App">
      <MainPage>
        <Header />
      

        <Routes>
          <Route to={"/"} element={<CategoryPage />} />
          {/* <Route to="/cart" element={<Cart />} />
        <Route to="/category?=:cat" element={<MainPage />} /> */}
        </Routes>
      </MainPage>
    </div>
  );
}

export default App;
