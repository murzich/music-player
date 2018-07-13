import React from 'react';
import PropTypes from 'prop-types';

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
      <InputText
        name="search"
        label="Search songs on Deezer"
        type="search"
        value={value}
        onChange={onChange}
      >
        {isLoading && (<div className={style.SearchBarHelper}>Loading...</div>)}
      </InputText>

    </header>
  );
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
