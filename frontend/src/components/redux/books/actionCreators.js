import { ADD_BOOK, DELETE_BOOK } from './actionTypes';

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

export { addBook, deleteBook };
