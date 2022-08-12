import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import basketReducer from './basketSlice';
import userSlice from './userSlice';


export const store = configureStore({
  reducer: {
    products: productsSlice,
    basket: basketReducer,
    user: userSlice,
  },
});
