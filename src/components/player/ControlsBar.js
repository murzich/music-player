import React from 'react';
import PropTypes from 'prop-types';

import withFontAwesome from './withFontAwesome';
import Button from './Button';
import style from './ControlsBar.css';

function ControlsBar({ buttonsConfig }) {
  const buttons = buttonsConfig.map(button =>
    withFontAwesome({
      key: button.name,
      callback: button.callback,
      icon: button.icon,
      className: button.className,
    })(Button));

  return (
    <div className={style.ControlsBar}>
      {buttons}
    </div>
  );
}

ControlsBar.propTypes = {
  buttonsConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ControlsBar;
