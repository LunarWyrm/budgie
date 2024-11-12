import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Correct imports
import Home from "./pages/Home";
import "./styles/App.css";
import TransactionList from "./pages/Transactions/TransactionList";
import BudgetList from "./pages/Budget/BudgetList";
import GroceryList from "./pages/Grocery/GroceryList";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/grocery-list">Grocery</Link>
            </li>
            <li>
              <Link to="/budget-list">Budget</Link>
            </li>
            <li>
              <Link to="/transaction-list">Transactions</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grocery-list" element={<GroceryList />} />
          <Route path="/budget-list" element={<BudgetList />} />
          <Route path="/transaction-list" element={<TransactionList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
