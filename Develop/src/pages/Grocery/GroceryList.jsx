// GroceryList.jsx
import React, { useState } from "react";
import GroceryItem from "./GroceryItem";
import { useGroceryContext } from "./GroceryContext";

function GroceryList() {
  const {
    groceryList,
    setGroceryList,
    setTransactions,
    addGroceryItem,
    removeGroceryItem,
    togglePurchased,
  } = useGroceryContext();

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: 1,
    cost: 0,
    datePurchased: new Date().toISOString().split("T")[0],
    purchased: false,
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
    const item = { ...newItem, id: Date.now() };
    addGroceryItem(item);
    setNewItem({
      name: "",
      quantity: 1,
      cost: 0,
      datePurchased: new Date().toISOString().split("T")[0],
      purchased: false,
    });
  };

  const markSelectedAsPurchased = () => {
    const purchasedItems = groceryList.filter((item) => item.purchased);
    console.log('Purchased Items:', purchasedItems); // Debugging log

    // Move purchased items to transactions with timestamp
    setTransactions((prev) => [
      ...prev,
      ...purchasedItems.map((item) => ({
        ...item,
        purchased: true,
        datePurchased: new Date().toISOString(),
      })),
    ]);

    // Remove purchased items from grocery list
    setGroceryList((prev) => {
      const updatedList = prev.filter((item) => !item.purchased);
      console.log('Updated Grocery List:', updatedList); // Debugging log
      return updatedList;
    });
  };

  const removeItem = (id) => {
  removeGroceryItem(id);
};

  return (
    <div className="grocery-list">
      <h2>Grocery List</h2>
      {groceryList.map((item) => (
        <GroceryItem
          key={item.id}
          {...item}
          togglePurchased={() => togglePurchased(item.id)}
          removeItem={() => removeItem(item.id)}
        />
      ))}
      <button onClick={markSelectedAsPurchased} className="mark-purchased-button">
        Mark Selected as Purchased
        </button>

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
