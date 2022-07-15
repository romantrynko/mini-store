import { ADD_TO_CART, REMOVE_FROM_CART } from '../action-types/index';

const defaultStore = {
  products: []
};

export const reducer = (state = defaultStore, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const { products } = state;
      return { products: [...state, product] };
    }

    case REMOVE_FROM_CART: {
      const { id } = action.payload;
      const { products } = state;

      const index = products.findIndex((item) => item.id === id);
      const arrayCopy = [...products];
      arrayCopy.splice(index, 1);

      if (index > -1) {
        return {
          products: arrayCopy
        };
      }
      return state;
    }
    default:
      break;
  }
};
