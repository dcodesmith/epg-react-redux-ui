import React from 'react';
import PropTypes from 'prop-types';

import ControlButton from './ControlButton';

import {
  TRACK_LENGTH,
  PREVIOUS_BUTTON_CLASS,
  PREVIOUS_BUTTON_TITLE,
  NEXT_BUTTON_CLASS,
  NEXT_BUTTON_TITLE
} from '../constants';

const Controls = ({ onNavigate, offset = 0, times }) => (
  <div className="programme-guide__controls">
    <ControlButton
      title={ PREVIOUS_BUTTON_TITLE }
      className={ PREVIOUS_BUTTON_CLASS }
      isDisabled={ !offset }
      onNavigate={ () => onNavigate(-1) }>
      <span>&laquo;</span>
    </ControlButton>

    <ControlButton
      title={ NEXT_BUTTON_TITLE }
      className={ NEXT_BUTTON_CLASS }
      isDisabled={ offset >= ( Math.floor(times.length - TRACK_LENGTH) / 2 ) }
      onNavigate={ () => onNavigate(1) }>
      <span>&raquo;</span>
    </ControlButton>
  </div>
);

Controls.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  offset: PropTypes.number,
  times: PropTypes.array.isRequired
};

export default Controls;
