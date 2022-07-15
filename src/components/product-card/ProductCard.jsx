import React, { Component } from 'react';
import cl from './ProductCard.module.css';
import image from '../../assets/picture.jpeg';

export default class ProductCard extends Component {
  render() {
    return (
      <div className={cl.product_card}>
        <div className={cl.product_card_body}>
          <div className={cl.product_card_image}>
            <img src={image} alt="ok" />
          </div>
          <div className={cl.product_card_info}>
            <div className={cl.product_card_info_name}>
              Apollo Running Short
            </div>
            <div className={cl.product_card_info_price}>50$</div>
          </div>
        </div>
      </div>
    );
  }
}
