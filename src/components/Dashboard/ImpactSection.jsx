import React from 'react';
import './ImpactSection.css';

const ImpactSection = () => {
  return (
    <div className="feature-highlight">
      <h2>🎯 Real-World Impact Demonstration</h2>
      <div className="impact-grid">
        <div className="impact-item">
          <div className="impact-icon">💧</div>
          <div className="impact-number">1.2M</div>
          <div className="impact-label">Liters Water Saved Daily</div>
        </div>
        <div className="impact-item">
          <div className="impact-icon">🌾</div>
          <div className="impact-number">500+</div>
          <div className="impact-label">Farms Using AI Recommendations</div>
        </div>
        <div className="impact-item">
          <div className="impact-icon">🚀</div>
          <div className="impact-number">83%</div>
          <div className="impact-label">Disease Detection Accuracy</div>
        </div>
        <div className="impact-item">
          <div className="impact-icon">💰</div>
          <div className="impact-number">₹1.8L</div>
          <div className="impact-label">Avg Annual Savings</div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
