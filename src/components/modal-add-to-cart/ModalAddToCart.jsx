import React from 'react';
import cl from './ModalAddToCart.module.css';

export default function ModalAddToCart({ message }) {
  return (
    <div className={cl.modal_container}>
      <div className={cl.modal}>
        <h1>{message}</h1>
      </div>
    </div>
  );
}
