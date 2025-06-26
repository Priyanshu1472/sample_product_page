import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ isMobile = false, placeholder = "Search..." }) => {
  const containerClass = isMobile ? 'mobile-search' : 'search-container';
  const inputClass = isMobile ? 'mobile-search-input' : 'search-input';
  const iconClass = isMobile ? 'mobile-search-icon' : 'search-icon';

  return (
    <div className={containerClass}>
      <input
        type="text"
        placeholder={placeholder}
        className={inputClass}
      />
      <Search className={iconClass} />
    </div>
  );
};

export default SearchBar;