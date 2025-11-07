import React, { useState, useEffect } from 'react';
import { display, value } from '../utils/fields.js';

export default function PlayerStats({ service }) {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, [service]);

  const loadStats = async () => {
    setLoading(true);
    try {
      const statsData = await service.getAllStatsWithPlayerNames(2024);
      console.log('Stats data loaded:', statsData);
      setStats(statsData || []);
    } catch (error) {
      console.error('Error loading stats:', error);
      setStats([]);
    } finally {
      setLoading(false);
    }
  };

  const formatStat = (stat) => {
    if (!stat || stat === '0') return '-';
    const num = parseFloat(stat);
    return num % 1 === 0 ? num.toString() : num.toFixed(3);
  };

  const getPlayerName = (stat) => {
    // Use the enhanced playerName field from the service
    if (stat.playerName && stat.playerName !== 'Unknown Player') {
      return stat.playerName;
    }
    
    // Fallback to trying the player reference field
    const playerDisplayValue = display(stat.player);
    if (playerDisplayValue && playerDisplayValue !== '') {
      return playerDisplayValue;
    }
    
    // Final fallback
    return 'Player ID: ' + (value(stat.player) || 'Unknown');
  };

  const getStatValue = (stat, field) => {
    return display(stat[field]) || service.getDisplayValue(stat[field]) || '';
  };

  if (loading) {
    return <div className="loading">Loading statistics...</div>;
  }

  if (stats.length === 0) {
    return (
      <div className="stats-container">
        <h2>📊 2024 Season Statistics</h2>
        <div className="empty-state">
          <h3>No statistics available</h3>
          <p>Player statistics will appear here once data is added.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="stats-container">
      <h2>📊 2024 Season Statistics</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        Found {stats.length} player stat records for the 2024 season
      </p>
      
      <div style={{ overflowX: 'auto' }}>
        <table className="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Team</th>
              <th>GP</th>
              <th>AVG</th>
              <th>HR</th>
              <th>RBI</th>
              <th>R</th>
              <th>H</th>
              <th>2B</th>
              <th>3B</th>
              <th>SB</th>
              <th>BB</th>
              <th>SO</th>
              <th>OBP</th>
              <th>SLG</th>
              <th>OPS</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat, index) => (
              <tr key={value(stat.sys_id) || index}>
                <td style={{ fontWeight: 'bold', minWidth: '150px' }}>
                  {getPlayerName(stat)}
                </td>
                <td style={{ minWidth: '120px' }}>
                  {stat.playerTeam || 'Unknown Team'}
                </td>
                <td>{formatStat(getStatValue(stat, 'games_played'))}</td>
                <td className={parseFloat(getStatValue(stat, 'batting_average') || 0) >= 0.300 ? 'stat-highlight' : ''}>
                  {formatStat(getStatValue(stat, 'batting_average'))}
                </td>
                <td className={parseInt(getStatValue(stat, 'home_runs') || 0) >= 20 ? 'stat-highlight' : ''}>
                  {formatStat(getStatValue(stat, 'home_runs'))}
                </td>
                <td className={parseInt(getStatValue(stat, 'runs_batted_in') || 0) >= 80 ? 'stat-highlight' : ''}>
                  {formatStat(getStatValue(stat, 'runs_batted_in'))}
                </td>
                <td>{formatStat(getStatValue(stat, 'runs_scored'))}</td>
                <td>{formatStat(getStatValue(stat, 'hits'))}</td>
                <td>{formatStat(getStatValue(stat, 'doubles'))}</td>
                <td>{formatStat(getStatValue(stat, 'triples'))}</td>
                <td>{formatStat(getStatValue(stat, 'stolen_bases'))}</td>
                <td>{formatStat(getStatValue(stat, 'walks'))}</td>
                <td>{formatStat(getStatValue(stat, 'strikeouts'))}</td>
                <td>{formatStat(getStatValue(stat, 'on_base_percentage'))}</td>
                <td>{formatStat(getStatValue(stat, 'slugging_percentage'))}</td>
                <td className={parseFloat(getStatValue(stat, 'ops') || 0) >= 0.900 ? 'stat-highlight' : ''}>
                  {formatStat(getStatValue(stat, 'ops'))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
        <p>
          <strong>Legend:</strong> GP = Games Played, AVG = Batting Average, HR = Home Runs, 
          RBI = Runs Batted In, R = Runs, H = Hits, 2B = Doubles, 3B = Triples, 
          SB = Stolen Bases, BB = Walks, SO = Strikeouts, OBP = On-Base Percentage, 
          SLG = Slugging Percentage, OPS = On-Base Plus Slugging
        </p>
        <p style={{ color: '#f5576c', fontWeight: 'bold' }}>
          Highlighted stats indicate exceptional performance (AVG ≥ .300, HR ≥ 20, RBI ≥ 80, OPS ≥ .900)
        </p>
      </div>
    </div>
  );
}