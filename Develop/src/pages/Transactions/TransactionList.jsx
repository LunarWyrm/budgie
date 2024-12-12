import React, { useState, useEffect } from 'react';
import { useGroceryContext } from "../Grocery/GroceryContext";

function TransactionList() {
  const { transactions, setTransactions } = useGroceryContext();

  useEffect(() => {
    console.log("useEffect triggered to load transactions");
  
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedTransactions) {
      setTransactions(storedTransactions);
      console.log("Transactions loaded from local storage:", storedTransactions);
    } else {
      console.log("No transactions found in local storage");
    }
  }, [setTransactions]);
  
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  console.log("Current transactions:", transactions);

  // Displays transactions table
  return (
    <div className="content">
      <h2>Transactions</h2>
      {(transactions || []).length === 0 ? (
        <p>You have no transactions yet. Add one with the plus icon!</p>
      ) : (
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Cost</th>
              <th>Date Purchased</th>
            </tr>
          </thead>
          <tbody>
            {transactions
            .filter((transaction) => transaction.purchased)
            .map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.name}</td>
                <td>{transaction.quantity}</td>
                <td>${transaction.cost.toFixed(2)}</td>
                <td>
                  <span title={new Date(transaction.datePurchased).toLocaleDateString("en-US", { year: 'numeric', month: 'numeric', day: 'numeric' })}>
                    {new Date(transaction.datePurchased).toLocaleDateString("en-US", { month: 'numeric', day: 'numeric' })}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TransactionList;
