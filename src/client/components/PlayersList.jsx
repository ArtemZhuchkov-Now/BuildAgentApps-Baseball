import React, { useState, useEffect } from 'react';
import { display, value } from '../utils/fields.js';

export default function PlayersList({ service, selectedTeam, onTeamFilter }) {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    loadPlayers();
  }, [service]);

  useEffect(() => {
    filterPlayers();
  }, [players, selectedTeam]);

  const loadPlayers = async () => {
    setLoading(true);
    try {
      const playersData = await service.getPlayers(200);
      console.log('Players loaded in PlayersList:', playersData.length);
      setPlayers(playersData);
      
      // Extract unique teams with better filtering
      const uniqueTeams = [...new Set(
        playersData
          .map(player => display(player.team_name))
          .filter(team => team && team.trim() !== '') // Remove empty/null teams
      )].sort();
      
      console.log('Unique teams found:', uniqueTeams);
      setTeams(uniqueTeams);
      
    } catch (error) {
      console.error('Error loading players:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPlayers = () => {
    console.log('Filtering players. Selected team:', selectedTeam);
    console.log('Total players:', players.length);
    
    if (!selectedTeam || selectedTeam.trim() === '') {
      console.log('No team filter, showing all players');
      setFilteredPlayers(players);
    } else {
      const filtered = players.filter(player => {
        const playerTeam = display(player.team_name);
        const matches = playerTeam === selectedTeam;
        if (!matches) {
          console.log(`Player ${display(player.player_name)} team "${playerTeam}" !== "${selectedTeam}"`);
        }
        return matches;
      });
      console.log(`Filtered to ${filtered.length} players for team "${selectedTeam}"`);
      setFilteredPlayers(filtered);
    }
  };

  const handleTeamClick = (team) => {
    console.log('Team clicked:', team);
    onTeamFilter(team);
  };

  const formatHeight = (inches) => {
    if (!inches) return 'N/A';
    const feet = Math.floor(inches / 12);
    const remainingInches = inches % 12;
    return `${feet}'${remainingInches}"`;
  };

  const formatSalary = (salary) => {
    if (!salary) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(salary);
  };

  if (loading) {
    return <div className="loading">Loading players...</div>;
  }

  return (
    <div className="players-container">
      <div className="players-header">
        <h2>
          {selectedTeam ? `${selectedTeam} Players` : 'All Players'} 
          <span style={{ fontSize: '1rem', color: '#666', fontWeight: 'normal' }}>
            ({filteredPlayers.length})
          </span>
        </h2>
        
        <div className="team-filter">
          <button 
            className={`filter-btn ${!selectedTeam ? 'active' : ''}`}
            onClick={() => handleTeamClick('')}
          >
            All Teams ({players.length})
          </button>
          {teams.map(team => {
            const teamCount = players.filter(p => display(p.team_name) === team).length;
            return (
              <button
                key={team}
                className={`filter-btn ${selectedTeam === team ? 'active' : ''}`}
                onClick={() => handleTeamClick(team)}
                title={`${teamCount} players`}
              >
                {team} ({teamCount})
              </button>
            );
          })}
        </div>
      </div>

      {/* Debug info - remove this later */}
      <div style={{ 
        padding: '1rem', 
        background: '#f8f9fa', 
        marginBottom: '1rem', 
        borderRadius: '8px',
        fontSize: '0.9rem',
        color: '#666'
      }}>
        <strong>Debug Info:</strong> Selected team: "{selectedTeam || 'None'}", 
        Total players: {players.length}, 
        Filtered players: {filteredPlayers.length}, 
        Available teams: {teams.join(', ')}
      </div>

      {filteredPlayers.length > 0 ? (
        <div className="players-grid">
          {filteredPlayers.map(player => (
            <div key={value(player.sys_id)} className="player-card">
              <div className="player-header">
                <div className="player-name">
                  {display(player.player_name)}
                </div>
                {display(player.jersey_number) && (
                  <div className="jersey-number">
                    #{display(player.jersey_number)}
                  </div>
                )}
              </div>
              
              <div className="player-details">
                <div>
                  <strong>Team:</strong>{' '}
                  <span className="team">{display(player.team_name)}</span>
                </div>
                
                {display(player.position) && (
                  <div>
                    <strong>Position:</strong>{' '}
                    <span className="position">{display(player.position)}</span>
                  </div>
                )}
                
                <div>
                  <strong>Age:</strong> {display(player.age) || 'N/A'}
                  {display(player.height_inches) && (
                    <>
                      {' • '}
                      <strong>Height:</strong> {formatHeight(parseInt(display(player.height_inches)))}
                    </>
                  )}
                  {display(player.weight_lbs) && (
                    <>
                      {' • '}
                      <strong>Weight:</strong> {display(player.weight_lbs)} lbs
                    </>
                  )}
                </div>

                {(display(player.throws_hand) || display(player.bats_hand)) && (
                  <div>
                    {display(player.throws_hand) && (
                      <>
                        <strong>Throws:</strong> {display(player.throws_hand)}
                      </>
                    )}
                    {display(player.bats_hand) && (
                      <>
                        {display(player.throws_hand) ? ' • ' : ''}
                        <strong>Bats:</strong> {display(player.bats_hand)}
                      </>
                    )}
                  </div>
                )}

                {display(player.salary) && (
                  <div>
                    <strong>Salary:</strong> {formatSalary(parseInt(display(player.salary)))}
                  </div>
                )}

                {display(player.debut_date) && (
                  <div>
                    <strong>MLB Debut:</strong> {new Date(display(player.debut_date)).getFullYear()}
                  </div>
                )}

                {display(player.hometown) && (
                  <div>
                    <strong>Hometown:</strong> {display(player.hometown)}
                  </div>
                )}

                {display(player.college) && (
                  <div>
                    <strong>College:</strong> {display(player.college)}
                  </div>
                )}

                {display(player.scout_rating) && (
                  <div>
                    <strong>Scout Rating:</strong>{' '}
                    <span style={{ 
                      color: parseFloat(display(player.scout_rating)) >= 8 ? '#f5576c' : 
                             parseFloat(display(player.scout_rating)) >= 6 ? '#f093fb' : '#666',
                      fontWeight: 'bold'
                    }}>
                      {parseFloat(display(player.scout_rating)).toFixed(1)}/10
                    </span>
                  </div>
                )}

                {display(player.injury_status) === 'true' && (
                  <div style={{ 
                    color: '#f5576c', 
                    fontWeight: 'bold',
                    marginTop: '0.5rem',
                    padding: '0.3rem 0.6rem',
                    background: 'rgba(245, 87, 108, 0.1)',
                    borderRadius: '10px',
                    fontSize: '0.9rem'
                  }}>
                    🚑 Currently Injured
                  </div>
                )}

                {display(player.notes) && (
                  <div style={{ 
                    marginTop: '1rem',
                    padding: '0.75rem',
                    background: '#f8f9fa',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                    color: '#555'
                  }}>
                    <strong>Notes:</strong> {display(player.notes)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No players found</h3>
          <p>
            {selectedTeam 
              ? `No players found for "${selectedTeam}". Available teams: ${teams.join(', ')}` 
              : 'No players available'
            }
          </p>
        </div>
      )}
    </div>
  );
}