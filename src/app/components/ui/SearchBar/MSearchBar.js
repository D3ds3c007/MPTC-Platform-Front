"use client";

import { useState } from "react";
import styles from './MSearchBar.module.css'; // Import the CSS for styling

export function MSearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle input change in real-time
  const handleInputChange = (e) => {
    console.log("Search term:", e.target.value);
    setSearchTerm(e.target.value);
  };

  // Trigger search when clicking the button
  const handleSearchClick = () => {
    onSearch(searchTerm);  // ✅ Calls the parent search handler
  };

  // Allow search on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);  // ✅ Search on Enter
    }
  };

  return (
    <div className={styles["search-container"]}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}  // ✅ Enable Enter key search
        className={styles["search-input"]}
      />
      <button
        onClick={handleSearchClick}  // ✅ Trigger search on click
        className={styles["search-button"]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
          width="24"
          height="24"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
  );
}
