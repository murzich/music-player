import React from 'react';

import './Button.css';

function Button({callback, extraClass, children}) {
  // TODO: clear `||` when defaultProps will be used.
  const className = `Button ${extraClass || ''}`;

  return (
    <button
      onClick={callback}
      className={className}
    >
      {children || 'default button'}
    </button>
  );
}

export default Button;
