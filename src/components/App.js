import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

// Sample data
const menuItems = [
  {
    id: 1,
    name: "Pancakes",
    category: "Breakfast",
    image: "https://via.placeholder.com/150",
    price: "$5.99",
  },
  {
    id: 2,
    name: "Burger",
    category: "Lunch",
    image: "https://via.placeholder.com/150",
    price: "$9.99",
  },
  {
    id: 3,
    name: "Strawberry Shake",
    category: "Shakes",
    image: "https://via.placeholder.com/150",
    price: "$4.99",
  },
  {
    id: 4,
    name: "Omelette",
    category: "Breakfast",
    image: "https://via.placeholder.com/150",
    price: "$6.50",
  },
  {
    id: 5,
    name: "Grilled Cheese",
    category: "Lunch",
    image: "https://via.placeholder.com/150",
    price: "$7.75",
  },
  {
    id: 6,
    name: "Vanilla Shake",
    category: "Shakes",
    image: "https://via.placeholder.com/150",
    price: "$4.50",
  },
];

function App() {
  const [items, setItems] = useState(menuItems);
  const [category, setCategory] = useState("All");

  const handleFilter = (cat) => {
    setCategory(cat);
    if (cat === "All") {
      setItems(menuItems);
    } else {
      setItems(menuItems.filter((item) => item.category === cat));
    }
  };

  return (
    <div id="main">
      <h1>Menu</h1>
      <div className="btn-container">
        <button id="filter-btn-1" onClick={() => handleFilter("Breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => handleFilter("Lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => handleFilter("Shakes")}>
          Shakes
        </button>
      </div>
      <Menu items={items} />
    </div>
  );
}

export default App;
