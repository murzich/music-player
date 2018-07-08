import React from 'react';
import PropTypes from 'prop-types';

import InputText from '../common/InputText';
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
      <InputText
        id="search"
        label="Search songs on Deezer"
        type="search"
        value={value}
        onChange={callback}
      >
        {loading && (<div className={style.SearchBarHelper}>Loading...</div>)}
      </InputText>

    </header>
  );
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
