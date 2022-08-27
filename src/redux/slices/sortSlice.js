import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    sortBy: { sortName: 'популярности', slug: 'rating' },
  },
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = sortSlice.actions;
export default sortSlice.reducer;
