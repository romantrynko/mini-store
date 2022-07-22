import React from 'react';
import { useSelector } from 'react-redux';
import cl from './ProductCard.module.css';

export default function ProductCard({ product, onProductClick }) {

  const selectedCurrency = useSelector((state) => state.currencyReducer.currency);
  
  const price = product.prices.find(price => price.currency.label === selectedCurrency);
  
  return (
    <div className={cl.product_card} onClick={() => onProductClick(product.id)}>
      <div className={cl.product_card_body}>
        <div className={cl.product_card_image}>
          <img src={product.gallery[0]} alt="ok" />
        </div>
        <div className={cl.product_card_info}>
          <div className={cl.product_card_info_name}>
            {product.name} {product.brand}
          </div>
          <div className={cl.product_card_info_price}>
            {price.currency.symbol} {price.amount}
          </div>
        </div>
      </div>
    </div>
  );
}
