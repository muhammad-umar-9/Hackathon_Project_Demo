import React from 'react';
import './DemoCard.css';
import './CropHealthCard.css';

const CropHealthCard = () => {
  const analyzeCrop = () => {
    console.log('Analyzing crop image...');
  };

  const simulateDisease = () => {
    const diseases = [
      { name: 'Early Blight', confidence: '92%', treatment: 'Copper fungicide', severity: 'Medium' },
      { name: 'Powdery Mildew', confidence: '88%', treatment: 'Sulfur spray', severity: 'Low' },
      { name: 'Bacterial Spot', confidence: '85%', treatment: 'Copper bactericide', severity: 'High' },
      { name: 'Healthy Crop', confidence: '96%', treatment: 'No action needed', severity: 'None' }
    ];
    
    const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
    console.log(`Disease detected: ${randomDisease.name}`);
  };

  return (
    <div className="demo-card">
      <h3>🌱 AI Crop Health Analysis</h3>
      
      <div className="crop-image">
        <span className="floating-icon">🌿</span>
        <span className="camera-icon">📸</span>
      </div>
      
      <div className="metric">
        <span>Overall Health:</span>
        <span className="metric-value status-good">Good (89%)</span>
      </div>
      
      <div className="metric">
        <span>Disease Risk:</span>
        <span className="metric-value status-warning">Low (18%)</span>
      </div>
      
      <div className="metric">
        <span>Growth Stage:</span>
        <span className="metric-value">Flowering (Stage 3/5)</span>
      </div>
      
      <div className="metric">
        <span>Predicted Yield:</span>
        <span className="metric-value status-good">+23% vs last year</span>
      </div>
      
      <div className="button-group">
        <button className="btn" onClick={analyzeCrop}>
          📱 Upload Crop Image
        </button>
        <button className="btn btn-danger" onClick={simulateDisease}>
          🔬 Simulate Disease Detection
        </button>
      </div>
    </div>
  );
};

export default CropHealthCard;
