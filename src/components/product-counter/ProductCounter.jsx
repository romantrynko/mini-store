import React from 'react';
import cl from './ProductCounter.module.css';
import { useDispatch } from 'react-redux';
import { increase, totalProductsCount } from '../../actions';
import { decrease } from '../../actions/index';

export default function ProductCounter({ product }) {
  const dispatch = useDispatch();

  const increaseCount = (id) => {
    dispatch(increase(id));
    dispatch(totalProductsCount());
  };

  const decreaseCount = (id) => {
    dispatch(decrease(id));
    dispatch(totalProductsCount());
  };

  return (
    <div className={cl.counter_container}>
      <button onClick={() => increaseCount(product.id)}>+</button>
      <div>{product.amount}</div>
      <button onClick={() => decreaseCount(product.id)}>-</button>
    </div>
  );
}
