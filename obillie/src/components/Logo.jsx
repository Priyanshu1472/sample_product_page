import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`logo-section ${className}`}>
      {/* <div className="logo-icon"> */}
        {/* <span>O</span> */}
      {/* </div> */}
      <span className="logo-text">Obillie</span>
    </div>
  );
};

export default Logo;