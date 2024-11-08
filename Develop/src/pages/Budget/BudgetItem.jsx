import React from "react";

function BudgetItem({ name, amount }) {
  return (
    <div className="budget-item">
      <span>{name}</span>
      <span>${amount}</span>
    </div>
  );
}

export default BudgetItem;
