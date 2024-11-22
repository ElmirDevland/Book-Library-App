import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

import {
  toggleFavorite,
  deleteBook,
  selectBooks,
} from '../redux/slices/booksSlice';
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectFavFilter,
} from '../redux/slices/filterSlice';

import './BookList.css';

const BookList = () => {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);

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

  const highlightMatch = (text, filter) => {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, 'gi');

    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        );
      }
      return substring;
    });
  };

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
                {++i}.{highlightMatch(book.title, titleFilter)} by
                <strong> {highlightMatch(book.author, authorFilter)}</strong> (
                {book.source})
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
