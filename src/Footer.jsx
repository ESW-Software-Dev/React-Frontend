import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageRouter from './PageRouter';

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>
    <div className="footer-left">
      {/* Links on the left */}
      <a href="#"></a>
      <a href="#"></a>
      {/* Add more links as needed */}
    </div>
    <div className="footer-right">
      {/* Picture on the right */}
      <img src="cornell.png" alt="Footer Picture" className="styled-image" />
      <img src="esw.png" alt="Footer Picture" className="styled-image2" />
    </div>
    <div className="copyright">
      {`Copyright © ESW ${year}`}
    </div>
  </footer>
    ;
};

export default Footer;