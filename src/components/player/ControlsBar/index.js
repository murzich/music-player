import React from 'react';
import PropTypes from 'prop-types';

import ControlButton, { withFontAwesome } from '../ControlButton';
import style from './ControlsBar.css';

function ControlsBar({ buttonsConfig }) {
  const controlButtons = buttonsConfig.map(button =>
    withFontAwesome({
      key: button.name,
      callback: button.callback,
      icon: button.icon,
      className: button.className,
    })(ControlButton));

  return (
    <div className={style.ControlsBar}>
      {controlButtons}
    </div>
  );
}

ControlsBar.propTypes = {
  buttonsConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ControlsBar;
