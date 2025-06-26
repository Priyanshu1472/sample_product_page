import React from 'react';

const NavigationLinks = ({ isMobile = false, onLinkClick = () => {} }) => {
  const links = [
    { name: 'Home', href: '#' },
    { name: 'Categories', href: '#' },
    { name: 'About', href: '#' }
  ];

  if (isMobile) {
    return (
      <div className="mobile-nav-links">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mobile-nav-link"
            onClick={onLinkClick}
          >
            {link.name}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="center-nav">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="nav-link"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default NavigationLinks;