import { ADD_BOOK, DELETE_BOOK } from './actionTypes';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return state.filter(({ id }) => id !== action.payload);

    default:
      return state;
  }
};

export default booksReducer;
