import React from 'react';
import { Heart, ShoppingCart, User } from 'lucide-react';

const IconButtons = ({ isMobile = false, cartCount = 2 }) => {
  const buttonClass = isMobile ? 'mobile-icon-button' : 'icon-button';
  const badgeClass = isMobile ? 'mobile-cart-badge' : 'cart-badge';
  const containerClass = isMobile ? 'mobile-icons' : 'right-icons';
  const iconSize = isMobile ? 28 : 24;

  return (
    <div className={containerClass}>
      <button className={buttonClass}>
        <Heart size={iconSize} />
      </button>
      <button className={buttonClass}>
        <ShoppingCart size={iconSize} />
        {cartCount > 0 && (
          <span className={badgeClass}>
            {cartCount}
          </span>
        )}
      </button>
      <button className={buttonClass}>
        <User size={iconSize} />
      </button>
    </div>
  );
};

export default IconButtons;