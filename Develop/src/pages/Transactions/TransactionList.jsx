import React, { useEffect } from 'react';
import { useGroceryContext } from "../Grocery/GroceryContext";

function TransactionList() {
  const { transactions, removeTransactionItem } = useGroceryContext(); // include the delete function

  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions]);

  return (
    <div className="content">
      <h2>Transactions</h2>
      {transactions.length === 0 ? (
        <p>You have no transactions yet. Add one with the plus icon!</p>
      ) : (
        <table className="transactions-table">
          <thead className="transactions-head">
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Cost</th>
              <th>Date Purchased</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions
              .filter((transaction) => transaction.purchased)
              .map((transaction, index) => (
                <tr
                key={transaction.id}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
                >
                  <td>{transaction.name}</td>
                  <td>{transaction.quantity}</td>
                  <td>${transaction.cost.toFixed(2)}</td>
                  <td>{new Date(transaction.datePurchased).toLocaleDateString()}</td>
                  <td>
                    <button className="delete-btn" onClick={() => removeTransactionItem(transaction.id)}><i className="fa-solid fa-trash"></i></button>
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