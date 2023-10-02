import React from 'react';
import './Navbar.css'; // You can create a separate CSS file for styling

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Your Logo</a>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about">About</a>
        </li>
        <li className="navbar-item">
          <a href="/services">Services</a>
        </li>
        <li className="navbar-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
