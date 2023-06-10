import React from 'react';

const SearchBar = ({ keyword, onChange }) => {
  const BarStyle = {
    width: "20rem",
    background: "#F0F0F0",
    border: "none",
    padding: "0.5rem",
    margin: "2rem"
  };

  return (
    <input
      style={BarStyle}
      key="search-bar"
      value={keyword}
      placeholder="search food"
      onChange={onChange}
    />
  );
}

export default SearchBar;
