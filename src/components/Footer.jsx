import React from 'react';
import down_icon from '../assets/down-icon.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        Questions? Call <a href="#">000-800-919-1694</a>
      </p>
      <div className="grid">
        <a href="#" >FAQ</a>
        <a href="#" >Help Centre</a>
        <a href="#" >
          Account
        </a>
        <a href="#" >Media Centre</a>
        <a href="#" >Investor Relations</a>
        <a href="#" >Jobs</a>
        <a href="#" >Ways to Watch</a>
        <a href="#" >Terms of Use</a>
        <a href="#" >Privacy</a>
        <a href="#" >Cookie Preferences</a>
        <a href="#" >Corporate Information</a>
        <a href="#" >Contact Us</a>
        <a href="#" >Speed Test</a>
        <a href="#" >Legal Notices</a>
        <a href="#" >Only on Netflix</a>
      </div>
      <button className="eng-btn">
        English
        <img src={down_icon} alt="Down Arrow" width={"8px"} />
      </button>
      <p>Netflix India</p>
    </footer>
  );
};

export default Footer;
