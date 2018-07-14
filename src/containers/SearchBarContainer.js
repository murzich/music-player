/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchSongs, setSearchQuery } from '../actions/searchTracks';
import SearchBar from '../components/player/SearchBar';

function SearchBarContainer({
  isLoading,
  searchQuery,
  setSearchQuery,
  fetchSongs,
}) {
  const onInputChange = (e) => {
    const search = e.target.value;
    setSearchQuery(search);
    if (search) {
      fetchSongs(search);
    }
  };
  return (
    <SearchBar
      value={searchQuery}
      onChange={onInputChange}
      isLoading={isLoading}
    />
  );
}

const mapStateToProps = (state) => {
  const {
    isLoading,
    error,
    searchQuery,
  } = state.player;
  return {
    isLoading,
    error,
    searchQuery,
  };
};

SearchBarContainer.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  fetchSongs: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, {
  fetchSongs,
  setSearchQuery,
})(SearchBarContainer);
