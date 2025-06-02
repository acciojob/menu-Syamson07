import React, { useState } from 'react';
import Menu from './Menu';
import './styles.css';

const allMenuItems = [
  { id: 1, name: 'Pancakes', category: 'Breakfast', image: 'https://via.placeholder.com/100', price: '$5.99' },
  { id: 2, name: 'Burger', category: 'Lunch', image: 'https://via.placeholder.com/100', price: '$8.99' },
  { id: 3, name: 'Strawberry Shake', category: 'Shakes', image: 'https://via.placeholder.com/100', price: '$3.99' },
];

function App() {
  const [menuItems, setMenuItems] = useState(allMenuItems);

  const handleFilter = (category) => {
    setMenuItems(
      category === 'All'
        ? allMenuItems
        : allMenuItems.filter(item => item.category === category)
    );
  };

  return (
    <div id="main" className="app-container">
      <h1>Menu</h1>
      <div className="button-group">
        <button id="filter-btn-1" onClick={() => handleFilter('Breakfast')}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => handleFilter('Lunch')}>Lunch</button>
        <button id="filter-btn-3" onClick={() => handleFilter('Shakes')}>Shakes</button>
      </div>
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
