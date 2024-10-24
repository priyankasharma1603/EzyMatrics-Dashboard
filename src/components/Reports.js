import React from 'react';
import { jsPDF } from 'jspdf';

const Reports = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("EzyMetrics Report", 10, 10);
    doc.save('report.pdf');
  };

  return (
    <div className="reports">
      <button onClick={generatePDF}>Download Report as PDF</button>
    </div>
  );
};

export default Reports;
