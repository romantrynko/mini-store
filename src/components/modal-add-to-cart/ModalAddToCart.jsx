import React from 'react';
import cl from './ModalAddToCart.module.css';

export default function ModalAddToCart() {
  return (
    <div className={cl.modal_container}>
      <div className={cl.modal}>
        <h1>Product added to cart</h1>
      </div>
    </div>
  );
}
