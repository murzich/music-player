import React, { Component } from 'react';
import axios from 'axios';

import Page from '../components/layout/Page';
import Playlist, { SearchBar, SongsList } from '../components/Playlist';
import * as mockResponse from '../mock.json';
import PlayerContainer from './PlayerContainer';

const deezerSearch = 'http://api.deezer.com/search/track';
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = corsAnywhere + deezerSearch;
const startQuery = 'artist:"system of a down"';

class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: 0,
      songsList: [],
      loading: false,
      isPlaying: false,
      input: '',
    };
  }

  componentDidMount() {
    this.getSongsList(startQuery);
  }

  /**
   * Handlers
   */
  onInputChange = (e) => {
    const searchQuery = e.target.value;
    if (!searchQuery) {
      this.setState({
        input: '',
        loading: false,
      });
    } else {
      this.setState({ input: searchQuery }, () => {
        this.getSongsList(searchQuery);
      });
    }
  };

  onNextSong = () => {
    this.setState((prevState) => {
      const nextTrack = prevState.currentTrack + 1;
      if (nextTrack < prevState.songsList.length - 1) {
        return {
          currentTrack: prevState.currentTrack + 1,
        };
      }
      return {};
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

  getSongsList = (searchQuery) => {
    this.setState({ loading: true }, () => {
      axios.get(baseUrl, {
        params: {
          q: searchQuery,
          limit: 15,
        },
      })
        .then((response) => {
          this.setState({
            songsList: response.data.data,
            loading: false,
            currentTrack: 0,
          });
        })
        .catch(() => {
          this.setState({
            songsList: mockResponse.data,
            loading: false,
          });
        });
    });
  };

  render() {
    const {
      songsList,
      loading,
      currentTrack,
      isPlaying,
      input,
    } = this.state;
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

export default PageContainer;
