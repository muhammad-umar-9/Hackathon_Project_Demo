import React, { useState, useEffect } from 'react';
import './DemoCard.css';
import './SensorDataCard.css';

const SensorDataCard = () => {
  const [sensorData, setSensorData] = useState({
    moisture: 65,
    temperature: 28,
    humidity: 72,
    lastUpdate: '2 min ago'
  });

  // Update sensor data every 30 seconds
  useEffect(() => {
    const updateSensorData = () => {
      const moisture = Math.floor(Math.random() * 20) + 60;
      const temperature = Math.floor(Math.random() * 8) + 25;
      const humidity = Math.floor(Math.random() * 15) + 65;
      const minutes = Math.floor(Math.random() * 5) + 1;

      setSensorData({
        moisture,
        temperature,
        humidity,
        lastUpdate: `${minutes} min ago`
      });
    };

    const interval = setInterval(updateSensorData, 30000);
    return () => clearInterval(interval);
  }, []);

  const getMoistureStatus = (moisture) => {
    if (moisture < 40) return 'status-alert';
    if (moisture < 60) return 'status-warning';
    return 'status-good';
  };

  const getStrokeDashoffset = (moisture) => {
    const circumference = 2 * Math.PI * 60;
    return circumference - (moisture / 100) * circumference;
  };

  return (
    <div className="demo-card">
      <h3>🌡️ Live Sensor Data</h3>
      <div className="chart-container">
        <svg className="progress-ring">
          <circle 
            className="progress-circle" 
            cx="60" 
            cy="60" 
            r="60"
          />
          <circle 
            className="progress-circle-fill" 
            cx="60" 
            cy="60" 
            r="60"
            style={{
              strokeDashoffset: getStrokeDashoffset(sensorData.moisture),
              stroke: sensorData.moisture < 40 ? '#F44336' : 
                     sensorData.moisture < 60 ? '#FF9800' : '#4CAF50'
            }}
          />
        </svg>
        <div 
          className={`progress-text ${getMoistureStatus(sensorData.moisture)}`}
        >
          {sensorData.moisture}%
        </div>
      </div>
      
      <div className="metric">
        <span>Temperature:</span>
        <span className="metric-value">{sensorData.temperature}°C</span>
      </div>
      
      <div className="metric">
        <span>Humidity:</span>
        <span className="metric-value">{sensorData.humidity}%</span>
      </div>
      
      <div className="water-animation">
        <div className="water-wave"></div>
      </div>
      
      <div className="metric">
        <span>Last Updated:</span>
        <span className="metric-value">{sensorData.lastUpdate}</span>
      </div>
    </div>
  );
};

export default SensorDataCard;
