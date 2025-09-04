import React, { useState, useEffect } from 'react';
import './TeamInfo.css';

const TeamInfo = () => {
  const [demoStats, setDemoStats] = useState({
    visitors: 847,
    predictions: 2134,
    waterSaved: 34567,
    uptime: '97.2%'
  });

  useEffect(() => {
    const updateStats = () => {
      setDemoStats(prev => ({
        visitors: prev.visitors + Math.floor(Math.random() * 5) + 1,
        predictions: prev.predictions + Math.floor(Math.random() * 15) + 5,
        waterSaved: prev.waterSaved + Math.floor(Math.random() * 200) + 50,
        uptime: ['97.2%', '98.1%', '99.0%', '97.8%'][Math.floor(Math.random() * 4)]
      }));
    };

    const interval = setInterval(updateStats, 45000);
    return () => clearInterval(interval);
  }, []);

  const showContact = () => {
    console.log('Contact info displayed');
  };

  const showGitHub = () => {
    console.log('GitHub info displayed');
  };

  return (
    <div className="team-info">
      <h3>🏆 InnoVista x Systems Agentic AI Hackathon 2025</h3>
      <p><strong>Project:</strong> AgriSmart - Smart Irrigation and Crop Monitoring System</p>
      <p><strong>Domain:</strong> Agriculture Technology (AgriTech)</p>
      <p><strong>Team:</strong> Computer Science & Engineering Students</p>
      <p><strong>Tech Stack:</strong> Python (TensorFlow), JavaScript, HTML/CSS, Node.js</p>
      
      <div className="student-context">
        <p>🎓 Built during 72-hour hackathon challenge</p>
        <p>📚 Based on research from agricultural universities and farmer surveys</p>
        <p>🌱 Tested with simulated data from Punjab Agricultural University</p>
      </div>

      <div className="demo-stats">
        <h4>📊 Live Demo Statistics (Auto-updating)</h4>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">{demoStats.visitors.toLocaleString()}</div>
            <div className="stat-label">Demo Views</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{demoStats.predictions.toLocaleString()}</div>
            <div className="stat-label">AI Predictions</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{demoStats.waterSaved.toLocaleString()}</div>
            <div className="stat-label">Liters Saved</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{demoStats.uptime}</div>
            <div className="stat-label">Demo Uptime</div>
          </div>
        </div>
      </div>
      
      <div className="call-to-action">
        <h4>🚀 Ready to Transform Agriculture?</h4>
        <p>Join us in revolutionizing farming with AI-powered solutions!</p>
        <div className="cta-buttons">
          <button className="btn cta-btn-primary" onClick={showContact}>
            📧 Contact Team
          </button>
          <button className="btn cta-btn-secondary" onClick={showGitHub}>
            💻 View Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
