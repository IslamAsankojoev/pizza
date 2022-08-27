import { configureStore } from '@reduxjs/toolkit';
import category from './slices/categorySlice';
import sort from './slices/sortSlice';
import pizzas from './slices/pizzaSlice.js';
import cart from './slices/cartSlice.js';

const store = configureStore({
  reducer: {
    category,
    sort,
    pizzas,
    cart,
  },
});

export default store;
