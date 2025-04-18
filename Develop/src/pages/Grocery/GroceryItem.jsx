// GroceryItem.jsx
import React from "react";

function GroceryItem({ id, name, quantity, cost, datePurchased, purchased, togglePurchased, removeItem }) {
  return (
    <div className={`grocery-item ${purchased ? "purchased" : ""}`}>
      <div className="check-indicator" onClick={togglePurchased}>
        <i className="fa-solid fa-check"></i>
      </div>
      <div className="grocery-item-info">
        <div className="grocery-item-details">
          <h3>{name}</h3>
          <p>Quantity: {quantity}</p>
          <p>Cost: ${cost.toFixed(2)}</p>
          <p>Date Purchased: {datePurchased || "Not Purchased"}</p>
        </div>
      </div>
      <button className="delete-btn" onClick={() => removeItem(id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>

  );
}

export default GroceryItem;
