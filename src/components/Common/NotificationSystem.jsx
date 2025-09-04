import React, { useState, useEffect } from 'react';
import './NotificationSystem.css';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);
  const [nextId, setNextId] = useState(1);

  const alerts = [
    { message: 'Optimal planting window detected for next crop cycle!', type: 'info' },
    { message: 'Water usage 15% below target this week. Excellent progress!', type: 'success' },
    { message: 'High wind alert: Secure crop covers and adjust irrigation timing.', type: 'warning' },
    { message: 'Soil pH levels optimal. Nutrient absorption efficiency at 94%.', type: 'success' },
    { message: 'Market prices favorable. Consider early harvest for premium rates.', type: 'info' }
  ];

  useEffect(() => {
    // Show welcome message
    setTimeout(() => {
      showNotification('Welcome to AgriSmart! Demo is now live with real-time AI monitoring.', 'success');
    }, 2000);

    // Generate smart alerts
    let alertIndex = 0;
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance every interval
        showNotification(alerts[alertIndex].message, alerts[alertIndex].type);
        alertIndex = (alertIndex + 1) % alerts.length;
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const showNotification = (message, type = 'success') => {
    const icons = {
      success: '✅',
      warning: '⚠️',
      info: '💡',
      error: '❌'
    };

    const newNotification = {
      id: nextId,
      message: `${icons[type]} ${message}`,
      type,
      timestamp: Date.now()
    };

    setNotifications(prev => [...prev, newNotification]);
    setNextId(prev => prev + 1);

    // Auto remove after 4 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, 4000);
  };

  return (
    <div className="notification-container">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`notification notification-${notification.type} show`}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default NotificationSystem;
