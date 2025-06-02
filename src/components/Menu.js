import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="menu-container">
      {items.map((item) => {
        const dataTestId = `menu-item-${item.category.toLowerCase()}`;
        return (
          <div className="menu-item" key={item.id} data-test-id={dataTestId}>
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="menu-info">
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <small>{item.category}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
