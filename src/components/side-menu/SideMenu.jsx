import React, { Component } from 'react';
import cl from './SideMenu.module.css';
import Dropdown from '../dropdown/Dropdown';
import cartIcon from '../../assets/cart.jpeg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function SideMenu() {
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <div className={cl.menu}>
      <Dropdown></Dropdown>
      <Link to="/cart">
        <div className={cl.cart_icon}>
          <div className={cl.cart_amount}>{cart.length}</div>
          <img src={cartIcon} alt="cart" />
        </div>
      </Link>
    </div>
  );
}
