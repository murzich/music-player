import React from 'react';
import PropTypes from 'prop-types';

import style from './Playlist.css';

function Playlist({ children }) {
  return (
    <aside className={style.Playlist}>
      {children}
    </aside>
  );
}

Playlist.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Playlist;
