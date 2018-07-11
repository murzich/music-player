import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchSongs from '../actions';
import { getCurrentCover } from '../reducers';

import Page from '../components/layout/Page';
import Playlist from '../components/Playlist';
import PlayerContainer from './PlayerContainer';
import SongsListContainer from './SongsListContainer';
import SearchBarContainer from './SearchBarContainer';

// TODO: Move to config file.
const startQuery = 'artist:"system of a down"';

class PageContainer extends Component {
  componentDidMount() {
    this.props.fetchSongs(startQuery);
  }

  render() {
    const { currentCover } = this.props;
    return (
      <Page coverArt={currentCover}>
        <Playlist>
          <SearchBarContainer />
          <SongsListContainer />
        </Playlist>
        <PlayerContainer />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  currentCover: getCurrentCover(state.player),
});

PageContainer.propTypes = {
  fetchSongs: PropTypes.func.isRequired,
  currentCover: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, { fetchSongs })(PageContainer);
