import React, { useState, useEffect } from "react";
import GroceryItem from "./GroceryItem";
import TransactionList from "../Transactions/TransactionList";

function GroceryList() {
  // Placeholder groceries for transactions testing
  const [groceries, setGroceries] = useState([
    { name: "Milk", quantity: 2, cost: 3.50, datePurchased: new Date().toISOString().split('T')[0], purchased: false },
    { name: "Eggs", quantity: 12, cost: 2.99, datePurchased: new Date().toISOString().split('T')[0], purchased: false },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: 1,
    cost: 0,
    datePurchased: new Date().toISOString().split('T')[0],
    purchased: false
  });

  const [transactions, setTransactions] = useState([]);

  // Toggle item's purchased status
  const togglePurchased = (index) => {
    setGroceries((prevGroceries) =>
      prevGroceries.map((item, i) =>
        i === index ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: name === "cost" || name === "quantity" ? parseFloat(value) : value,
    }));
  };

  // Add new grocery item and save to local storage
  const addGrocery = (e) => {
    e.preventDefault();
    const item = { ...newItem, id: Date.now() };  // Adding an ID for uniqueness
    setGroceries((prevGroceries) => [...prevGroceries, item]);
    setNewItem({ name: "", quantity: 1, cost: 0, datePurchased: new Date().toISOString().split('T')[0], purchased: false });

    // Save new grocery list to local storage
    const currentList = JSON.parse(localStorage.getItem("groceryList")) || [];
    currentList.push(item);
    localStorage.setItem("groceryList", JSON.stringify(currentList));
  };

  // Mark purchased and move to transactions
  const markSelectedAsPurchased = () => {
    const purchasedItems = groceries.filter(item => item.purchased);
    const remainingItems = groceries.filter(item => !item.purchased);

    setTransactions((prevTransactions) => [...prevTransactions, ...purchasedItems]);
    setGroceries(remainingItems);

    // Update local storage with new grocery list and transactions
    localStorage.setItem("groceryList", JSON.stringify(remainingItems));
    localStorage.setItem("transactions", JSON.stringify([...transactions, ...purchasedItems]));
  };

  // Load groceries from local storage
  const loadGroceries = () => {
    const savedList = JSON.parse(localStorage.getItem("groceryList")) || [];
    setGroceries(savedList);
    const savedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(savedTransactions);
  };

  useEffect(() => {
    loadGroceries();
  }, []);

  return (
    <div className="grocery-list">
      <h2>Grocery List</h2>
      {groceries.map((item, index) => (
        <GroceryItem
          key={index}
          {...item}
          togglePurchased={() => togglePurchased(index)}
        />
      ))}

      <button onClick={markSelectedAsPurchased}>Mark Selected as Purchased</button>

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
