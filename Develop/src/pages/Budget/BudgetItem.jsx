import React from "react";

function BudgetItem({ name, amount }) {
  return (
    <div className="budget-box">
      <h3>{name}</h3>
      <p>${amount}</p>
    </div>
  );
}

export default BudgetItem;
