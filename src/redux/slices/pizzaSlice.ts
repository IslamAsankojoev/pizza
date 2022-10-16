import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizza:any = createAsyncThunk<any, {categoryId:number; sortBy:any; searchPizza:string}>(
  'pizza/fetchPizza',
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
    status: "loading" | "success" | "error"
}
const initialState: PizzaState = {
    items: [],
status: 'loading',
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizza.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizza.pending]: (state, action) => {
      state.items = [];
      state.status = 'loading';
    },
    [fetchPizza.rejected]: (state, action) => {
      state.items = [];
      state.status = 'error';
    },
  },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
