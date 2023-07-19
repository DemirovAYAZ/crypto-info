import React, { useState } from 'react';
import './Search.css'
import {FaSearch} from 'react-icons/fa'

const Search = ({ coins, setFilteredCoins }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    filterCoins(newSearchTerm);
  };

  const filterCoins = (searchTerm) => {
    const filteredCoins = coins.filter((coin) => {
      const { name, symbol } = coin;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();

      return (
        name.toLowerCase().includes(lowerCaseSearchTerm) ||
        symbol.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });

    setFilteredCoins(filteredCoins);
  };

  return (
        <div class="search-box container">
            <button class="btn-search">
                <FaSearch />
            </button>
            <input type="text" class="input-search" value={searchTerm} onChange={handleInputChange} placeholder="Type to Search..." />
        </div>
  );
};

export default Search;
