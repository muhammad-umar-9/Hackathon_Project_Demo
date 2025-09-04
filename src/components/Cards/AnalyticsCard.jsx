import { useState, useEffect } from 'react';
import './AnalyticsCard.css';
import './DemoCard.css';

function AnalyticsCard() {
  const [efficiency, setEfficiency] = useState(0);
  const [waterSaved, setWaterSaved] = useState(0);
  const [roiValue, setRoiValue] = useState(0);

  useEffect(() => {
    // Animate the numbers on component mount
    const timer1 = setTimeout(() => setEfficiency(85), 500);
    const timer2 = setTimeout(() => setWaterSaved(2340), 700);
    const timer3 = setTimeout(() => setRoiValue(140), 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);
  return (
    <div className="analytics-card">
      <div className="analytics-header">
        <div className="analytics-icon">📊</div>
        <h3 className="analytics-title">Performance Analytics</h3>
      </div>
      
      <div className="analytics-grid">
        <div className="analytics-metric">
          <span className="metric-value">{waterSaved}L</span>
          <div className="metric-label">Water Saved</div>
        </div>
        
        <div className="analytics-metric">
          <span className="metric-value">{roiValue}%</span>
          <div className="metric-label">ROI Increase</div>
        </div>
      </div>
      
      <div className="efficiency-bar">
        <div 
          className="efficiency-fill" 
          style={{width: `${efficiency}%`}}
        ></div>
      </div>
      <div className="efficiency-text">
        Farm Efficiency: 
        <span className="efficiency-percentage">{efficiency}%</span>
      </div>
    </div>
  );
};

export default AnalyticsCard;
