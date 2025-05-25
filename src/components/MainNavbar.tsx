import React from 'react';
import './MainNavbar.css';

const MainNavbar: React.FC = () => {
  return (
    <div className="main-navbar">
      <div className="main-navbar-container">
        {/* Logo */}
        <div className="main-navbar-logo">
          Final Year Projects
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <select className="category-dropdown">
            <option>All Categories</option>
            <option>Java</option>
            <option>Python</option>
            <option>Embedded</option>
          </select>
          <input type="text" placeholder="Search projects..." />
          <button className="search-button">🔍</button>
        </div>

        {/* User Actions */}
        <div className="main-navbar-actions">
          <button className="login-button">Login / Register</button>
          <div className="navbar-icons">
            <button className="wishlist-icon">❤️</button>
            <button className="cart-icon">🛒</button>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="main-navbar-links">
        <a href="#" className="nav-link">Home</a>
        <div className="dropdown">
          <a href="#" className="nav-link">Shop</a>
          <div className="dropdown-content">
            <a href="#">Java Projects</a>
            <a href="#">Python Projects</a>
            <a href="#">Machine Learning</a>
          </div>
        </div>
        <a href="#" className="nav-link">Journal Paper</a>
        <a href="#" className="nav-link">Blog</a>
        <a href="#" className="nav-link">About Us</a>
        <a href="#" className="nav-link">Contact Us</a>
      </div>
    </div>
  );
};

export default MainNavbar;