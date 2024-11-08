import React, { useState } from "react";
import GroceryItem from "./GroceryItem";

function GroceryList() {
  //placeholder groceries for transactions testing
  const [groceries, setGroceries] = useState([
    { name: "Milk", quantity: 2, cost: 3.50, datePurchased: new Date().toISOString().split('T')[0] },
    { name: "Eggs", quantity: 12, cost: 2.99, datePurchased: new Date().toISOString().split('T')[0] },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: 1,
    cost: 0,
    datePurchased: new Date().toISOString().split('T')[0]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: name === "cost" || name === "quantity" ? parseFloat(value) : value,
    }));
  };

  const addGrocery = (e) => {
    e.preventDefault();
    setGroceries((prevGroceries) => [...prevGroceries, newItem]);
    setNewItem({ name: "", quantity: 1, cost: 0, datePurchased: new Date().toISOString().split('T')[0] });
  };

  return (
    <div className="grocery-list">
      <h2>Grocery List</h2>
      {groceries.map((item, index) => (
        <GroceryItem key={index} {...item} />
      ))}

      <form onSubmit={addGrocery}>
        <input
          type="text"
          name="name"
          value={newItem.name}
          placeholder="Item Name"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="quantity"
          value={newItem.quantity}
          min="1"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="cost"
          value={newItem.cost}
          min="0"
          step="0.01"
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="datePurchased"
          value={newItem.datePurchased}
          onChange={handleInputChange}
        />
        <button type="submit">Add Grocery</button>
      </form>
    </div>
  );
}

export default GroceryList;
