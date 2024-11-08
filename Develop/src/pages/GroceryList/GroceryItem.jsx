// src/pages/GroceryList/GroceryItem.jsx
import React, { useState } from "react";

function GroceryItem({ name, quantity, cost, datePurchased }) {
  const [purchased, setPurchased] = useState(false);
  
  const today = new Date().toISOString().split('T')[0];
  const [purchaseDate, setPurchaseDate] = useState(datePurchased || today);

  return (
    <div className={`grocery-item ${purchased ? "purchased" : ""}`}>
      <span><strong>{name}</strong> - Quantity: {quantity}</span>
      <div>Cost: ${cost.toFixed(2)}</div>
      <div>
        Date Purchased: 
        <input 
          type="date" 
          value={purchaseDate} 
          onChange={(e) => setPurchaseDate(e.target.value)} 
        />
      </div>
      <button onClick={() => setPurchased(!purchased)}>
        {purchased ? "Undo" : "Mark as Purchased"}
      </button>
    </div>
  );
}

export default GroceryItem;
