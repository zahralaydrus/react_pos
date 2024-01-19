import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';

function Header() {
  const headerStyle = {
    padding: '30px',
    background: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const linkStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#ff0000',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#ff6000',
  };

  return (
    <Navbar fluid rounded style={headerStyle}>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://goshopkey.com/wp-content/uploads/2023/08/penyetan-cok.png" width="50px" height="50px" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Puedessee cok</span>
      </Navbar.Brand>

      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold text-red-500 hover:text-red-600" style={linkStyle}>
          Puedeees Cok
        </Link>
        <Link to="/" className="header-link" style={linkStyle}>
          Home
        </Link>
        <Link to="/order-history" className="header-link" style={linkStyle}>
          Order History
        </Link>
        <Link to="/contact-us" className="header-link" style={linkStyle}>
          Contact Us
        </Link>
        <Link to="/menu" className="header-link" style={linkStyle}>
          Menu
        </Link>
      </div>
    </Navbar>
  );
}

export default Header;
