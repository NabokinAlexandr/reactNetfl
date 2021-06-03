import React from 'react';
import './logo.css';
import logo from '../../../img/logo.png';

function Logo(props) {
  return (
    <>
      <img className="logo" src={logo}></img>
    </>
  );
}

export default Logo;