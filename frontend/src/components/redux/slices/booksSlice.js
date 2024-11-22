import axios from 'axios';

import { createSlice } from '@reduxjs/toolkit';
import createBookWithID from '../../utils/createBookWithID';

const initialState = [];

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    deleteBook: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
    toggleFavorite: (state, action) =>
      state.map((book) =>
        book.id === action.payload ? { ...book, isFav: !book.isFav } : book
      ),
  },
});

export const selectBooks = (state) => state.books;
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;
export const thunkFunction = async (dispatch, getState) => {
  const res = await axios.get('http://localhost:4000/random-book');
  if (res?.data?.author && res?.data?.title) {
    dispatch(addBook(createBookWithID(res.data, 'API')));
  }
};
export default booksSlice.reducer;
