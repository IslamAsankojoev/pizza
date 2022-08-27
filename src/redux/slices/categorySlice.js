import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categoryId: 0,
  },
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = categorySlice.actions;

export default categorySlice.reducer;
