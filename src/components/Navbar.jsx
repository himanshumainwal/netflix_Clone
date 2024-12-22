import React from 'react';
import logo from '../assets/logo.png';
import down_icon from '../assets/down-icon.png';

function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Netflix Logo" className="logo" />
      <div>
        <button className="eng-btn">
          English
          <img src={down_icon} alt="Down Arrow" width={"8px"} />
        </button>
        <button className="sign-btn btn">
          <a href="https://www.netflix.com/in/login">Sign In</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
