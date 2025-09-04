import React, { useState } from 'react';
import './DemoCard.css';
import './AIRecommendationsCard.css';

const AIRecommendationsCard = () => {
  const [isThinking, setIsThinking] = useState(false);
  const [recommendation, setRecommendation] = useState(
    "Recommend watering Section A for 23 minutes at 7:30 AM tomorrow based on weather forecast and soil moisture levels."
  );
  const [confidence, setConfidence] = useState("83%");

  const recommendations = [
    "Recommend watering Section B for 18 minutes at 6:45 AM based on overnight temperature drop and wind forecast.",
    "Hold irrigation for 12 hours. Rain probability increased to 65%. Monitor soil moisture levels.",
    "Increase watering duration to 28 minutes due to high UV index and low humidity forecast.",
    "Split irrigation: 15 min at 6:30 AM, 12 min at 5:00 PM for optimal water absorption.",
    "Emergency irrigation needed! Soil moisture dropped to 35%. Immediate action recommended."
  ];

  const confidences = ['84%', '76%', '89%', '81%', '92%'];

  const scheduleIrrigation = () => {
    // This would trigger notification in the parent component
    console.log('Irrigation scheduled!');
  };

  const getNewRecommendation = () => {
    setIsThinking(true);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * recommendations.length);
      setRecommendation(recommendations[randomIndex]);
      setConfidence(confidences[randomIndex]);
      setIsThinking(false);
    }, 3000);
  };

  return (
    <div className="demo-card">
      <h3>🤖 AI Recommendations</h3>
      <div className="recommendation">
        {isThinking && <div className="ai-thinking"></div>}
        <strong>Smart Irrigation Alert:</strong><br />
        <span>{recommendation}</span>
      </div>
      
      <div className="metric">
        <span>AI Confidence:</span>
        <span className="metric-value status-good">{confidence}</span>
      </div>
      
      <div className="metric">
        <span>Water Savings:</span>
        <span className="metric-value status-good">₹127 today</span>
      </div>
      
      <div className="button-group">
        <button className="btn" onClick={scheduleIrrigation}>
          ✅ Schedule Irrigation
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={getNewRecommendation}
          disabled={isThinking}
        >
          🔄 Get New AI Analysis
        </button>
      </div>
    </div>
  );
};

export default AIRecommendationsCard;
