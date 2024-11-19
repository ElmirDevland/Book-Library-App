import { ADD_BOOK, DELETE_BOOK, TOGGLE_FAVORITE } from './actionTypes';

const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: newBook,
  };
};

const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
};

const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: id,
  };
};

export { addBook, deleteBook, toggleFavorite };
