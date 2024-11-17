import { ADD_BOOK } from './actionTypes';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default booksReducer;
