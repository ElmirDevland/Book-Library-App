import { useSelector, useDispatch } from 'react-redux';

import './Filter.css';
import {
  setTitleFilter,
  resetFilters,
  selectTitleFilter,
} from '../redux/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectTitleFilter);

  const handleChangeFilterTitle = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={handleChangeFilterTitle}
            type="text"
            placeholder="Filter by title..."
            value={filter}
          />
        </div>
        <button onClick={handleResetFilters}>Reset filters</button>
      </div>
    </div>
  );
};

export default Filter;
