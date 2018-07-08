import React from 'react';
import PropTypes from 'prop-types';

import style from './Player.css';

function Player({ children }) {
  return (
    <div className={style.PlayerWrapper}>
      <main className={style.Player}>
        {children}
      </main>
    </div>
  );
}

Player.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Player;
