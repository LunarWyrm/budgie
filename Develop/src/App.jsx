import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Correct imports
import Home from "./pages/Home";
import "./styles/App.css";
import 'bulma/css/bulma.min.css';
import TransactionList from "./pages/Transactions/TransactionList";
import BudgetList from "./pages/Budget/BudgetList";
import GroceryList from "./pages/Grocery/GroceryList";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <img className="budgie-logo" src="\assets\images\Budgie_Logo_V2.png" alt="Budgie Logo" draggable="false" />
          <div className="columns">
            <ul class="menu">
              <li class="menu-list">
                <Link to="/">Home</Link>
              </li>
              <li class="menu-list">
                <Link to="/grocery-list">Grocery</Link>
              </li>
              <li class="menu-list">
                <Link to="/budget-list">Budget</Link>
              </li>
              <li class="menu-list">
                <Link to="/transaction-list">Transactions</Link>
              </li>
            </ul>
          </div>
        </nav>
        
        {/* Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grocery-list" element={<GroceryList />} />
            <Route path="/budget-list" element={<BudgetList />} />
            <Route path="/transaction-list" element={<TransactionList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
