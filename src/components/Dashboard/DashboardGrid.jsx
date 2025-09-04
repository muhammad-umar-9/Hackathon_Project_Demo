import React from 'react';
import './DashboardGrid.css';
import FarmOverviewCard from '../Cards/FarmOverviewCard';
import SensorDataCard from '../Cards/SensorDataCard';
import AIRecommendationsCard from '../Cards/AIRecommendationsCard';
import CropHealthCard from '../Cards/CropHealthCard';
import WeatherCard from '../Cards/WeatherCard';
import AnalyticsCard from '../Cards/AnalyticsCard';

const DashboardGrid = () => {
  return (
    <div className="demo-grid">
      <div id="farm-overview"><FarmOverviewCard /></div>
      <div id="sensor-data"><SensorDataCard /></div>
      <div id="ai-recommendations"><AIRecommendationsCard /></div>
      <div id="crop-health"><CropHealthCard /></div>
      <div id="weather"><WeatherCard /></div>
      <div id="analytics"><AnalyticsCard /></div>
    </div>
  );
};

export default DashboardGrid;
