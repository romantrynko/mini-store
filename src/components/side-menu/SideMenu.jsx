import React, { Component } from 'react';
import cl from './SideMenu.module.css';
import Dropdown from '../dropdown/Dropdown';
import cart from '../../assets/cart.jpeg';
import { Link } from 'react-router-dom';

export default class SideMenu extends Component {
  render() {
    return (
      <div className={cl.menu}>
        <Dropdown></Dropdown>
        <Link to="/cart">
          <div className={cl.cart_icon}>
            <img src={cart} alt="cart" />
          </div>
        </Link>
      </div>
    );
  }
}
