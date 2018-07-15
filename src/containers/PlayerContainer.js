/* eslint-disable no-shadow */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilePlayer from 'react-player/lib/players/FilePlayer';

import SeekbarContainer from './SeekbarContainer';
import ControlsBarContainer from './ControlsBarContainer';
import Player from '../components/layout/Player';
import SongInfo from '../components/player/SongInfo';
import coverArt from '../assets/album.svg';
import { gotoTrack, setDuration, setPlayStatus, updatePlayedTime } from '../actions/playerControls';
import { getCurrentSong } from '../selectors';
import SearchBarContainer from './SearchBarContainer';

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
    artistName: PropTypes.string,
    cover: PropTypes.string,
  }),
};
const defaultProps = {
  currentSong: {
    title: 'Title',
    preview: '',
    artistName: 'Artist name',
    cover: coverArt,
  },
};

class PlayerContainer extends Component {
  onChangeProgress = ({ playedSeconds }) => {
    if (!this.props.seeking && this.props.isPlaying) {
      this.props.updatePlayedTime(playedSeconds);
    }
  };

  onSongEnded = () => {
    this.props.onNext();
  };

  ref = (player) => {
    this.player = player;
  };

  render() {
    const {
      currentSong,
      setPlayStatus,
      isPlaying,
      setDuration,
    } = this.props;
    return (
      <Fragment>
        <Player>
          <SearchBarContainer />
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
            cover={currentSong.cover}
            title={currentSong.title}
            artist={currentSong.artistName}
          />
          <div>
            <SeekbarContainer playerRef={this.player} />
            <ControlsBarContainer playerRef={this.player} />
          </div>
        </Player>
      </Fragment>
    );
  }
}

PlayerContainer.propTypes = propTypes;
PlayerContainer.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  const {
    isPlaying,
    seeking,
  } = state.player.status;
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
