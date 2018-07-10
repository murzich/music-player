import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilePlayer from 'react-player/lib/players/FilePlayer';
import { formatTime } from '../utils';
import { Player, PlaybackControlsBar, SongInfo, Seekbar } from '../components/Player';
import { gotoTrack, setPlayStatus, togglePlay } from '../actions';

import coverArt from '../assets/album.svg';
import { PlayerTime } from '../components/layout/Player.css';
import { getCurrentSong } from '../reducers';

const propTypes = {
  togglePlay: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setPlayStatus: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
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
      played: 0,
      playedSeconds: 0,
      duration: 100,
      seeking: false,
    };
    this.stepSeconds = 5;
  }

  onProgress = (state) => {
    if (!this.state.seeking) {
      this.setState(state);
    }
  };
  onSeekMouseDown = () => {
    this.setState({ seeking: true });
  };
  onSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) });
  };
  onSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };
  onStep = (step) => {
    let played = (this.player.getCurrentTime() + step) / this.state.duration;
    if (played < 0 || played > 1) {
      played = (played < 0) ? 0 : 1;
    }
    this.player.seekTo(played);
    this.setState({
      played,
      playedSeconds: played * this.state.duration,
    });
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
  onDuration = (duration) => {
    this.setState({ duration });
  };

  // playPause = () => {
  //   this.setState(prevState => ({ playing: !prevState.playing }));
  // };

  ref = (player) => {
    this.player = player;
  };

  render() {
    // eslint-disable-next-line no-shadow
    const { currentSong, setPlayStatus, isPlaying } = this.props;
    return (
      <Player>
        <FilePlayer
          style={{ display: 'none' }}
          ref={this.ref}
          url={currentSong.preview}
          playing={isPlaying}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
          onEnded={this.onEnded}
          onPlay={() => setPlayStatus(true)}
          onPause={() => setPlayStatus(false)}
        />
        <SongInfo
          cover={currentSong.album.cover_medium}
          title={currentSong.title}
          artist={currentSong.artist.name}
        />
        {/* TODO: Extract to separate component. */}
        <div className={PlayerTime}>
          {formatTime(this.state.playedSeconds)}
        </div>
        <Seekbar
          played={this.state.played}
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
});

const mapDispatchToProps = {
  togglePlay,
  setPlayStatus,
  onNext: gotoTrack.next,
  onPrev: gotoTrack.prev,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
