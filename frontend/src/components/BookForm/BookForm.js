import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImSpinner8 } from 'react-icons/im';

import createBookWithID from '../utils/createBookWithID';
import {
  addBook,
  fetchBook,
  selectIsLoadingViaAPI,
} from '../redux/slices/booksSlice';
import { setError } from '../redux/slices/errorSlice';
import booksData from '../../data/books.json';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author }, 'manual')));
      setTitle('');
      setAuthor('');
    } else {
      dispatch(setError('You must fill title and author'));
    }
  };

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    dispatch(addBook(createBookWithID(randomBook, 'random')));
  };

  const handleAddRandomBookViaAPI = () => {
    dispatch(fetchBook('http://localhost:4000/random-book'));
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random Book
        </button>
        <button
          disabled={isLoadingViaAPI}
          type="button"
          onClick={handleAddRandomBookViaAPI}
        >
          {isLoadingViaAPI ? (
            <>
              <span>Book is Loading...</span>
              <ImSpinner8 className="spinner" />
            </>
          ) : (
            'Add Random via API'
          )}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
