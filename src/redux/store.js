import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import basketReducer from './basketSlice';


export const store = configureStore({
  reducer: {
    products: productsSlice,
    basket: basketReducer,
  },
});
