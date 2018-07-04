import React from 'react';

function Button({callback, extraClass, children}) {

  const className = "Button" + extraClass;

  return (
    <button
      onClick={callback}
      className={className}
      // TODO: for initial testing. Remove after adding CSS classes
      style={{ border: '2px solid grey', color: 'white'}}
    >
      {children || 'default button'}
    </button>
  );
}

export default Button;
