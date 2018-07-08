import React from 'react';
import PropTypes from 'prop-types';

import style from './SearchBar.css';

const propTypes = {
  value: PropTypes.string,
  callback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
const defaultProps = {
  value: '',
  loading: false,
};

function SearchBar({ value, callback, loading }) {
  return (
    <header className={style.SearchBar}>
      <label className={style.SearchBarLabel} htmlFor="search">
        Search songs on Deezer
        <input
          id="search"
          type="search"
          value={value}
          onChange={callback}
          className={style.SearchBarInput}
        />
      </label>
      {loading && (<div className={style.SearchBarHelper}>Loading...</div>)}
    </header>
  );
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
