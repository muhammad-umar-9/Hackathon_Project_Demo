import React from 'react';
import './styles/App.css';
import Header from './components/Dashboard/Header';
import DashboardGrid from './components/Dashboard/DashboardGrid';
import ImpactSection from './components/Dashboard/ImpactSection';
import TeamInfo from './components/Dashboard/TeamInfo';
import Footer from './components/Dashboard/Footer';
import NotificationSystem from './components/Common/NotificationSystem';
import NavigationMenu from './components/Navigation/NavigationMenu';

function App() {
  return (
    <div className="app">
      <NavigationMenu />
      <div className="container">
        <Header />
        <DashboardGrid />
        <ImpactSection />
        <TeamInfo />
        <Footer />
      </div>
      <NotificationSystem />
    </div>
  );
}

export default App;
