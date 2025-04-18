import React from "react";
import BudgetItem from "./BudgetItem";

function BudgetList() {
  const budgets = [
    { name: "Monthly Budget ", amount: 2000 },
    { name: "Savings Goal ", amount: 500 },
  ];

  return (
    <div className="budget-list">
      <h2 className="titles">Budgets</h2>
      {budgets.map((budget, index) => (
        <BudgetItem key={index} {...budget} />
      ))}
    </div>
  );
}

export default BudgetList;
