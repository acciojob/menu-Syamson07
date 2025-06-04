import React, { useState } from "react";
import Menu from "./Menu";
import menuData from "./menuData";
import './styles.css';

const App = () => {
  const [category, setCategory] = useState("All");

  const handleFilter = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div id="main">
      <h1>Menu</h1>
      <div className="button-container">
        <button id="filter-btn-1" onClick={() => handleFilter("Breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => handleFilter("Lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => handleFilter("Shakes")}>Shakes</button>
      </div>
      <Menu items={menuData} category={category} />
    </div>
  );
};

export default App;
