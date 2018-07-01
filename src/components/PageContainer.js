import React, { Component } from 'react';

import Page from "./Page";
import Playlist from "./Playlist";
import PlayerContainer from "./PlayerContainer";
import * as mock from "../mock";

class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  songsList = mock.data;

  render() {
    return (
      <Page>
        <Playlist songs={this.songsList}/>
        <PlayerContainer currentSong={this.songsList[0]}/>
      </Page>
    );
  }
}

export default PageContainer;
