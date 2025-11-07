import '@servicenow/sdk/global';
import { Test } from '@servicenow/sdk/core';

/**
 * ATF Test: Player Management CRUD Operations
 * 
 * This test validates the complete player management workflow:
 * 1. Creates a new baseball player record
 * 2. Opens the player form and validates field values
 * 3. Updates player information
 * 4. Validates the updated information
 * 5. Cleans up by deleting the test record
 */
Test({
  $id: Now.ID['player_crud_test'],
  name: 'Baseball Player CRUD Operations',
  description: 'Tests creating, reading, updating and deleting baseball player records with form validation',
  active: true,
  failOnServerError: true
}, (atf) => {

  // Step 1: Log test start
  atf.server.log({
    $id: Now.ID['log_test_start'],
    log: 'Starting Baseball Player CRUD test - creating test player Jacob deGrom'
  });

  // Step 2: Insert a new player record server-side
  const playerResult = atf.server.recordInsert({
    $id: Now.ID['insert_test_player'],
    table: 'x_snc_baseball_pla_players',
    fieldValues: {
      "player_name": "Jacob deGrom",
      "team_name": "Texas Rangers",
      "position": "pitcher",
      "jersey_number": 48,
      "age": 35,
      "height_inches": 76,
      "weight_lbs": 180,
      "throws_hand": "right",
      "bats_hand": "left",
      "salary": 37000000,
      "contract_year": 2025,
      "debut_date": "2014-05-15",
      "hometown": "DeLand, FL",
      "college": "Stetson University",
      "draft_year": 2010,
      "draft_round": 9,
      "injury_status": false,
      "scout_rating": 9.1,
      "notes": "Elite ace pitcher with outstanding slider and fastball combination. Former Cy Young winner."
    },
    assert: 'record_successfully_inserted',
    enforceSecurity: false
  });

  // Step 3: Verify the player record was created correctly
  atf.server.recordValidation({
    $id: Now.ID['validate_player_created'],
    table: 'x_snc_baseball_pla_players',
    recordId: playerResult.record_id,
    fieldValues: 'player_name=Jacob deGrom^team_name=Texas Rangers^position=pitcher',
    assert: 'record_validated',
    enforceSecurity: false
  });

  // Step 4: Open the player form in standard UI
  atf.form.openExistingRecord({
    $id: Now.ID['open_player_form'],
    table: 'x_snc_baseball_pla_players',
    recordId: playerResult.record_id,
    formUI: 'standard_ui',
    view: ''
  });

  // Step 5: Validate field values on the form
  atf.form.fieldValueValidation({
    $id: Now.ID['validate_form_values'],
    table: 'x_snc_baseball_pla_players',
    conditions: 'player_name=Jacob deGrom^salary=37000000^scout_rating=9.1',
    formUI: 'standard_ui'
  });

  // Step 6: Validate field states (mandatory fields)
  atf.form.fieldStateValidation({
    $id: Now.ID['validate_field_states'],
    table: 'x_snc_baseball_pla_players',
    mandatory: ['player_name', 'team_name'],
    notMandatory: ['jersey_number', 'college', 'notes'],
    visible: ['player_name', 'team_name', 'position', 'scout_rating'],
    formUI: 'standard_ui'
  });

  // Step 7: Update player information through the form
  atf.form.setFieldValue({
    $id: Now.ID['update_player_info'],
    table: 'x_snc_baseball_pla_players',
    fieldValues: {
      "scout_rating": 9.5,
      "notes": "Elite ace pitcher with outstanding slider and fastball combination. Former Cy Young winner. Recently returned from injury.",
      "injury_status": true,
      "salary": 40000000
    },
    formUI: 'standard_ui'
  });

  // Step 8: Submit the form to save changes
  atf.form.submitForm({
    $id: Now.ID['submit_player_updates'],
    assert: 'form_submitted_to_server',
    formUI: 'standard_ui'
  });

  // Step 9: Validate the updates were saved correctly
  atf.server.recordValidation({
    $id: Now.ID['validate_player_updates'],
    table: 'x_snc_baseball_pla_players',
    recordId: playerResult.record_id,
    fieldValues: 'scout_rating=9.5^injury_status=true^salary=40000000',
    assert: 'record_validated',
    enforceSecurity: false
  });

  // Step 10: Log test progress
  atf.server.log({
    $id: Now.ID['log_test_progress'],
    log: 'Player record successfully created and updated. Now testing query operations.'
  });

  // Step 11: Test querying players by team
  atf.server.recordQuery({
    $id: Now.ID['query_players_by_team'],
    table: 'x_snc_baseball_pla_players',
    fieldValues: 'team_name=Texas Rangers',
    assert: 'records_match_query',
    enforceSecurity: false
  });

  // Step 12: Test querying injured players
  atf.server.recordQuery({
    $id: Now.ID['query_injured_players'],
    table: 'x_snc_baseball_pla_players',
    fieldValues: 'injury_status=true^scout_rating>=9',
    assert: 'records_match_query',
    enforceSecurity: false
  });

  // Step 13: Cleanup - Delete the test player record
  atf.server.recordDelete({
    $id: Now.ID['cleanup_test_player'],
    table: 'x_snc_baseball_pla_players',
    recordId: playerResult.record_id,
    assert: 'record_successfully_deleted',
    enforceSecurity: false
  });

  // Step 14: Log test completion
  atf.server.log({
    $id: Now.ID['log_test_complete'],
    log: 'Baseball Player CRUD test completed successfully. Test player record created, updated, validated, and cleaned up.'
  });

});