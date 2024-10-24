import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaChartPie, FaUsers, FaFileAlt, FaChartBar } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Ezy<span>Metrics</span></h2>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard"><FaChartPie /> Dashboard</Link>
          </li>
          <li>
            <Link to="/leads"><FaUsers /> Leads</Link>
          </li>
          <li>
            <Link to="/analytics"><FaChartBar /> Analytics</Link>
          </li>
          <li>
            <Link to="/reports"><FaFileAlt /> Reports</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
