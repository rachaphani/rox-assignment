import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="card" style={{ backgroundColor: '#f1f1f1' }}>
      <h2>{title}</h2>
    </div>
  );
};

export default Header;