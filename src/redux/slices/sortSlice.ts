import { createSlice } from '@reduxjs/toolkit';

type sortItem = {
  sortName: string;
  slug: string;
}

interface sortState {
  sortBy: sortItem
}
const initialState: sortState = {
  sortBy: { sortName: 'популярности', slug: 'rating' },
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const actions = sortSlice.actions;
export default sortSlice.reducer;
