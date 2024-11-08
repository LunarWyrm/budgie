import React, { createContext, useState, useContext, useEffect } from "react";

const GroceryContext = createContext();

export const GroceryProvider = ({ children }) => {
  const [groceryList, setGroceryList] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // Loads grocery list from local storage
  useEffect(() => {
    const storedGroceryList = JSON.parse(localStorage.getItem("groceryList"));
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedGroceryList) setGroceryList(storedGroceryList);
    if (storedTransactions) setTransactions(storedTransactions);
  }, []);

  // save grocery list when it changes
  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [groceryList, transactions]);

  const addGroceryItem = (item) => {
    setGroceryList((prevList) => [...prevList, item]);
  };

  const removeGroceryItem = (itemId) => {
    setGroceryList((prevList) => prevList.filter((item) => item.id !== itemId));
  };

  const togglePurchased = (itemId) => {
    const updatedGroceryList = groceryList.map((item) =>
      item.id === itemId ? { ...item, purchased: !item.purchased } : item
    );
    setGroceryList(updatedGroceryList);

    const purchasedItem = updatedGroceryList.find((item) => item.id === itemId);
    if (purchasedItem && purchasedItem.purchased) {
      setTransactions((prevTransactions) => [
        ...prevTransactions,
        { ...purchasedItem, purchaseDate: new Date().toISOString() },
      ]);
    }
  };

  return (
    <GroceryContext.Provider
      value={{
        groceryList,
        transactions,
        addGroceryItem,
        removeGroceryItem,
        togglePurchased,
      }}
    >
      {children}
    </GroceryContext.Provider>
  );
};

export const useGroceryContext = () => {
  return useContext(GroceryContext);
};
