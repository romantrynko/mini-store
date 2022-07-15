import { legacy_createStore as createStore } from 'redux';
import { reducer } from '../reducer/index';

export const store = createStore(reducer);
