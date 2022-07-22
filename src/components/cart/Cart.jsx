import React from 'react';
import { useSelector } from 'react-redux';

export function Cart() {
  const cart = useSelector(state => state.cartReducer.cart);
  console.log(cart);
  return <div>Cart</div>;
}
