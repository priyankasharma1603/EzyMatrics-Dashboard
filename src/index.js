import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import './App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router> {/* Wrap the App component with Router here */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
