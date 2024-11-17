import { ADD_BOOK } from './actionTypes';

const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: newBook,
  };
};

export { addBook };
