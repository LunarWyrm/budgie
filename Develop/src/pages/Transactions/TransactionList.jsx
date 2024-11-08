import React from "react";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const transactions = [
    { date: "2024-11-03", name: "Groceries", amount: 50 },
    { date: "2024-11-04", name: "Rent", amount: 1200 },
  ];

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} {...transaction} />
      ))}
    </div>
  );
}

export default TransactionList;
