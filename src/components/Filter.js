import React, { useState } from "react";

function Filter({ onCategoryChange, items, onSearchChange, search }) {
  const [itemSearch, setItemSearch] = useState(search);

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setItemSearch(searchText);
    onSearchChange(searchText);
  };


  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        value={itemSearch}
        placeholder="Search..."
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
