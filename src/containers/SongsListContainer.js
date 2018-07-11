import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { gotoTrack } from '../actions';
import { SongsList } from '../components/Playlist';

function SongsListContainer({
  songsList,
  currentTrack,
  isPlaying,
  setCurrentTrack,
}) {
  const setCurrentFromPlaylist = i => (e) => {
    e.preventDefault();
    setCurrentTrack(i);
  };

  return (
    <SongsList
      songs={songsList}
      setSong={setCurrentFromPlaylist}
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
  setCurrentTrack: PropTypes.func.isRequired,
  songsList: PropTypes.arrayOf(PropTypes.shape({
    album: PropTypes.shape({
      cover_medium: PropTypes.string,
    }),
  })).isRequired,
};

export default connect(mapStateToProps, {
  setCurrentTrack: gotoTrack.id,
})(SongsListContainer);
