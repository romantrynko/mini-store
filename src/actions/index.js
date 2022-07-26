import {
  ADD_TO_CART,
  CHANGE_CURRENCY,
  DECREASE_AMOUNT,
  INCREASE_AMOUNT,
  REMOVE_FROM_CART
} from '../action-types/index';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: { product }
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  };
};

export const changeCurrency = (currency) => {
  return {
    type: CHANGE_CURRENCY,
    payload: { currency }
  };
};

export const increase = (id) => {
  return {
    type: INCREASE_AMOUNT,
    payload: { id }
  };
};

export const decrease = (id) => {
  return {
    type: DECREASE_AMOUNT,
    payload: { id }
  };
};
