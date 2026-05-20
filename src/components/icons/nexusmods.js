import React from 'react';
import nexusmodsIcon from '../../images/nexusmods-icon.png';

const IconNexusMods = () => (
  <img
    src={nexusmodsIcon}
    alt="NexusMods"
    style={{
      width: '20px',
      height: '20px',
      objectFit: 'contain',
      filter: 'brightness(0) invert(0.7)',
    }}
  />
);

export default IconNexusMods;
