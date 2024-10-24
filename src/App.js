import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Only import Routes and Route
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Leads from './components/LeadManagementTable'; // Placeholder for Leads component
import Analytics from './components/AnalyticsCharts'; // Placeholder for Analytics component
import Reports from './components/Reports'; // Placeholder for Reports component
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar /> {/* Add a container for main content */}
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Default route */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>

    </div>
  );
}

export default App;
