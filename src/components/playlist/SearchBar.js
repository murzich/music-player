import React from 'react';

import './SearchBar.css';

function SearchBar({ value, callback, loading }) {
  return (
    <React.Fragment>
    <label className="SearchBar-label">
      Search songs on Deezer
      <input
        type="search"
        value={value}
        onChange={callback}
        className="SearchBar"
      />
    </label>
      {loading && (<div className="SearchBar-helper">Loading...</div>)}
    </React.Fragment>
);
}

export default SearchBar;
