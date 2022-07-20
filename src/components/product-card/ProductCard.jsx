import React from 'react';
import cl from './ProductCard.module.css';

export default function ProductCard(props) {
  const { product, onProductClick, index } = props;

  return (
    <div className={cl.product_card} onClick={() => onProductClick(index)}>
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
