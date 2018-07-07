import React from 'react';

import './Playlist.css';

function Playlist({ children }) {
  return (
    <aside className="Playlist">
      {children}
    </aside>
  );
}

export default Playlist;
