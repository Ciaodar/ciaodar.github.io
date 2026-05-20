import React from 'react';
import itchioIcon from '../../images/itchio-icon.png';

const IconItchIo = () => (
  <img
    src={itchioIcon}
    alt="Itch.io"
    style={{
      width: '20px',
      height: '20px',
      objectFit: 'contain',
      filter: 'brightness(0) invert(0.7)',
    }}
  />
);

export default IconItchIo;
