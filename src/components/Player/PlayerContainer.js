import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilePlayer from 'react-player/lib/players/FilePlayer';

import { formatTime } from '../../utils';
import Player from './Player';
import PlaybackControlsBar from './PlaybackControlsBar';
import Seekbar from './Seekbar';
import SongInfo from './SongInfo';
import coverArt from '../../assets/album.svg';

import { PlayerTime } from './Player.css';

const propTypes = {
  onPlay: PropTypes.func.isRequired,
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
      playing: false,
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

  onPlay = () => {
    this.setState({ playing: true }, () => {
      this.props.onPlay(true);
    });
  };

  onPause = () => {
    this.setState({ playing: false }, () => {
      this.props.onPlay(false);
    });
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
    this.setState({ playing: this.state.loop }, () => {
      //  TODO: Add conditions to play next
      this.props.onNext();
      this.setState({ playing: true });
    });
  };
  onDuration = (duration) => {
    this.setState({ duration });
  };

  playPause = () => {
    this.setState(prevState => ({ playing: !prevState.playing }));
  };

  ref = (player) => {
    this.player = player;
  };

  render() {
    const { currentSong = { artist: {}, album: {} } } = this.props;
    return (
      <Player>
        <FilePlayer
          style={{ display: 'none' }}
          ref={this.ref}
          url={currentSong.preview}
          playing={this.state.playing}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
          onEnded={this.onEnded}
          onPlay={this.onPlay}
          onPause={this.onPause}
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
          onPlayPause={this.playPause}
          onStepForward={this.onStepForward}
          onStepBack={this.onStepBack}
          onNext={this.props.onNext}
          onPrev={this.props.onPrev}
          playing={this.state.playing}
        />
      </Player>
    );
  }
}

PlayerContainer.propTypes = propTypes;
PlayerContainer.defaultProps = defaultProps;

export default PlayerContainer;
