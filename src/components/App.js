import React, { useState } from 'react';
import Menu from './Menu';
import './styles.css';

const allMenuItems = [
  { id: 1, name: 'Pancakes', category: 'Breakfast', image: 'https://via.placeholder.com/100', price: '$5.99' },
  { id: 2, name: 'Omelette', category: 'Breakfast', image: 'https://via.placeholder.com/100', price: '$4.50' },
  { id: 3, name: 'Burger', category: 'Lunch', image: 'https://via.placeholder.com/100', price: '$8.99' },
  { id: 4, name: 'Grilled Cheese', category: 'Lunch', image: 'https://via.placeholder.com/100', price: '$6.50' },
  { id: 5, name: 'Strawberry Shake', category: 'Shakes', image: 'https://via.placeholder.com/100', price: '$3.99' },
  { id: 6, name: 'Chocolate Shake', category: 'Shakes', image: 'https://via.placeholder.com/100', price: '$4.25' },
];

function App() {
  const [menuItems, setMenuItems] = useState(allMenuItems);
  const [activeCategory, setActiveCategory] = useState('All');

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setMenuItems(allMenuItems);
    } else {
      setMenuItems(allMenuItems.filter(item => item.category === category));
    }
  };

  return (
    <div id="main" className="app-container">
      <h1>Our Menu</h1>
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
