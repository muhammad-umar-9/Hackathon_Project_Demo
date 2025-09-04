import React from 'react';
import './DemoCard.css';

const FarmOverviewCard = () => {
  return (
    <div className="demo-card">
      <h3>📊 Rajesh's Farm Dashboard</h3>
      <div className="metric">
        <span>Farm Location:</span>
        <span className="metric-value">Ludhiana, Punjab</span>
      </div>
      <div className="metric">
        <span>Total Area:</span>
        <span className="metric-value">4.7 acres</span>
      </div>
      <div className="metric">
        <span>Active Crops:</span>
        <span className="metric-value">Basmati Rice, Potato</span>
      </div>
      <div className="metric">
        <span>Water Saved This Month:</span>
        <span className="metric-value status-good">38%</span>
      </div>
    </div>
  );
};

export default FarmOverviewCard;
