import axios from 'axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createBookWithID from '../../utils/createBookWithID';
import { setError } from '../slices/errorSlice';

const initialState = [];

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      throw error;
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
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
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.author && action.payload.title) {
        state.push(createBookWithID(action.payload, 'API'));
      }
    });
  },
});

export const selectBooks = (state) => state.books;
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export default booksSlice.reducer;
