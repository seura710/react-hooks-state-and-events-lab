import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [ selectedCategory , setSelectedCategory] = useState("All")

  
  function changeCategoryFilter(e) {
    setSelectedCategory(e.target.value)
    // const filteredList = items.filter((item) => item.category === e.target.value)
    // setSelectedCategory(filteredList)
  }
  console.log(selectedCategory)

  const itemsToDisplay = items.filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )

  // You should also use the selectedCategory variable to determine which items to display in the shopping list. You'll need some way of filtering the array of items based on the selectedCategory.

  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={changeCategoryFilter}>
        <select name="filter" >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


