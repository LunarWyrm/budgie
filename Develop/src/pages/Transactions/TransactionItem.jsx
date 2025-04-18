// TransactionItem.jsx
import React from "react";

function TransactionItem({ date, name, amount }) {
  return (
    <div className="transaction-item">
      <span>{date}</span>
      <span>{name}</span>
      <span>${amount}</span>
    </div>
  );
}

export default TransactionItem;
