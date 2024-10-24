import React from 'react';
import LeadManagementTable from './LeadManagementTable';
import AnalyticsCharts from './AnalyticsCharts';
import '../styles/Dashboard.css';
import { FaUsers, FaDollarSign, FaChartLine, FaRegNewspaper } from 'react-icons/fa'; // Importing icons

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">Dashboard</div>
        <input className="search-bar" type="text" placeholder="Search for anything" />
        <div className="nav-icons">
          <div className="notification-bell">🔔</div>
          <div className="user-profile">
            <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png" alt="User" />
            <span>Ravina Raki <br />Product Manager</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="overview">
        <div className="widget">
          <FaRegNewspaper className="widget-icon" /> {/* Icon for new leads */}
          <div className="widget-content">
            <span>Number of new leads today:</span>
            <h3>45</h3>
          </div>
        </div>
        <div className="widget">
          <FaDollarSign className="widget-icon" /> {/* Icon for revenue */}
          <div className="widget-content">
            <span>Total revenue for the month:</span>
            <h3>$12,450</h3>
          </div>
        </div>
        <div className="widget">
          <FaChartLine className="widget-icon" /> {/* Icon for conversion rates */}
          <div className="widget-content">
            <span>Conversion rates:</span>
            <h3>28.4%</h3>
          </div>
        </div>
        <div className="widget">
          <FaUsers className="widget-icon" /> {/* Icon for total users */}
          <div className="widget-content">
            <span>Total users:</span>
            <h3>12M</h3>
          </div>
        </div>
      </div>

      {/* Lead Management Section */}
      <LeadManagementTable />

      {/* Analytics Section */}
      <AnalyticsCharts />
    </div>
  );
};

export default Dashboard;
