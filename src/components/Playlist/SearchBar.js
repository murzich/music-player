import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

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
    <header className="SearchBar">
      <label className="SearchBar-label">
        Search songs on Deezer
        <input
          type="search"
          value={value}
          onChange={callback}
          className="SearchBar-input"
        />
      </label>
      {loading && (<div className="SearchBar-helper">Loading...</div>)}
    </header>
  );
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
