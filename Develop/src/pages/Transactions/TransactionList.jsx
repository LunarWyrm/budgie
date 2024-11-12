import React from "react";
import { useGroceryContext } from "../Grocery/GroceryContext";

function TransactionList() {
  const { transactions } = useGroceryContext();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const shortDate = date.toLocaleDateString(undefined, { month: 'numeric', day: 'numeric' });
    const fullDate = date.toLocaleDateString(undefined, { month: 'numeric', day: 'numeric', year: 'numeric' });
    return { shortDate, fullDate };
  };

  return (
    <div>
      <h2>Transactions</h2>
      {transactions.length === 0 ? (
        <p>You have no transactions yet. Add one with the plus icon!</p>
      ) : (
        <div className="transactions">
          {transactions.map((transaction, index) => {
            const { shortDate, fullDate } = formatDate(transaction.datePurchased);
            return (
              <div key={index}>
                <h3 title={fullDate}>{transaction.name} ({shortDate})</h3>
                <p>Quantity: {transaction.quantity}</p>
                <p>Cost: ${transaction.cost.toFixed(2)}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TransactionList;
