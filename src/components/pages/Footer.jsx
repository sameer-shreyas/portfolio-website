// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Sameer Shreyas. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
