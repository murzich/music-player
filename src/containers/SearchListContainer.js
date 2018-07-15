import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTrack } from '../actions/playlist';

import SearchList from '../components/player/SearchList';

function SearchListContainer({
  tracks,
  addNewTrack,
  searchQuery,
  isLoading,
}) {
  const addToPlaylist = song => (e) => {
    e.preventDefault();
    addNewTrack(song);
  };

  const checkResults = searchQuery && !tracks.length;

  return (
    <Fragment>
      {isLoading && <span>Loading...</span>}
      {checkResults ?
        <span style={{ marginTop: '1rem' }}>No results! Try to reduce your query...</span> :
        <SearchList
          songs={tracks}
          addSong={addToPlaylist}
        />}
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  const { tracks, searchQuery, isLoading } = state.player.search;
  return {
    tracks,
    searchQuery,
    isLoading,
  };
};

SearchListContainer.propTypes = {
  addNewTrack: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({
    cover: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, {
  addNewTrack: addTrack,
})(SearchListContainer);
