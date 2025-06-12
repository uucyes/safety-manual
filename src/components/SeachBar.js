import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="search-input"
        placeholder="검색어를 입력하세요..."
      />
    </div>
  );
};

export default SearchBar;