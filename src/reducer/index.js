import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_CURRENCY
} from '../action-types/index';
import { combineReducers } from 'redux';

const defaultStore = {
  products: [],
  currency: 'USD'
};

const currencyReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY: {
      return {
        ...state,
        currency: action.payload.currency
      };
    }
    default:
      return state;
  }
};

const cartStore = {
  cart: []
};

const cartReducer = (state = cartStore, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload.product]
      };
    
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter(item => item.id !== action.payload)]
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({ currencyReducer, cartReducer });
