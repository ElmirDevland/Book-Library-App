import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
  favToggle: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    setFavFilters: (state) => {
      state.favToggle = !state.favToggle;
    },
    resetFilters: () => initialState,
  },
});

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectFavFilter = (state) => state.filter.favToggle;
export const { setTitleFilter, setFavFilters, setAuthorFilter, resetFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
