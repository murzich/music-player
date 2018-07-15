import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DebounceInput } from 'react-debounce-input';

import InputText from '../../common/InputText';
import style from './SearchBar.css';
import SearchListContainer from '../../../containers/SearchListContainer';

const propTypes = {
  onChange: PropTypes.func.isRequired,
};

function SearchBar({ onChange }) {
  return (
    <header className={style.SearchBarWrapper}>
      <div className={style.SearchBar} >
        <label htmlFor="search" className={style.SearchBarIcon}>
          <FontAwesomeIcon icon={faSearch} />
        </label>
        <DebounceInput
          id="search"
          type="search"
          element={InputText}
          onChange={onChange}
          minLength={3}
          debounceTimeout={500}
          className={style.SearchBarInput}
          placeholder="Search tracks on Deezer.com"
        >
          <div className={style.SearchBarResults}>
            <SearchListContainer />
          </div>
        </DebounceInput>
      </div>
    </header>
  );
}

SearchBar.propTypes = propTypes;

export default SearchBar;
