import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks.jsx';
import SearchBar from './SearchBar';
import IconButtons from './IconButtons';
import MobileMenu from './MobileMenu';
import '../styles/Navbar.css'; // Ensure you have the correct path to your CSS file

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = 2; // You can make this dynamic

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            
            {/* Logo Section */}
            <Logo />

            {/* Center Navigation - Hidden on mobile */}
            <NavigationLinks />

            {/* Right Side Icons - Hidden on mobile */}
            <div className="right-icons">
              <SearchBar />
              <IconButtons cartCount={cartCount} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={toggleMobileMenu}
        cartCount={cartCount}
      />
    </>
  );
};

export default Navbar;