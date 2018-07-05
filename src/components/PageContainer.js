import React, { Component } from 'react';
import axios from 'axios';

import Page from "./Page";
import PlayerContainer from "./player/PlayerContainer";
import Playlist from "./playlist/Playlist";
import SearchBar from "./playlist/SearchBar";
import SongsList from "./playlist/SongsList";

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
      currentPlaying: false,
      input: '',
    };
  }

  componentDidMount() {
    this.getSongsList(startQuery);
  }

  render() {
    const { songsList, loading, currentTrack, currentPlaying, input } = this.state;
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
            currentPlaying={currentPlaying}
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

  getSongsList = (searchQuery) => {
    this.setState({loading: true});
    axios.get(baseUrl, {
      params: {
        q: searchQuery,
        limit: 15,
      }
    })
      .then(response => {
        this.setState({
          songsList: response.data.data,
          loading: false,
          currentTrack: 0,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false,
        });
      });
  };

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
      return;
    }
    this.setState({input: searchQuery});
    this.getSongsList(searchQuery)
  };

  setCurrentSong = (i, e) => {
    e.preventDefault();
    this.setState({
      currentTrack: i,
    });
  };

  onNextSong = () => {
    this.setState(prevState => {
      const nextTrack = prevState.currentTrack + 1;
      if (nextTrack < prevState.songsList.length - 1) {
        return {
          currentTrack: prevState.currentTrack + 1,
        };
      }
    });
  };

  onPrevSong = () => {
    this.setState(prevState => {
      const prevTrack = prevState.currentTrack - 1;
      return {
        currentTrack: (prevTrack < 0) ? 0 : prevTrack,
      }
    })
  };

  onPlay = (status) => {
    this.setState({currentPlaying: status});
  };
}

export default PageContainer;
