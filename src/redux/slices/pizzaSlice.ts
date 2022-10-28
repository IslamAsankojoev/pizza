import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

// @ts-ignore
export const fetchPizza:any = createAsyncThunk(
  'pizza/fetchPizza',
  // @ts-ignore
  async ({ categoryId, sortBy, searchPizza }) => {
    const { data } = await axios.get(
      `https://6301d3a89a1035c7f80798e1.mockapi.io/items` +
        `${categoryId > 0 ? `?category=${categoryId}` : ''}` +
        `${categoryId ? `&sortBy=${sortBy.slug}` : `?sortBy=${sortBy.slug}`}` +
        `${searchPizza ? `&search=${searchPizza}` : ''}`,
    );
    return data;
  },
);

type PizzaItem = {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
    types: number;
    sizes: number;
}
interface PizzaState{
    items: PizzaItem[],
    status: string
}
const initialState: PizzaState = {
    items: [],
    status: 'loading',
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
      setPizzas(state, action:PayloadAction<PizzaItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: {
      [fetchPizza.fulfilled]: (state, action:PayloadAction<PizzaItem[]>) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizza.pending]: (state) => {
      state.items = [];
      state.status = 'loading';
    },
    [fetchPizza.rejected]: (state) => {
      state.items = [];
      state.status = 'error';
    },
  },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
