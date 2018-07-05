import React from 'react';

import './SearchBar.css';

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

export default SearchBar;
