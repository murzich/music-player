/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import InputText from '../../common/InputText';
import style from './SearchBar.css';

const propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
const defaultProps = {
  value: '',
  isLoading: false,
};

function SearchBar({ value, onChange, isLoading }) {
  return (
    <header className={style.SearchBar}>
        <label htmlFor="search" className={style.SearchBarIcon}>
          <FontAwesomeIcon icon={faSearch} />
        </label>
        <input type="search" id="search" className={style.SearchBarInput} onChange={onChange} />
        <div className={style.SearchBarResults}>
          TEST
        </div>
    </header>
  );
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
