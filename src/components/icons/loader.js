import React from 'react';
import logoImage from '@images/ciaodarlogotransp.png';

const IconLoader = () => (
  <div
    id="logo"
    style={{
      width: '200px',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <img
      id="logo-img"
      src={logoImage}
      alt="Ciaodar Logo"
      style={{ width: '120px', height: '120px', objectFit: 'contain' }}
    />
  </div>
);

export default IconLoader;
