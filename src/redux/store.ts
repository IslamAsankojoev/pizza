import { configureStore } from '@reduxjs/toolkit';
import category from './slices/categorySlice';
import sort from './slices/sortSlice';
import pizza from './slices/pizzaSlice';
import cart from './slices/cartSlice';

const store = configureStore({
  reducer: {
    category,
    sort,
    pizza,
    cart,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;