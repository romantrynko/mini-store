import React, { Component } from 'react';
import cl from './ProductCard.module.css';
import image from '../../assets/picture.jpeg';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    // console.log(product);

    return (
      <div className={cl.product_card}>
        <div className={cl.product_card_body}>
          <div className={cl.product_card_image}>
            <img src={product.gallery[0]} alt="ok" />
          </div>
          <div className={cl.product_card_info}>
            <div className={cl.product_card_info_name}>
              {product.name} {product.brand}
            </div>
            <div className={cl.product_card_info_price}>
              {product.prices[0].currency.symbol} {product.prices[0].amount}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
