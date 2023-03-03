import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/filter/filter-selectors';
import { setFilter } from '../../redux/filter/filter-slice';

import s from './ContactFilter.module.css';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={s.filter}>
      <label>
        Find contacts by name
        <input
          name="filter"
          type="text"
          value={filter}
          onChange={handleFilter}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default ContactFilter;
