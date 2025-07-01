import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Board of Directors', href: '/board' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            {/* Logo and Company Name */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img
                src="public/images/logo.png"
                alt="German Steel Logo"
                className="w-24 h-24 object-contain rounded-lg"
              />
              <h1 className="text-3xl font-serif font-semibold text-white">
                German Steel Contracting LLC
              </h1>
            </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="relative z-50 p-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-yellow-500/20 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 visible transform translate-y-0'
            : 'opacity-0 invisible transform -translate-y-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-item py-2 text-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.href 
                      ? 'text-yellow-400' 
                      : 'text-white hover:text-yellow-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-item text-white hover:text-yellow-400 transition-colors duration-200 py-2 text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;