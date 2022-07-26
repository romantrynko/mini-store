import { ADD_TO_CART, CHANGE_CURRENCY, REMOVE_FROM_CART } from '../action-types/index';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {product}
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
    payload: {currency}
 }
}