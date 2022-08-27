import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
  totalItems: 0,
};

const countPriceItemsTotal = (state) => {
  state.totalPrice = state.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.count,
    0,
  );
  state.totalItems = state.items.reduce((totalItems, item) => totalItems + item.count, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const findedItem = state.items.find((item) => item.id === action.payload.id);
      if (findedItem) {
        findedItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      countPriceItemsTotal(state);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      countPriceItemsTotal(state);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalItems = 0;
    },
    cartIncrement(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          item.count++;
          countPriceItemsTotal(state);
        }
        return item;
      });
    },
    cartDecrement(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          item.count--;
          countPriceItemsTotal(state);
        }
        return item;
      });
    },
  },
});

export const { addToCart, removeFromCart, clearCart, cartIncrement, cartDecrement } =
  cartSlice.actions;

export default cartSlice.reducer;
