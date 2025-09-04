import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="hero-section">
      <h1>🌾 AgriSmart Demo</h1>
      <p>AI Powered Smart Irrigation & Crop Monitoring System</p>
      <p>
        <span className="live-indicator"></span>
        Live Demo for InnoVista x Systems Hackathon 2025
      </p>
      <div className="feature-highlight">
        <h2>🏆 Student Innovation Project</h2>
        <p>
          <strong>38% Water Savings • 23% Yield Increase • 83% AI Accuracy</strong>
        </p>
        <p className="disclaimer">
          
        </p>
      </div>
    </div>
  );
};

export default Header;
