import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Page from '../components/layout/Page';
import Playlist, { SearchBar, SongsList } from '../components/Playlist';
import PlayerContainer from './PlayerContainer';
import fetchSongs from '../actions';

const startQuery = 'artist:"system of a down"';

class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: 0,
      isPlaying: false,
      input: '',
    };
  }

  componentDidMount() {
    this.props.fetchSongs(startQuery);
  }

  /**
   * Handlers
   */
  onInputChange = (e) => {
    const searchQuery = e.target.value;
    if (!searchQuery) {
      this.setState({
        input: '',
      });
    } else {
      this.setState({ input: searchQuery }, () => {
        this.props.fetchSongs(searchQuery);
      });
    }
  };

  onNextSong = () => {
    this.setState((prevState) => {
      const nextTrack = prevState.currentTrack + 1;
      if (nextTrack < this.props.songsList.length) {
        return {
          currentTrack: nextTrack,
        };
      }
      return {
        currentTrack: 0,
      };
    });
  };

  onPrevSong = () => {
    this.setState((prevState) => {
      const prevTrack = prevState.currentTrack - 1;
      return {
        currentTrack: (prevTrack < 0) ? 0 : prevTrack,
      };
    });
  };

  onPlay = (status) => {
    this.setState({ isPlaying: status });
  };

  setCurrentSong = (i, e) => {
    e.preventDefault();
    this.setState({ currentTrack: i });
  };

  render() {
    const { songsList, loading } = this.props;
    const { currentTrack, isPlaying, input } = this.state;
    const currentSong = songsList[currentTrack];
    const coverArt = (currentSong) ? currentSong.album.cover_medium : undefined;

    return (
      <Page coverArt={coverArt}>
        <Playlist>
          <SearchBar
            value={input}
            callback={this.onInputChange}
            loading={loading}
          />
          <SongsList
            songs={songsList}
            setSong={this.setCurrentSong}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
          />
        </Playlist>
        <PlayerContainer
          currentSong={currentSong}
          onNext={this.onNextSong}
          onPrev={this.onPrevSong}
          onPlay={this.onPlay}
        />
      </Page>
    );
  }
}

const mapStateToProps = (store) => {
  const { loading, songsList, error } = store;
  return {
    loading,
    songsList,
    error,
  };
};

PageContainer.propTypes = {
  fetchSongs: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  songsList: PropTypes.arrayOf(PropTypes.shape({
    album: PropTypes.shape({
      cover_medium: PropTypes.string,
    }),
  })).isRequired,
};

export default connect(mapStateToProps, { fetchSongs })(PageContainer);
