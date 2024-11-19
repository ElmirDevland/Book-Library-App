import { ADD_BOOK, TOGGLE_FAVORITE, DELETE_BOOK } from './actionTypes';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return state.filter(({ id }) => id !== action.payload);
    case TOGGLE_FAVORITE:
      return state.map((book) =>
        book.id === action.payload ? { ...book, isFav: !book.isFav } : book
      );
    default:
      return state;
  }
};

export default booksReducer;
