import React, { PropTypes } from 'react';
import classNames from 'classnames';

import ProgrammeItem from './ProgrammeItem';

const Body = ({ programmes, transformStyle }) => {
  const channels = Object.keys(programmes);
  const klass = classNames({
    'programme-guide__body': true,
    'epg-fade': channels.length > 0
  });

  const getProgrammesNodes = channel => (
    programmes[channel].map((programme, index) =>
      <ProgrammeItem programme={ programme } key={ channel.id } />
    )
  );

  const channelsNodes = channels.map((channel, index) =>
    <div key={ channel.id } className="programme-guide__row">
      { /* <div className="indicator">Afees Adedamola Kolawole</div>*/ }

      <div className="programme-guide__row__header">
        { channel }
      </div>

      <div className="programme-guide__row__items" style={ transformStyle }>
        <ul className="schedule">
          { getProgrammesNodes(channel) }
        </ul>
      </div>
    </div>
  );

  return (
    <div className={ klass }>
      { channelsNodes }
    </div>
  );
};

Body.propTypes = {
  programmes: PropTypes.object.isRequired,
  transformStyle: PropTypes.object.isRequired
};

export default Body;