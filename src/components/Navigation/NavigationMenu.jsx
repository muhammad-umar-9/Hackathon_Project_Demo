import React, { useState } from 'react';
import './NavigationMenu.css';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'farm-overview', name: 'Farm Overview', icon: '🏡' },
    { id: 'sensor-data', name: 'Sensor Data', icon: '📊' },
    { id: 'ai-recommendations', name: 'AI Recommendations', icon: '🤖' },
    { id: 'crop-health', name: 'Crop Health', icon: '🌱' },
    { id: 'weather', name: 'Weather Forecast', icon: '🌤️' },
    { id: 'analytics', name: 'Analytics', icon: '📈' }
  ];

  const scrollToCard = (cardId) => {
    const element = document.getElementById(cardId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="navigation-menu">
      <button 
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="nav-icon">📋</span>
        Dashboard Menu
        <span className={`nav-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="nav-dropdown">
          <div className="nav-dropdown-header">
            <h4>Quick Navigation</h4>
          </div>
          <ul className="nav-menu-list">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button 
                  className="nav-menu-item"
                  onClick={() => scrollToCard(item.id)}
                >
                  <span className="nav-item-icon">{item.icon}</span>
                  <span className="nav-item-text">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="nav-dropdown-footer">
            <small>Click any item to navigate</small>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationMenu;
