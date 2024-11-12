import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GroceryProvider } from './pages/Grocery/GroceryContext';
import "./styles/App.css";

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <GroceryProvider>
        <App />
      </GroceryProvider>
    </React.StrictMode>
  );
}
