import { createSlice } from '@reduxjs/toolkit';



type CartItem = {
        id: number;
        title: string;
        imageUrl: string;
        price: number;
        types: number;
        sizes: number;
        count: number;
}

interface CartState {
    items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

const countPriceItemsTotal = (state:CartState) => {
  state.totalPrice = state.items?.reduce(
    (totalPrice, item) => totalPrice + item.price * item.count,
    0,
  );
  state.totalItems = state.items?.reduce((totalItems, item) => totalItems + item.count, 0);
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
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });

      countPriceItemsTotal(state);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalItems = 0;
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    cartIncrement(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          item.count++;
        }

        return item;
      });
      countPriceItemsTotal(state);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    setCart(state, action) {
      state.items = action.payload;
      countPriceItemsTotal(state);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    cartDecrement(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          item.count--;
        }

        return item;
      });
      countPriceItemsTotal(state);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, clearCart, cartIncrement, cartDecrement, setCart } =
  cartSlice.actions;

export default cartSlice.reducer;
