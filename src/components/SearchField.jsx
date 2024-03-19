import React from 'react';

const SearchField = ({ placeholder }) => {
  return (
    <div className="search-field-wrap">
      <input type="text" className="search-field" placeholder={placeholder} />
    </div>
  );
};

export default SearchField;

// <img src="/search-icon.svg" />
