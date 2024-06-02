import React, { useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleSearch = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchInputWrapper}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          ref={inputRef}
          placeholder="Search posts..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          <FaSearch className={styles.searchIcon} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
