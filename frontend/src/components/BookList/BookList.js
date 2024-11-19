import { useSelector, useDispatch } from 'react-redux';

import './BookList.css';
import { deleteBook } from '../redux/books/actionCreators';

const BookList = () => {
  const books = useSelector(({ books }) => books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map(({ title, author, id }, i) => (
            <li key={id}>
              <div className="book-info">
                {++i}. {title} by <strong>{author}</strong>
              </div>
              <button className="book-actions" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
