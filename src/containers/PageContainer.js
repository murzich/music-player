import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Page from '../components/layout/Page';
import Playlist, { SearchBar, SongsList } from '../components/Playlist';
import PlayerContainer from './PlayerContainer';
import fetchSongs, { setSearchQuery, setCurrentTrack } from '../actions';

const startQuery = 'artist:"system of a down"';

class PageContainer extends Component {
  componentDidMount() {
    this.props.fetchSongs(startQuery);
  }

  /**
   * Handlers
   */
  onInputChange = (e) => {
    const searchQuery = e.target.value;
    this.props.setSearchQuery(searchQuery);
    if (searchQuery) {
      this.props.fetchSongs(searchQuery);
    }
  };

  // TODO: Move this handlers to playbackControl component
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

  setCurrentSong = (i, e) => {
    e.preventDefault();
    this.props.setCurrentTrack(i);
  };

  render() {
    const {
      songsList,
      isLoading,
      searchQuery,
      currentTrack,
      isPlaying,
    } = this.props;
    const currentSong = songsList[currentTrack];
    const coverArt = (currentSong) ? currentSong.album.cover_medium : undefined;
    return (
      <Page coverArt={coverArt}>
        <Playlist>
          <SearchBar
            value={searchQuery}
            callback={this.onInputChange}
            isLoading={isLoading}
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
        />
      </Page>
    );
  }
}

const mapStateToProps = (store) => {
  const {
    isLoading,
    songsList,
    error,
    isPlaying,
    searchQuery,
    currentTrack,
  } = store.player;
  return {
    isLoading,
    songsList,
    error,
    isPlaying,
    searchQuery,
    currentTrack,
  };
};

PageContainer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
  fetchSongs: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  currentTrack: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  songsList: PropTypes.arrayOf(PropTypes.shape({
    album: PropTypes.shape({
      cover_medium: PropTypes.string,
    }),
  })).isRequired,
};

export default connect(mapStateToProps, {
  fetchSongs,
  setSearchQuery,
  setCurrentTrack,
})(PageContainer);
