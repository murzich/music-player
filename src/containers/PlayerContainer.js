import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilePlayer from 'react-player/lib/players/FilePlayer';
import { formatTime } from '../utils';
import { Player, PlaybackControlsBar, SongInfo, Seekbar } from '../components/Player';
import { gotoTrack, setDuration, setPlayStatus, togglePlay, updatePlayedTime } from '../actions';

import coverArt from '../assets/album.svg';
import { PlayerTime } from '../components/layout/Player.css';
import { getCurrentSong, getPlayedTimeSeconds } from '../reducers';

const propTypes = {
  played: PropTypes.number.isRequired,
  playedSeconds: PropTypes.number.isRequired,
  updatePlayedTime: PropTypes.func.isRequired,
  togglePlay: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setPlayStatus: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  setDuration: PropTypes.func.isRequired,
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
  constructor(props) {
    super(props);
    this.state = {
      seeking: false,
    };
    this.stepSeconds = 5;
  }

  onPause = () => {
    this.props.updatePlayedTime(this.player.getCurrentTime() / this.props.duration);
    this.props.setPlayStatus(false);
  };
  onProgress = ({ played }) => {
    if (!this.state.seeking && this.props.isPlaying) {
      this.props.updatePlayedTime(played);
    }
  };
  onSeekMouseDown = () => {
    this.setState({ seeking: true });
  };
  onSeekChange = (e) => {
    const { value } = e.target;
    return value + 1;
    // this.setState({ played: parseFloat(e.target.value) });
  };
  onSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };
  onStep = (step) => {
    let played = (this.player.getCurrentTime() + step) / this.props.duration;
    if (played < 0 || played > 1) {
      played = (played < 0) ? 0 : 1;
    }
    // TODO: This code do seeking.
    this.player.seekTo(played);
    this.props.updatePlayedTime(played);
  };
  onStepForward = () => {
    this.onStep(this.stepSeconds);
  };
  onStepBack = () => {
    this.onStep(-this.stepSeconds);
  };
  onEnded = () => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ playing: this.state.loop }, () => {
      //  TODO: Add conditions to play next
      this.props.onNext();
      // eslint-disable-next-line react/no-unused-state
      this.setState({ playing: true });
    });
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
      played,
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
          onEnded={this.onEnded}
          onPlay={() => setPlayStatus(true)}
          onPause={this.onPause}
        />
        <SongInfo
          cover={currentSong.album.cover_medium}
          title={currentSong.title}
          artist={currentSong.artist.name}
        />
        {/* TODO: Extract to separate component. */}
        <div className={PlayerTime}>
          {formatTime(playedSeconds)}
        </div>
        <Seekbar
          played={played}
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

const mapStateToProps = state => ({
  // TODO: Replace by Destructuring assignment.
  isPlaying: state.player.isPlaying,
  currentSong: getCurrentSong(state),
  duration: state.player.duration,
  played: state.player.played,
  playedSeconds: getPlayedTimeSeconds(state.player),
});

const mapDispatchToProps = {
  togglePlay,
  setPlayStatus,
  setDuration,
  updatePlayedTime,
  onNext: gotoTrack.next,
  onPrev: gotoTrack.prev,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
