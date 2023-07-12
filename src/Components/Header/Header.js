import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
      <div className="container">
        <a className="navbar-brand fs-2 fw-semibold" href="/">UserEase</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMenuToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link fs-5 ${location.pathname === '/' ? 'active' : ''}`}
                href="/"
              >
                {location.pathname === '/' ? <strong>Home</strong> : 'Home'}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link fs-5 ${location.pathname === '/about' ? 'active' : ''}`}
                href="/about"
              >
                {location.pathname === '/about' ? <strong>About</strong> : 'About'}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link fs-5 ${location.pathname === '/contact' ? 'active' : ''}`}
                href="/contact"
              >
                {location.pathname === '/contact' ? <strong>Contact</strong> : 'Contact'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
