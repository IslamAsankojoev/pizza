import { createSlice } from '@reduxjs/toolkit';

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    isLoading: true,
    items: [],
  },
  reducers: {
    setPizzas(state, action) {
      return {
        isLoading: true,
        items: action.payload,
      };
    },
    addItem(state, action) {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    removeItem(state, action) {
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload),
      };
    },
  },
});

export const { setPizzas, addItem, removeItem } = pizzaSlice.actions;

export default pizzaSlice.reducer;
