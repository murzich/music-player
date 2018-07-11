import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilePlayer from 'react-player/lib/players/FilePlayer';
import { formatTime } from '../utils';
import { Player, PlaybackControlsBar, SongInfo, Seekbar } from '../components/Player';
import { gotoTrack, setDuration, setPlayStatus, setSeeking, togglePlay, updatePlayedTime } from '../actions';

import coverArt from '../assets/album.svg';
import { PlayerTime } from '../components/layout/Player.css';
import { getCurrentSong } from '../reducers';

const propTypes = {
  playedSeconds: PropTypes.number.isRequired,
  updatePlayedTime: PropTypes.func.isRequired,
  togglePlay: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setPlayStatus: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  setDuration: PropTypes.func.isRequired,
  seeking: PropTypes.bool.isRequired,
  setSeeking: PropTypes.func.isRequired,
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

const defaultStepSeconds = 5;

class PlayerContainer extends Component {
  onProgress = ({ playedSeconds }) => {
    if (!this.props.seeking && this.props.isPlaying) {
      this.props.updatePlayedTime(playedSeconds);
    }
  };
  onSeekMouseDown = () => {
    this.props.setSeeking(true);
  };
  onSeekChange = (e) => {
    this.props.updatePlayedTime(parseFloat(e.target.value));
  };
  onSeekMouseUp = (e) => {
    this.props.setSeeking(false);
    this.player.seekTo(parseFloat(e.target.value));
  };
  onStep = (step) => {
    let playedSeconds = (this.player.getCurrentTime() + step);
    if (playedSeconds < 1) {
      playedSeconds = 0;
    }
    // TODO: This code do seeking.
    this.player.seekTo(playedSeconds);
    this.props.updatePlayedTime(playedSeconds);
  };
  onStepForward = () => {
    this.onStep(defaultStepSeconds);
  };
  onStepBack = () => {
    this.onStep(-defaultStepSeconds);
  };
  onSongEnded = () => {
    //  TODO: Add conditions to play next if loop will be implemented.
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
        <Seekbar
          played={playedSeconds}
          duration={this.props.duration}
          onSeekMouseDown={this.onSeekMouseDown}
          onSeekChange={this.onSeekChange}
          onSeekMouseUp={this.onSeekMouseUp}
        />
        <PlaybackControlsBar
          onPlayPause={this.props.togglePlay}
          onStepForward={this.onStepForward}
          onStepBack={this.onStepBack}
          onNext={this.props.onNext}
          onPrev={this.props.onPrev}
          playing={isPlaying}
        />
      </Player>
    );
  }
}

PlayerContainer.propTypes = propTypes;
PlayerContainer.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  const {
    isPlaying,
    duration,
    played,
    playedSeconds,
    seeking,
  } = state.player;
  return {
    isPlaying,
    duration,
    played,
    playedSeconds,
    seeking,
    currentSong: getCurrentSong(state.player),
  };
};

const mapDispatchToProps = {
  togglePlay,
  setPlayStatus,
  setDuration,
  updatePlayedTime,
  setSeeking,
  onNext: gotoTrack.next,
  onPrev: gotoTrack.prev,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
