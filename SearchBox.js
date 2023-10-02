import React, { useState } from 'react';
import './Comp.css'
export function SearchBox(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // You can define your search logic here
    console.log(`Searching for: ${searchTerm}`);
    // You can also pass the searchTerm to a parent component via a callback function
    // For example: props.onSearch(searchTerm);
  };

  return (
    <div className="searchbox">
      <div className="search-container">
        <input className='search-input'
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch} className='search-button'>Search</button>
      </div>
    </div>
  );
}

export default SearchBox;
