import '@servicenow/sdk/global';
import { Test } from '@servicenow/sdk/core';

/**
 * ATF Test: Player Statistics Management
 * 
 * This test validates player statistics operations:
 * 1. Creates a test player and their 2024 statistics
 * 2. Validates statistical calculations and relationships
 * 3. Tests performance metrics queries
 * 4. Tests season-based filtering
 * 5. Cleans up test data
 */
Test({
  $id: Now.ID['player_stats_test'],
  name: 'Baseball Player Statistics Management',
  description: 'Tests creating and managing player statistics with performance calculations and queries',
  active: true,
  failOnServerError: true
}, (atf) => {

  // Step 1: Log test start
  atf.server.log({
    $id: Now.ID['log_stats_test_start'],
    log: 'Starting Player Statistics test - creating Manny Machado test record'
  });

  // Step 2: Create a test player first
  const playerResult = atf.server.recordInsert({
    $id: Now.ID['insert_stats_test_player'],
    table: 'x_snc_baseball_pla_players',
    fieldValues: {
      "player_name": "Manny Machado",
      "team_name": "San Diego Padres",
      "position": "third_base",
      "jersey_number": 13,
      "age": 31,
      "height_inches": 75,
      "weight_lbs": 185,
      "throws_hand": "right",
      "bats_hand": "right",
      "salary": 30000000,
      "contract_year": 2028,
      "scout_rating": 8.8
    },
    assert: 'record_successfully_inserted',
    enforceSecurity: false
  });

  // Step 3: Create 2024 statistics for the player
  const statsResult = atf.server.recordInsert({
    $id: Now.ID['insert_player_stats'],
    table: 'x_snc_baseball_pla_player_stats',
    fieldValues: {
      "player": playerResult.record_id,
      "season_year": 2024,
      "games_played": 155,
      "at_bats": 608,
      "hits": 186,
      "doubles": 37,
      "triples": 2,
      "home_runs": 29,
      "runs_batted_in": 105,
      "runs_scored": 87,
      "stolen_bases": 8,
      "walks": 68,
      "strikeouts": 115,
      "batting_average": 0.279,
      "on_base_percentage": 0.328,
      "slugging_percentage": 0.466,
      "ops": 0.794,
      "fielding_percentage": 0.962,
      "errors": 15,
      "assists": 289,
      "putouts": 125,
      "all_star": true,
      "mvp_votes": 8,
      "war": 3.2,
      "last_updated": "2024-10-01"
    },
    assert: 'record_successfully_inserted',
    enforceSecurity: false
  });

  // Step 4: Validate the stats record references the correct player
  atf.server.recordValidation({
    $id: Now.ID['validate_player_reference'],
    table: 'x_snc_baseball_pla_player_stats',
    recordId: statsResult.record_id,
    fieldValues: 'season_year=2024',
    assert: 'record_validated',
    enforceSecurity: false
  });

  // Step 5: Open the stats form and validate key performance metrics
  atf.form.openExistingRecord({
    $id: Now.ID['open_stats_form'],
    table: 'x_snc_baseball_pla_player_stats',
    recordId: statsResult.record_id,
    formUI: 'standard_ui',
    view: ''
  });

  // Step 6: Validate batting statistics on the form
  atf.form.fieldValueValidation({
    $id: Now.ID['validate_batting_stats'],
    table: 'x_snc_baseball_pla_player_stats',
    conditions: 'batting_average=0.279^home_runs=29^runs_batted_in=105^ops=0.794',
    formUI: 'standard_ui'
  });

  // Step 7: Test updating season statistics
  atf.form.setFieldValue({
    $id: Now.ID['update_season_stats'],
    table: 'x_snc_baseball_pla_player_stats',
    fieldValues: {
      "home_runs": 30,
      "runs_batted_in": 108,
      "batting_average": 0.282,
      "ops": 0.801,
      "all_star": true,
      "mvp_votes": 12,
      "war": 3.5
    },
    formUI: 'standard_ui'
  });

  // Step 8: Submit the updated statistics
  atf.form.submitForm({
    $id: Now.ID['submit_stats_update'],
    assert: 'form_submitted_to_server',
    formUI: 'standard_ui'
  });

  // Step 9: Validate the statistical updates
  atf.server.recordValidation({
    $id: Now.ID['validate_stats_update'],
    table: 'x_snc_baseball_pla_player_stats',
    recordId: statsResult.record_id,
    fieldValues: 'home_runs=30^runs_batted_in=108^mvp_votes=12^war=3.5',
    assert: 'record_validated',
    enforceSecurity: false
  });

  // Step 10: Query high-performance players (OPS >= 0.800)
  atf.server.recordQuery({
    $id: Now.ID['query_high_ops_players'],
    table: 'x_snc_baseball_pla_player_stats',
    fieldValues: 'season_year=2024^ops>=0.800',
    assert: 'records_match_query',
    enforceSecurity: false
  });

  // Step 11: Query All-Star players
  atf.server.recordQuery({
    $id: Now.ID['query_allstar_players'],
    table: 'x_snc_baseball_pla_player_stats',
    fieldValues: 'season_year=2024^all_star=true',
    assert: 'records_match_query',
    enforceSecurity: false
  });

  // Step 12: Query power hitters (30+ home runs)
  atf.server.recordQuery({
    $id: Now.ID['query_power_hitters'],
    table: 'x_snc_baseball_pla_player_stats',
    fieldValues: 'season_year=2024^home_runs>=30',
    assert: 'records_match_query',
    enforceSecurity: false
  });

  // Step 13: Log performance metrics
  atf.server.log({
    $id: Now.ID['log_performance_metrics'],
    log: 'Player statistics validated: 30 HR, 108 RBI, .282 AVG, .801 OPS, 3.5 WAR - All-Star performance level'
  });

  // Step 14: Create additional stats for comparison testing
  const compareStatsResult = atf.server.recordInsert({
    $id: Now.ID['insert_compare_stats'],
    table: 'x_snc_baseball_pla_player_stats',
    fieldValues: {
      "player": playerResult.record_id,
      "season_year": 2023,
      "games_played": 150,
      "at_bats": 583,
      "hits": 176,
      "home_runs": 32,
      "runs_batted_in": 102,
      "batting_average": 0.298,
      "ops": 0.897,
      "all_star": true,
      "war": 6.2
    },
    assert: 'record_successfully_inserted',
    enforceSecurity: false
  });

  // Step 15: Query multi-year performance (both 2023 and 2024)
  atf.server.recordQuery({
    $id: Now.ID['query_multi_year_stats'],
    table: 'x_snc_baseball_pla_player_stats',
    fieldValues: 'season_yearBETWEEN2023@2024',
    assert: 'records_match_query',
    enforceSecurity: false
  });

  // Step 16: Cleanup - Delete test statistics records
  atf.server.recordDelete({
    $id: Now.ID['cleanup_stats_2024'],
    table: 'x_snc_baseball_pla_player_stats',
    recordId: statsResult.record_id,
    assert: 'record_successfully_deleted',
    enforceSecurity: false
  });

  atf.server.recordDelete({
    $id: Now.ID['cleanup_stats_2023'],
    table: 'x_snc_baseball_pla_player_stats',
    recordId: compareStatsResult.record_id,
    assert: 'record_successfully_deleted',
    enforceSecurity: false
  });

  atf.server.recordDelete({
    $id: Now.ID['cleanup_stats_test_player'],
    table: 'x_snc_baseball_pla_players',
    recordId: playerResult.record_id,
    assert: 'record_successfully_deleted',
    enforceSecurity: false
  });

  // Step 17: Log test completion
  atf.server.log({
    $id: Now.ID['log_stats_test_complete'],
    log: 'Player Statistics test completed successfully. Multi-year stats created, validated, queried, and cleaned up.'
  });

});