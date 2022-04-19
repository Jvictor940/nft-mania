import React from "react";
import './Search.css'

function Search({search, onSearchChange}) {
  return (
    <div >
        <form className="search-form">
        <input
            className="searchBar"
            type="text"
            name="search"
            placeholder="Search our NFTs..."
            autoComplete="off"
            value={search}
            onChange= {e => onSearchChange(e.target.value)}
        />
        <button type="submit" className="searchBttn">
            Search
        </button>
        </form>
    </div>
  );
}

export default Search;