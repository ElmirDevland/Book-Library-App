import { useSelector, useDispatch } from 'react-redux';

import './Filter.css';
import {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  selectTitleFilter,
  selectAuthorFilter,
} from '../redux/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterTitle = useSelector(selectTitleFilter);
  const filterAuthor = useSelector(selectAuthorFilter);

  const handleChangeFilter = (e, filterAction) => {
    dispatch(filterAction(e.target.value));
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
        <button onClick={handleResetFilters}>Reset filters</button>
      </div>
    </div>
  );
};

export default Filter;
