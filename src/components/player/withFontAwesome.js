import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faForward, faBackward, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons';

library.add(faPlay, faPause, faForward, faBackward, faFastForward, faFastBackward);

function withFontAwesome(WrappedComponent, key, callback, icon, extraClass) {
  return (
    // TODO: if `icon` is unique, you can use it as `key` prop, but it casts full reload of this component.
    <WrappedComponent key={key} callback={callback} extraClass={extraClass}>
      <FontAwesomeIcon icon={icon} />
    </WrappedComponent>
  );
}

export default withFontAwesome;
