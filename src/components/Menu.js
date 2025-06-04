import React from "react";

const Menu = ({ items, category }) => {
  const filteredItems = category === "All"
    ? items
    : items.filter(item => item.category === category);

  return (
    <div className="menu-container">
      {filteredItems.map(item => (
        <div
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category.toLowerCase()}`}
        >
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
