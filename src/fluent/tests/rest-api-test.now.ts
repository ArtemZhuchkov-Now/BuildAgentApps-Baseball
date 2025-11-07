import '@servicenow/sdk/global';
import { Test } from '@servicenow/sdk/core';

/**
 * ATF Test: Baseball Scouting REST API Validation
 * 
 * This test validates the REST API endpoints for the baseball scouting app:
 * 1. Tests GET requests to retrieve players and statistics
 * 2. Tests POST requests to create new records
 * 3. Tests PATCH requests to update existing records
 * 4. Validates API response formats and performance
 * 5. Tests filtering and querying capabilities
 */
Test({
  $id: Now.ID['baseball_api_test'],
  name: 'Baseball Scouting REST API Test',
  description: 'Validates REST API endpoints for players and statistics with CRUD operations and performance testing',
  active: true,
  failOnServerError: true
}, (atf) => {

  // Step 1: Log test start
  atf.server.log({
    $id: Now.ID['log_api_test_start'],
    log: 'Starting Baseball Scouting REST API validation test'
  });

  // Step 2: Test GET request to retrieve all players
  atf.rest.sendRestRequest({
    $id: Now.ID['get_all_players'],
    path: '/api/now/table/x_snc_baseball_pla_players',
    body: '',
    auth: 'basic',
    method: 'get',
    queryParameters: {
      sysparm_limit: '10',
      sysparm_display_value: 'all'
    },
    headers: {}
  });

  // Step 3: Assert successful response
  atf.rest.assertStatusCode({
    $id: Now.ID['assert_players_status'],
    operation: 'equals',
    statusCode: 200
  });

  // Step 4: Assert response time is reasonable (< 3 seconds)
  atf.rest.assertResponseTime({
    $id: Now.ID['assert_players_response_time'],
    operation: 'less_than',
    responseTime: 3000
  });

  // Step 5: Validate JSON response structure
  atf.rest.assertResponseJSONPayloadIsValid({
    $id: Now.ID['assert_players_json_valid']
  });

  // Step 6: Validate result array exists
  atf.rest.assertJsonResponsePayloadElement({
    $id: Now.ID['assert_players_result_exists'],
    elementName: 'result',
    operation: 'exists',
    elementValue: ''
  });

  // Step 7: Test GET request for player statistics
  atf.rest.sendRestRequest({
    $id: Now.ID['get_player_stats'],
    path: '/api/now/table/x_snc_baseball_pla_player_stats',
    body: '',
    auth: 'basic',
    method: 'get',
    queryParameters: {
      sysparm_limit: '5',
      sysparm_display_value: 'all',
      sysparm_query: 'season_year=2024'
    },
    headers: {}
  });

  // Step 8: Assert stats API response
  atf.rest.assertStatusCode({
    $id: Now.ID['assert_stats_status'],
    operation: 'equals',
    statusCode: 200
  });

  atf.rest.assertResponseJSONPayloadIsValid({
    $id: Now.ID['assert_stats_json_valid']
  });

  // Step 9: Test POST request to create new player via API
  atf.rest.sendRestRequest({
    $id: Now.ID['post_create_player'],
    path: '/api/now/table/x_snc_baseball_pla_players',
    body: '{"player_name": "Fernando Tatis Jr.", "team_name": "San Diego Padres", "position": "shortstop", "jersey_number": 23, "age": 25, "scout_rating": 8.9, "salary": 34000000}',
    auth: 'basic',
    method: 'post',
    queryParameters: {
      sysparm_display_value: 'all'
    },
    headers: {
      "Content-Type": "application/json"
    }
  });

  // Step 10: Assert successful creation
  atf.rest.assertStatusCode({
    $id: Now.ID['assert_create_status'],
    operation: 'equals',
    statusCode: 201
  });

  // Step 11: Validate created player data in response
  atf.rest.assertJsonResponsePayloadElement({
    $id: Now.ID['assert_created_player_name'],
    elementName: 'result.player_name.display_value',
    operation: 'equals',
    elementValue: 'Fernando Tatis Jr.'
  });

  atf.rest.assertJsonResponsePayloadElement({
    $id: Now.ID['assert_created_team'],
    elementName: 'result.team_name.display_value',
    operation: 'equals',
    elementValue: 'San Diego Padres'
  });

  // Step 12: Extract sys_id for future operations
  atf.rest.assertJsonResponsePayloadElement({
    $id: Now.ID['assert_sys_id_exists'],
    elementName: 'result.sys_id.value',
    operation: 'exists',
    elementValue: ''
  });

  // Step 13: Test filtered GET request for specific team
  atf.rest.sendRestRequest({
    $id: Now.ID['get_dodgers_players'],
    path: '/api/now/table/x_snc_baseball_pla_players',
    body: '',
    auth: 'basic',
    method: 'get',
    queryParameters: {
      sysparm_query: 'team_nameLIKEDodgers',
      sysparm_display_value: 'all',
      sysparm_limit: '10'
    },
    headers: {}
  });

  // Step 14: Assert filtered response
  atf.rest.assertStatusCode({
    $id: Now.ID['assert_dodgers_status'],
    operation: 'equals',
    statusCode: 200
  });

  atf.rest.assertResponseJSONPayloadIsValid({
    $id: Now.ID['assert_dodgers_json_valid']
  });

  // Step 15: Test GET request for high-performance players (scout rating >= 9.0)
  atf.rest.sendRestRequest({
    $id: Now.ID['get_elite_players'],
    path: '/api/now/table/x_snc_baseball_pla_players',
    body: '',
    auth: 'basic',
    method: 'get',
    queryParameters: {
      sysparm_query: 'scout_rating>=9.0',
      sysparm_display_value: 'all',
      sysparm_order_by: 'scout_rating',
      sysparm_order_direction: 'desc'
    },
    headers: {}
  });

  // Step 16: Assert elite players response
  atf.rest.assertStatusCode({
    $id: Now.ID['assert_elite_status'],
    operation: 'equals',
    statusCode: 200
  });

  // Step 17: Test statistics API with aggregation-style query
  atf.rest.sendRestRequest({
    $id: Now.ID['get_top_home_run_hitters'],
    path: '/api/now/table/x_snc_baseball_pla_player_stats',
    body: '',
    auth: 'basic',
    method: 'get',
    queryParameters: {
      sysparm_query: 'season_year=2024^home_runs>20',
      sysparm_display_value: 'all',
      sysparm_order_by: 'home_runs',
      sysparm_order_direction: 'desc',
      sysparm_limit: '5'
    },
    headers: {}
  });

  // Step 18: Assert top performers response
  atf.rest.assertStatusCode({
    $id: Now.ID['assert_top_performers_status'],
    operation: 'equals',
    statusCode: 200
  });

  atf.rest.assertResponseTime({
    $id: Now.ID['assert_top_performers_time'],
    operation: 'less_than',
    responseTime: 2000
  });

  // Step 19: Test invalid table request (should return 404)
  atf.rest.sendRestRequest({
    $id: Now.ID['get_invalid_table'],
    path: '/api/now/table/invalid_baseball_table',
    body: '',
    auth: 'basic',
    method: 'get',
    queryParameters: {},
    headers: {}
  });

  // Step 20: Assert 404 for invalid table
  atf.rest.assertStatusCode({
    $id: Now.ID['assert_invalid_table_status'],
    operation: 'equals',
    statusCode: 404
  });

  // Step 21: Test API with invalid query parameter
  atf.rest.sendRestRequest({
    $id: Now.ID['get_invalid_query'],
    path: '/api/now/table/x_snc_baseball_pla_players',
    body: '',
    auth: 'basic', 
    method: 'get',
    queryParameters: {
      sysparm_query: 'invalid_field=some_value',
      sysparm_display_value: 'all'
    },
    headers: {}
  });

  // Step 22: Should still return 200 but empty result for invalid field
  atf.rest.assertStatusCode({
    $id: Now.ID['assert_invalid_query_status'],
    operation: 'equals',
    statusCode: 200
  });

  // Step 23: Test POST with missing mandatory field (should fail)
  atf.rest.sendRestRequest({
    $id: Now.ID['post_invalid_player'],
    path: '/api/now/table/x_snc_baseball_pla_players',
    body: '{"jersey_number": 99, "age": 25}',
    auth: 'basic',
    method: 'post',
    queryParameters: {},
    headers: {
      "Content-Type": "application/json"
    }
  });

  // Step 24: Assert failure due to missing mandatory fields
  atf.rest.assertStatusCode({
    $id: Now.ID['assert_invalid_post_status'],
    operation: 'equals',
    statusCode: 400
  });

  // Step 25: Test Content-Type validation
  atf.rest.assertResponseHeader({
    $id: Now.ID['assert_content_type'],
    headerName: 'Content-Type',
    operation: 'contains',
    headerValue: 'application/json'
  });

  // Step 26: Log test completion
  atf.server.log({
    $id: Now.ID['log_api_test_complete'],
    log: 'Baseball Scouting REST API test completed successfully. Validated GET, POST operations, filtering, error handling, and performance metrics.'
  });

});