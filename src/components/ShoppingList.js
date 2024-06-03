// src/components/ShoppingList.js
import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName.trim()) return;
    setItems([...items, { name: itemName, category }]);
    setItemName('');
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="ShoppingList">
      <form className="NewItem" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <label>
          Category:
          <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </label>
        <button type="submit">Add to List</button>
      </form>
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.category}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
