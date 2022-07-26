import React, { useEffect, useState } from 'react';
import cl from './SideMenu.module.css';
import Dropdown from '../dropdown/Dropdown';
import cartIcon from '../../assets/cart.jpeg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { totalProductsCount } from '../../actions';

export default function SideMenu() {
  const dispatch = useDispatch();
  const totalProducts = useSelector((state) => state.cartReducer.totalProducts);
  console.log(totalProducts);

  useEffect(() => {
    dispatch(totalProductsCount());
  }, [totalProducts, dispatch]);

  return (
    <div className={cl.menu}>
      <Dropdown></Dropdown>
      <Link to="/cart">
        <div className={cl.cart_icon}>
          <div className={cl.cart_amount}>{totalProducts}</div>
          <img src={cartIcon} alt="cart" />
        </div>
      </Link>
    </div>
  );
}
