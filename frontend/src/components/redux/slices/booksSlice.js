import { createSlice } from '@reduxjs/toolkit';

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
export default booksSlice.reducer;
