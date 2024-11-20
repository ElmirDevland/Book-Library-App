import { useSelector, useDispatch } from 'react-redux';

import {
  setTitleFilter,
  setAuthorFilter,
  setFavFilters,
  resetFilters,
  selectTitleFilter,
  selectAuthorFilter,
  selectFavFilter,
} from '../redux/slices/filterSlice';

import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterTitle = useSelector(selectTitleFilter);
  const filterAuthor = useSelector(selectAuthorFilter);
  const filterFav = useSelector(selectFavFilter);

  const handleChangeFilter = (e, filterAction) => {
    dispatch(filterAction(e.target.value));
  };
  const handleChangeFavFilter = () => {
    dispatch(setFavFilters());
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={(e) => handleChangeFilter(e, setTitleFilter)}
            type="text"
            placeholder="Filter by title..."
            value={filterTitle}
          />
        </div>
        <div className="filter-group">
          <input
            onChange={(e) => handleChangeFilter(e, setAuthorFilter)}
            type="text"
            placeholder="Filter by author..."
            value={filterAuthor}
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              checked={filterFav}
              type="checkbox"
              onChange={handleChangeFavFilter}
            />
            Select Fav books
          </label>
        </div>
        <button onClick={handleResetFilters}>Reset filters</button>
      </div>
    </div>
  );
};

export default Filter;
