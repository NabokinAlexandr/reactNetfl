import React from 'react';
import './footer.css';
import Logo from './../shared/logo/logo';

function FooterComponent(props) {
  return (
    <>
      <div className="footer">
        <Logo />
      </div>
    </>
  );
}

export default FooterComponent;