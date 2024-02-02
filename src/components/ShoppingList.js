import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchName, setSearchName] = useState("");
  const [itemsState, setItemsState] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(searchText) {
    setSearchName(searchText);
  }

  const itemsToDisplay = itemsState.filter((item) => { 
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchName.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  function handleItemFormSubmit(newItem) {
    setItemsState([...itemsState, newItem])
  }


  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        items={items}
        onSearchChange={handleSearchChange}
        search={searchName}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
