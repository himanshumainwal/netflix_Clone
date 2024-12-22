import React from 'react';
import down_icon from '../assets/down-icon.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a>
      </p>
      <div className="grid">
        <a href="https://help.netflix.com/en/node/412" target='_blank'>FAQ</a>
        <a href="https://help.netflix.com/en/" target='_blank'>Help Centre</a>
        <a href="https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount" target='_blank'>
          Account
        </a>
        <a href="https://media.netflix.com/en/" target='_blank'>Media Centre</a>
        <a href="https://ir.netflix.net/ir-overview/profile/default.aspx" target='_blank'>Investor Relations</a>
        <a href="https://jobs.netflix.com/" target='_blank'>Jobs</a>
        <a href="https://devices.netflix.com/en/" target='_blank'>Ways to Watch</a>
        <a href="https://help.netflix.com/legal/termsofuse" target='_blank'>Terms of Use</a>
        <a href="https://help.netflix.com/legal/privacy" target='_blank'>Privacy</a>
        <a href="https://www.netflix.com/in/#" target='_blank'>Cookie Preferences</a>
        <a href="https://help.netflix.com/legal/corpinfo" target='_blank'>Corporate Information</a>
        <a href="https://help.netflix.com/en/contactus" target='_blank'>Contact Us</a>
        <a href="https://fast.com/" target='_blank'>Speed Test</a>
        <a href="https://help.netflix.com/legal/notices" target='_blank'>Legal Notices</a>
        <a href="https://www.netflix.com/in/browse/genre/839338" target='_blank'>Only on Netflix</a>
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
