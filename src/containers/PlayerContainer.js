import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilePlayer from 'react-player/lib/players/FilePlayer';
import { formatTime } from '../utils';
import { Player, SongInfo } from '../components/player';
import { gotoTrack, setDuration, setPlayStatus, updatePlayedTime } from '../actions';

import coverArt from '../assets/album.svg';
import { PlayerTime } from '../components/layout/Player.css';
import { getCurrentSong } from '../reducers';
import SeekbarContainer from './SeekbarContainer';
import ControlsBarContainer from './ControlsBarContainer';

const propTypes = {
  playedSeconds: PropTypes.number.isRequired,
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
  onProgress = ({ playedSeconds }) => {
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
      playedSeconds,
    } = this.props;
    return (
      <Player>
        <FilePlayer
          style={{ display: 'none' }}
          ref={this.ref}
          url={currentSong.preview}
          playing={isPlaying}
          onProgress={this.onProgress}
          onDuration={setDuration}
          onEnded={this.onSongEnded}
          onPlay={() => setPlayStatus(true)}
        />
        <SongInfo
          cover={currentSong.album.cover_medium}
          title={currentSong.title}
          artist={currentSong.artist.name}
        />
        {/* TODO: Extract to separate component. Use memorized selector */}
        <div className={PlayerTime}>
          {formatTime(playedSeconds)}
        </div>
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
    playedSeconds,
    seeking,
  } = state.player;
  return {
    isPlaying,
    playedSeconds,
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
