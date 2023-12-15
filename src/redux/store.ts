import { configureStore } from '@reduxjs/toolkit';
import category from './slices/category.slice';
import sort from './slices/sort.slice';
import pizza from './slices/pizza.slice';
import cart from './slices/cart.slice';

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