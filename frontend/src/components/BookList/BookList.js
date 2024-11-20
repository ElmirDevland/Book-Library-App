import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

import { toggleFavorite, deleteBook } from '../redux/books/actionCreators';
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectFavFilter,
} from '../redux/slices/filterSlice';

import './BookList.css';

const BookList = () => {
  const dispatch = useDispatch();

  const books = useSelector(({ books }) => books);

  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favFilter = useSelector(selectFavFilter);

  const filteredBooks = books.filter(({ title, author, isFav }) => {
    const lowerTitle = title.toLowerCase();
    const lowerAuthor = author.toLowerCase();

    const lowerTitleFilter = titleFilter.toLowerCase();
    const lowerAuthorFilter = authorFilter.toLowerCase();

    const matchesFav = favFilter ? isFav : true;

    return (
      lowerTitle.includes(lowerTitleFilter) &&
      lowerAuthor.includes(lowerAuthorFilter) &&
      matchesFav
    );
  });

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {filteredBooks.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFav ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
