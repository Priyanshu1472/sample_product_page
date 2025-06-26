import React from 'react';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks.jsx';
import SearchBar from './SearchBar';
import IconButtons from './IconButtons';

const MobileMenu = ({ isOpen, onClose, cartCount = 2 }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-overlay">
      <div className="mobile-backdrop" onClick={onClose}></div>
      
      <div className="mobile-menu">
        {/* Logo Section - Full Opacity */}
        <div className="mobile-logo-section">
          <Logo />
        </div>

        {/* Navigation Items - 0.4 Opacity Background */}
        <div className="mobile-nav-section">
          {/* Navigation Links */}
          <NavigationLinks isMobile={true} onLinkClick={onClose} />

          {/* Search Bar */}
          <SearchBar isMobile={true} />

          {/* Icons Row */}
          <IconButtons isMobile={true} cartCount={cartCount} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;