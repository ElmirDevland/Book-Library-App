import { useSelector } from 'react-redux';
import './BookList.css';

const BookList = () => {
  const books = useSelector(({ books }) => books);

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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
