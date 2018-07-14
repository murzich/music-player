/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { gotoTrack } from '../actions/playerControls';
import { removeTrack } from '../actions/playlist';

import TrackList from '../components/player/TrackList';

const propTypes = {
  currentTrack: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  removeTrack: PropTypes.func.isRequired,
  trackList: PropTypes.arrayOf(PropTypes.shape({
    album: PropTypes.shape({
      cover_medium: PropTypes.string,
    }),
  })).isRequired,
};

function PlaylistContainer({
  trackList,
  currentTrack,
  isPlaying,
  setCurrentTrack,
  removeTrack,
}) {
  const setCurrentFromPlaylist = i => (e) => {
    e.preventDefault();
    setCurrentTrack(i);
  };

  const handleRemoveTrack = i => () => removeTrack(i);
  return (
    <TrackList
      songs={trackList}
      setTrack={setCurrentFromPlaylist}
      currentTrack={currentTrack}
      isPlaying={isPlaying}
      removeTrack={handleRemoveTrack}
    />
  );
}

PlaylistContainer.propTypes = propTypes;

const mapStateToProps = (state) => {
  const { isPlaying, currentTrack } = state.player.status;
  return {
    trackList: state.player.playlist,
    isPlaying,
    currentTrack,
  };
};

export default connect(mapStateToProps, {
  setCurrentTrack: gotoTrack.id,
  removeTrack,
})(PlaylistContainer);
