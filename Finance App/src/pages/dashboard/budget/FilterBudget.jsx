import React, { useState } from "react";
import "./Budget.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search a specific budget"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleClick}></button>
    </div>
  );
};

export default SearchBar;
