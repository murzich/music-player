import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchSongs, setSearchQuery } from '../actions/searchTracks';
import SearchBar from '../components/player/SearchBar';

function SearchBarContainer({ dispatch }) {
  const onInputChange = (e) => {
    const search = e.target.value;
    dispatch(setSearchQuery(search));
    if (search) {
      fetchSongs(search)(dispatch);
    }
  };
  return (
    <SearchBar
      onChange={onInputChange}
    />
  );
}

SearchBarContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SearchBarContainer);
