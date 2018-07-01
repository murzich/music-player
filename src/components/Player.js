import React from 'react';
import './Player.css';

function Player(props) {
  return (
    <div className="Player-wrapper">
      <main className="Player">
        {props.children}
      </main>
    </div>
  );
}

export default Player;
