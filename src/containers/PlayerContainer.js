import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilePlayer from 'react-player/lib/players/FilePlayer';
import { Player, SongInfo } from '../components/player';
import { gotoTrack, setDuration, setPlayStatus, updatePlayedTime } from '../actions';

import coverArt from '../assets/album.svg';
import { getCurrentSong } from '../reducers';
import SeekbarContainer from './SeekbarContainer';
import ControlsBarContainer from './ControlsBarContainer';

const propTypes = {
  updatePlayedTime: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setPlayStatus: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  setDuration: PropTypes.func.isRequired,
  seeking: PropTypes.bool.isRequired,
  currentSong: PropTypes.shape({
    title: PropTypes.string,
    preview: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
    album: PropTypes.shape({
      cover_medium: PropTypes.string,
    }),
  }),
};
const defaultProps = {
  currentSong: {
    title: 'Title',
    preview: '',
    artist: {
      name: 'Artist name',
    },
    album: {
      cover_medium: coverArt,
    },
  },
};

class PlayerContainer extends Component {
  onChangeProgress = ({ playedSeconds }) => {
    if (!this.props.seeking && this.props.isPlaying) {
      this.props.updatePlayedTime(playedSeconds);
    }
  };

  onSongEnded = () => {
    // TODO: Add conditions to play next if loop will be implemented.
    this.props.onNext();
  };

  ref = (player) => {
    this.player = player;
  };

  render() {
    const {
      currentSong,
      // eslint-disable-next-line no-shadow
      setPlayStatus,
      isPlaying,
      // eslint-disable-next-line no-shadow
      setDuration,
    } = this.props;
    return (
      <Player>
        <FilePlayer
          style={{ display: 'none' }}
          ref={this.ref}
          url={currentSong.preview}
          playing={isPlaying}
          onProgress={this.onChangeProgress}
          onDuration={setDuration}
          onEnded={this.onSongEnded}
          onPlay={() => setPlayStatus(true)}
        />
        <SongInfo
          cover={currentSong.album.cover_medium}
          title={currentSong.title}
          artist={currentSong.artist.name}
        />
        <SeekbarContainer playerRef={this.player} />
        <ControlsBarContainer playerRef={this.player} />
      </Player>
    );
  }
}

PlayerContainer.propTypes = propTypes;
PlayerContainer.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  const {
    isPlaying,
    seeking,
  } = state.player;
  return {
    isPlaying,
    seeking,
    currentSong: getCurrentSong(state.player),
  };
};

const mapDispatchToProps = {
  setPlayStatus,
  setDuration,
  updatePlayedTime,
  onNext: gotoTrack.next,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
