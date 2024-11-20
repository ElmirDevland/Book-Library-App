import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    resetFilters: (state) => initialState,
  },
});

export const selectTitleFilter = (state) => state.filter.title;
export const { setTitleFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
