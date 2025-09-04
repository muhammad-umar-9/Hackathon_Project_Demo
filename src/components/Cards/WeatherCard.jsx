import React, { useState, useEffect } from 'react';
import './DemoCard.css';
import './WeatherCard.css';

const WeatherCard = () => {
  const [weatherIcon, setWeatherIcon] = useState('☀️');
  const weatherIcons = ['☀️', '🌤️', '⛅', '🌦️', '⛈️'];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setWeatherIcon(weatherIcons[currentIndex]);
      currentIndex = (currentIndex + 1) % weatherIcons.length;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="demo-card">
      <h3>🌤️ Smart Weather Integration</h3>
      
      <div className="weather-icon">{weatherIcon}</div>
      
      <div className="metric">
        <span>Today:</span>
        <span className="metric-value">Sunny, 32°C</span>
      </div>
      
      <div className="metric">
        <span>Tomorrow:</span>
        <span className="metric-value">Partly Cloudy, 29°C</span>
      </div>
      
      <div className="metric">
        <span>Rain Forecast:</span>
        <span className="metric-value status-good">20% (3 days)</span>
      </div>
      
      <div className="metric">
        <span>UV Index:</span>
        <span className="metric-value status-warning">High (8/10)</span>
      </div>
      
      <div className="recommendation">
        🤖 <strong>AI Weather Advisory:</strong> Weather suggests reducing irrigation by 15% for next 2 days. Optimal watering window: 6:00-8:00 AM.
      </div>
    </div>
  );
};

export default WeatherCard;
