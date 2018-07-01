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
      currentSong: {album: {}, artist: {}},
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
          currentSong: response.data.data[0],
          loading: false,
        });
      })
      .catch(error => {
        console.log(error);
        // TODO: Used if cors-anywhere fails
        this.setState({
          songsList: mockResponse.data.data,
          currentSong: mockResponse.data.data[0],
          loading: false,
        });
      });
  }

  render() {
    return (
      <Page>
        <Playlist songs={this.state.songsList} loading={this.state.loading}/>
        <PlayerContainer currentSong={this.state.currentSong}/>
      </Page>
    );
  }
}

export default PageContainer;
