import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Page from '../components/layout/Page';
import Playlist, { SearchBar, SongsList } from '../components/Playlist';
import PlayerContainer from './PlayerContainer';
import fetchSongs, { setSearchQuery, gotoTrack } from '../actions';

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
  setCurrentTrack: gotoTrack.id,
})(PageContainer);
