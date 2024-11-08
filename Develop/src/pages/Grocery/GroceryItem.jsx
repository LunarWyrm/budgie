import React from "react";

function GroceryItem({ id, name, quantity, cost, datePurchased, purchased, togglePurchased }) {
  return (
    <div className={`grocery-item ${purchased ? "purchased" : ""}`}>
      <input
        type="checkbox"
        checked={purchased}
        onChange={togglePurchased}
      />
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Cost: ${cost.toFixed(2)}</p>
      <p>Date Purchased: {datePurchased || "Not Purchased"}</p>
    </div>
  );
}

export default GroceryItem;
