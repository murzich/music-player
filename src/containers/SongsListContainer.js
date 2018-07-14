import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTrack } from '../actions/playlist';

import SongsList from '../components/player/SongsList';

function SongsListContainer({
  songsList,
  currentTrack,
  isPlaying,
  addNewTrack,
}) {
  const addToPlaylist = song => (e) => {
    e.preventDefault();
    addNewTrack(song);
  };

  return (
    <SongsList
      songs={songsList}
      addSong={addToPlaylist}
      currentTrack={currentTrack}
      isPlaying={isPlaying}
    />
  );
}

const mapStateToProps = (state) => {
  const { songsList, isPlaying, currentTrack } = state.player;
  return {
    songsList,
    isPlaying,
    currentTrack,
  };
};

SongsListContainer.propTypes = {
  currentTrack: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  addNewTrack: PropTypes.func.isRequired,
  songsList: PropTypes.arrayOf(PropTypes.shape({
    album: PropTypes.shape({
      cover_medium: PropTypes.string,
    }),
  })).isRequired,
};

export default connect(mapStateToProps, {
  addNewTrack: addTrack,
})(SongsListContainer);
