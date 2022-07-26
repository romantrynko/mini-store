import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_CURRENCY,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT
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
    case ADD_TO_CART: {
      if (state.cart.length) {
        const duplicateProduct = state.cart.find(
          (product) => product.id === action.payload.product.id
        );
        console.log(duplicateProduct);

        if (!duplicateProduct) {
          return {
            ...state,
            cart: [...state.cart, action.payload.product]
          };
        }

        if (duplicateProduct && duplicateProduct.amount > 0) {
          duplicateProduct.amount = duplicateProduct.amount + 1;
          return {
            ...state,
            cart: [...state.cart]
          };
        }

        return {
          ...state,
          cart: [...state.cart, action.payload.product]
        };
      }

      return {
        ...state,
        cart: [...state.cart, action.payload.product]
      };
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload)]
      };

    case INCREASE_AMOUNT:
      const incProductAmount = state.cart.find(
        (product) => product.id === action.payload.id
      );
      incProductAmount.amount = incProductAmount.amount + 1;

      return {
        ...state,
        cart: [...state.cart]
      };

    case DECREASE_AMOUNT:
      const decProductAmount = state.cart.find(
        (product) => product.id === action.payload.id
      );

      decProductAmount.amount = decProductAmount.amount - 1;
      if (decProductAmount.amount <= 0) {
        decProductAmount.amount = 1;
      }

      return {
        ...state,
        cart: [...state.cart]
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({ currencyReducer, cartReducer });
