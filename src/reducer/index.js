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
    // case ADD_TO_CART: {
    //   const product = action.payload;
    //   const { products } = state;
    //   return { ...state, products: [...state, product] };
    // }

    // case REMOVE_FROM_CART: {
    //   const { id } = action.payload;
    //   const { products } = state;

    //   const index = products.findIndex((item) => item.id === id);
    //   const arrayCopy = [...products];
    //   arrayCopy.splice(index, 1);

    //   if (index > -1) {
    //     return {
    //       ...state,
    //       products: arrayCopy
    //     };
    //   }
    //   return state;
    // }

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


export const rootReducer = combineReducers({currencyReducer})