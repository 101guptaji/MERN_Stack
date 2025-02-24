import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Slices/cartSlice';
import productsReducer from '../Slices/productsSlice'

export const myStore = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  },

});

export default myStore;