import React, { Component } from 'react';
import axios from 'axios';

import Page from "./Page";
import Playlist from "./playlist/Playlist";
import PlayerContainer from "./player/PlayerContainer";
import SongsList from "./playlist/SongsList";
import SearchBar from "./playlist/SearchBar";

const deezerSearch = 'http://api.deezer.com/search/track';
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const mockQuery = 'artist:"system of a down"';
const baseUrl = corsAnywhere + deezerSearch;

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
    this.getSongsList(mockQuery);
  }

  render() {
    const { songsList, loading, currentTrack, currentPlaying } = this.state;
    return (
      <Page>
        <Playlist>
          <SearchBar
            value={this.state.input}
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
          currentSong={songsList[currentTrack]}
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

  onInputChange = (e) => {
    const searchQuery = e.target.value;
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
