import React, {useState} from "react";
import './Search.css'

function Search({onSearchChange}) {
  const [searches, setSearches] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    onSearchChange(searches)
  }

  return (
    <div >
        <form className="search-form" onSubmit={handleSubmit} >
        <input
            className="searchBar"
            type="text"
            name="search"
            placeholder="Search our NFTs..."
            autoComplete="off"
            value={searches}
            onChange= {e => setSearches(e.target.value)}
        />
        <button type="submit" className="searchBttn">
            Search
        </button>
        </form>
    </div>
  );
}

export default Search;