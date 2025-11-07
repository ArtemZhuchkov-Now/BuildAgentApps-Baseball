import React, { useState, useEffect } from 'react';
import { display, value } from '../utils/fields.js';

export default function Dashboard({ service, onNavigate }) {
  const [players, setPlayers] = useState([]);
  const [topHomeRuns, setTopHomeRuns] = useState([]);
  const [topBattingAvgs, setTopBattingAvgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [teamCounts, setTeamCounts] = useState({});

  useEffect(() => {
    loadDashboardData();
  }, [service]);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      // Load data with proper error handling
      const playersData = await service.getPlayers(100);
      const homeRunData = await service.getTopHomeRunHitters(5);
      const battingAvgData = await service.getTopBattingAverages(5);
      
      console.log('Players data:', playersData?.length || 0);
      console.log('Home run data:', homeRunData);
      console.log('Batting avg data:', battingAvgData);
      
      setPlayers(playersData || []);
      setTopHomeRuns(homeRunData || []);
      setTopBattingAvgs(battingAvgData || []);
      
      // Calculate team counts
      const counts = (playersData || []).reduce((acc, player) => {
        const team = display(player.team_name);
        if (team) {
          acc[team] = (acc[team] || 0) + 1;
        }
        return acc;
      }, {});
      setTeamCounts(counts);
      
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      // Set empty arrays on error to prevent UI issues
      setPlayers([]);
      setTopHomeRuns([]);
      setTopBattingAvgs([]);
      setTeamCounts({});
    } finally {
      setLoading(false);
    }
  };

  const getDodgersPlayers = () => {
    return players.filter(player => 
      display(player.team_name).toLowerCase().includes('dodgers')
    );
  };

  const getPlayerNameFromStat = (stat) => {
    // Use the joined playerName field from the enhanced service
    return stat.playerName || display(stat.player) || 'Loading...';
  };

  const getStatValue = (stat, field) => {
    const value = display(stat[field]) || service.getDisplayValue(stat[field]);
    return value || '0';
  };

  if (loading) {
    return <div className="loading">Loading dashboard data...</div>;
  }

  return (
    <div className="dashboard">
      {/* Team Overview */}
      <div className="dashboard-card">
        <h2>🏆 Team Overview</h2>
        {Object.keys(teamCounts).length > 0 ? (
          <div className="team-overview">
            {Object.entries(teamCounts).map(([team, count]) => (
              <div 
                key={team} 
                className="team-card"
                onClick={() => onNavigate('players', team)}
              >
                <h4>{team}</h4>
                <div className="player-count">{count}</div>
                <small>players</small>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No team data available</p>
          </div>
        )}
      </div>

      {/* Top Home Run Hitters */}
      <div className="dashboard-card">
        <h2>💥 Top Home Run Hitters (2024)</h2>
        {topHomeRuns.length > 0 ? (
          <div>
            {topHomeRuns.map((stat, index) => (
              <div key={stat.sys_id?.value || stat.sys_id || index} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '0.5rem 0',
                borderBottom: index < topHomeRuns.length - 1 ? '1px solid #eee' : 'none'
              }}>
                <span style={{ fontWeight: '500' }}>
                  {getPlayerNameFromStat(stat)}
                </span>
                <strong style={{ color: '#f5576c' }}>
                  {getStatValue(stat, 'home_runs')} HRs
                </strong>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No home run data available</p>
            <small>Stats records may still be loading...</small>
          </div>
        )}
      </div>

      {/* Top Batting Averages */}
      <div className="dashboard-card">
        <h2>🎯 Top Batting Averages (2024)</h2>
        {topBattingAvgs.length > 0 ? (
          <div>
            {topBattingAvgs.map((stat, index) => (
              <div key={stat.sys_id?.value || stat.sys_id || index} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '0.5rem 0',
                borderBottom: index < topBattingAvgs.length - 1 ? '1px solid #eee' : 'none'
              }}>
                <span style={{ fontWeight: '500' }}>
                  {getPlayerNameFromStat(stat)}
                </span>
                <strong style={{ color: '#667eea' }}>
                  {parseFloat(getStatValue(stat, 'batting_average')).toFixed(3)}
                </strong>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No batting average data available</p>
            <small>Stats records may still be loading...</small>
          </div>
        )}
      </div>

      {/* LA Dodgers Spotlight */}
      <div className="dashboard-card">
        <h2>⭐ LA Dodgers Roster</h2>
        {getDodgersPlayers().length > 0 ? (
          <div>
            {getDodgersPlayers().slice(0, 8).map(player => (
              <div key={value(player.sys_id)} style={{ 
                padding: '0.75rem 0', 
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <strong>{display(player.player_name)}</strong>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>
                    {display(player.position)} • #{display(player.jersey_number)}
                  </div>
                </div>
                <div style={{ 
                  background: '#1e3c72', 
                  color: 'white', 
                  padding: '0.2rem 0.5rem', 
                  borderRadius: '10px',
                  fontSize: '0.8rem'
                }}>
                  ⭐ {parseFloat(display(player.scout_rating) || 0).toFixed(1)}
                </div>
              </div>
            ))}
            {getDodgersPlayers().length > 8 && (
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button 
                  onClick={() => onNavigate('players', 'Los Angeles Dodgers')}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    cursor: 'pointer'
                  }}
                >
                  View All Dodgers Players
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No Dodgers players found</h3>
            <p>Add some LA Dodgers players to see them here!</p>
          </div>
        )}
      </div>

      {/* Quick Stats Summary */}
      <div className="dashboard-card">
        <h2>📊 Quick Stats</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f5576c' }}>
              {players.length}
            </div>
            <div>Total Players</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>
              {Object.keys(teamCounts).length}
            </div>
            <div>Teams</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#764ba2' }}>
              {topHomeRuns.length + topBattingAvgs.length}
            </div>
            <div>Top Performers</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f093fb' }}>
              2024
            </div>
            <div>Current Season</div>
          </div>
        </div>
      </div>
    </div>
  );
}