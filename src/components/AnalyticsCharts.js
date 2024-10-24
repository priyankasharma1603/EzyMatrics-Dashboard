import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import '../styles/AnalyticsCharts.css';

// Register chart.js elements
ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AnalyticsCharts = () => {
  // Data for Pie Chart
  const pieData = {
    labels: ['Lead Growth', 'Total Revenue'],
    datasets: [
      {
        label: 'Metrics',
        data: [22, 62],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#5AD3FF', '#FF99A4'],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  // Data for Bar Chart
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue (in $)',
        data: [5000, 7000, 8000, 6000, 10000, 12000],
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  // Bar chart options
  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Revenue ($)',
          color: '#4e8cff',
          font: {
            size: 16,
          },
        },
        grid: {
          color: '#e0e0e0', // Color of the grid lines
        },
      },
      x: {
        title: {
          display: true,
          text: 'Months',
          color: '#4e8cff',
          font: {
            size: 16,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#333', // Legend text color
        },
      },
    },
  };

  return (
    <div className="charts-container">
      <div className="chart pie-chart-container">
        <h3>Pie Chart</h3>
        <Pie data={pieData} />
      </div>
      <div className="chart bar-chart-container">
        <h3>Bar Chart</h3>
        <Bar data={barData} options={barOptions} height={400} /> {/* Increased height */}
      </div>
    </div>
  );
};

export default AnalyticsCharts;
