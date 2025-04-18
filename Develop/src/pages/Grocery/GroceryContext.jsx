// GroceryContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

const GroceryContext = createContext();

export function GroceryProvider({ children }) {
  const [groceryList, setGroceryList] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // Only load once on first mount
  useEffect(() => {
    const storedGroceryList = JSON.parse(localStorage.getItem("groceryList"));
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedGroceryList) setGroceryList(storedGroceryList);
    if (storedTransactions) setTransactions(storedTransactions);
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [groceryList, transactions]);

  const addGroceryItem = (item) => {
    setGroceryList((prevList) => [...prevList, item]);
  };

  const removeGroceryItem = (itemId) => {
    setGroceryList((prevList) =>
      prevList.filter((item) => item.id !== itemId)
    );
  };

  const removeTransactionItem = (itemId) => {
    setTransactions((prevList) =>
      prevList.filter((item) => item.id !== itemId)
    );
  };
  
  const togglePurchased = (itemId) => {
    setGroceryList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  return (
    <GroceryContext.Provider
      value={{
        groceryList,
        setGroceryList,
        transactions,
        setTransactions,
        addGroceryItem,
        removeGroceryItem,
        removeTransactionItem,
        togglePurchased,
      }}
    >
      {children}
    </GroceryContext.Provider>
  );
}

export const useGroceryContext = () => useContext(GroceryContext);
