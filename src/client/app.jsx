import React, { useState, useMemo } from 'react';
import { BaseballScoutingService } from './services/BaseballScoutingService.js';
import Dashboard from './components/Dashboard.jsx';
import PlayersList from './components/PlayersList.jsx';
import PlayerStats from './components/PlayerStats.jsx';
import './app.css';

export default function App() {
  const service = useMemo(() => new BaseballScoutingService(), []);
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedTeam, setSelectedTeam] = useState('');

  const navigate = (view, team = '') => {
    console.log('Navigate called:', { view, team });
    setCurrentView(view);
    setSelectedTeam(team);
    window.location.hash = team ? `${view}/${encodeURIComponent(team)}` : view;
  };

  const handleTeamFilter = (team) => {
    console.log('Team filter changed to:', team);
    setSelectedTeam(team);
    // Update the hash without changing the view
    window.location.hash = team ? `players/${encodeURIComponent(team)}` : 'players';
  };

  // Handle hash-based routing for bookmarking
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'dashboard';
      const [view, encodedTeam] = hash.split('/');
      const team = encodedTeam ? decodeURIComponent(encodedTeam) : '';
      
      console.log('Hash changed:', { hash, view, team });
      setCurrentView(view);
      setSelectedTeam(team);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderNav = () => (
    <nav className="main-nav">
      <div className="nav-brand">
        <h1>⚾ Baseball Scouting</h1>
      </div>
      <div className="nav-links">
        <button 
          className={currentView === 'dashboard' ? 'active' : ''}
          onClick={() => navigate('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={currentView === 'players' ? 'active' : ''}
          onClick={() => navigate('players')}
        >
          Players {selectedTeam && currentView === 'players' && (
            <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
              ({selectedTeam})
            </span>
          )}
        </button>
        <button 
          className={currentView === 'stats' ? 'active' : ''}
          onClick={() => navigate('stats')}
        >
          Statistics
        </button>
      </div>
    </nav>
  );

  const renderView = () => {
    switch(currentView) {
      case 'players':
        return (
          <PlayersList 
            service={service} 
            selectedTeam={selectedTeam}
            onTeamFilter={handleTeamFilter}
          />
        );
      case 'stats':
        return <PlayerStats service={service} />;
      default:
        return <Dashboard service={service} onNavigate={navigate} />;
    }
  };

  return (
    <div className="baseball-app">
      {renderNav()}
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  );
}