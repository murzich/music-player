import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTrack } from '../actions/playlist';

import SongsList from '../components/player/SongsList';

function SongsListContainer({
  tracks,
  addNewTrack,
}) {
  const addToPlaylist = song => (e) => {
    e.preventDefault();
    addNewTrack(song);
  };

  return (
    <SongsList
      songs={tracks}
      addSong={addToPlaylist}
    />
  );
}

const mapStateToProps = (state) => {
  const { tracks } = state.player.search;
  return {
    tracks,
  };
};

SongsListContainer.propTypes = {
  addNewTrack: PropTypes.func.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({
    album: PropTypes.shape({
      cover_medium: PropTypes.string,
    }),
  })).isRequired,
};

export default connect(mapStateToProps, {
  addNewTrack: addTrack,
})(SongsListContainer);
