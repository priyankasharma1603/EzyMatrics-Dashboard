import React from 'react';
import { FaCheckCircle, FaClock, FaExclamationCircle } from 'react-icons/fa'; // Icons for status
import '../styles/LeadManagementTable.css';

const LeadManagementTable = () => {
  const leads = [
    { name: "John Singh", email: "john@gmail.com", status: "completed", dueDate: "12 March 2024", progress: "90%" },
    { name: "John Singh", email: "john@gmail.com", status: "pending", dueDate: "12 March 2024", progress: "90%" },
    { name: "John Singh", email: "john@gmail.com", status: "due", dueDate: "12 March 2024", progress: "90%" },
  ];

  const renderStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <FaCheckCircle className="status-icon completed" />;
      case "pending":
        return <FaClock className="status-icon pending" />;
      case "due":
        return <FaExclamationCircle className="status-icon due" />;
      default:
        return null;
    }
  };

  return (
    <div className="lead-management">
      <h3>Lead Management Table</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={index} className="table-row">
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td className={`status ${lead.status}`}>
                {renderStatusIcon(lead.status)} {lead.status}
              </td>
              <td>{lead.dueDate}</td>
              <td>{lead.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadManagementTable;
