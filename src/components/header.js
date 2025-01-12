import React from 'react';
import { Link } from 'react-router-dom'; // For internal links (if using React Router)
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="LITOST">
          <h1>LITOST</h1> {/* Replace with logo or image */}
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
