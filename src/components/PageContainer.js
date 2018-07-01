import React, { Component } from 'react';
import axios from 'axios';

import Page from "./Page";
import Playlist from "./Playlist";
import PlayerContainer from "./PlayerContainer";
import * as mockResponse from '../mock';

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
// const crossOrigin = 'http://crossorigin.me/';
const mockUrl = 'http://api.deezer.com/search/track?q=artist:"system of a down"&limit=10';

class PageContainer extends Component {


  constructor(props) {
    super(props);
    this.state = {
      currentTrack: 0,
      songsList: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    axios.get(corsAnywhere+mockUrl)
      .then(response => {
        this.setState({
          songsList: response.data.data,
          loading: false,
        });
      })
      .catch(error => {
        console.log(error);
        // TODO: Used if cors-anywhere fails
        this.setState({
          songsList: mockResponse.data.data,
          loading: false,
        });
      });
  }

  render() {
    const { songsList, loading, currentTrack } = this.state;
    return (
      <Page>
        <Playlist
          songs={songsList}
          loading={loading}
          setSong={this.setCurrentSong}
          currentTrack={currentTrack}
        />
        <PlayerContainer
          currentSong={songsList[currentTrack]}
          onNext={this.onNextSong}
          onPrev={this.onPrevSong}
        />
      </Page>
    );
  }

  setCurrentSong = (i) => {
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
  }
}

export default PageContainer;
