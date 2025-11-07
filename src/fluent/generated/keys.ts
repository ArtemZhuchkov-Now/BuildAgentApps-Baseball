import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    assert_content_type: {
                        table: 'sys_atf_step'
                        id: '5541dadd77414b2e9ab8ffe52066c5f0'
                    }
                    assert_create_status: {
                        table: 'sys_atf_step'
                        id: '66afd3875739416a9a1092c249c2e568'
                    }
                    assert_created_player_name: {
                        table: 'sys_atf_step'
                        id: '4c20d31599e740baaa8d1ef81b9a3b42'
                    }
                    assert_created_team: {
                        table: 'sys_atf_step'
                        id: 'ec9f0229531245c8a8cd25b56c87aed8'
                    }
                    assert_dodgers_json_valid: {
                        table: 'sys_atf_step'
                        id: '61ba9d83f7ed4881aa89b617b79bca86'
                    }
                    assert_dodgers_status: {
                        table: 'sys_atf_step'
                        id: 'a66444a9141541119990e3d2064d5eca'
                    }
                    assert_elite_status: {
                        table: 'sys_atf_step'
                        id: 'e660c675866144d3bb5ae6ba19d85b43'
                    }
                    assert_invalid_post_status: {
                        table: 'sys_atf_step'
                        id: '9e8a402719714e75a5b2b802fc4611ef'
                    }
                    assert_invalid_query_status: {
                        table: 'sys_atf_step'
                        id: '241cf9faa1ce427889de0b0606f1bccb'
                    }
                    assert_invalid_table_status: {
                        table: 'sys_atf_step'
                        id: '47d0c8c84e7b47948a764313fb801109'
                    }
                    assert_players_json_valid: {
                        table: 'sys_atf_step'
                        id: 'b2e1c0b6c39e4e18b91e284f19a3a743'
                    }
                    assert_players_response_time: {
                        table: 'sys_atf_step'
                        id: '22c2e4379e044e758aa17f89cf6e23c0'
                    }
                    assert_players_result_exists: {
                        table: 'sys_atf_step'
                        id: 'a2c996971275402aa4ab5bb3fbab79b3'
                    }
                    assert_players_status: {
                        table: 'sys_atf_step'
                        id: '84ebde8030424086ae89ce18b961719f'
                    }
                    assert_stats_json_valid: {
                        table: 'sys_atf_step'
                        id: '1e4d6aa3cc7c4b368d26d3e6de56ca1a'
                    }
                    assert_stats_status: {
                        table: 'sys_atf_step'
                        id: 'e41262a9421c4779ba444860cc33c8fb'
                    }
                    assert_sys_id_exists: {
                        table: 'sys_atf_step'
                        id: 'b5e47c6f178643bdb3d12b361bca9ebd'
                    }
                    assert_top_performers_status: {
                        table: 'sys_atf_step'
                        id: 'ad2c23d52fb841b79e7f25dad81cf61b'
                    }
                    assert_top_performers_time: {
                        table: 'sys_atf_step'
                        id: '8497e410d0ba4fcb96c56129b2e21fab'
                    }
                    baseball_api_test: {
                        table: 'sys_atf_test'
                        id: 'fd958adc12a546aeb2f6bdb3c6e5f6ab'
                    }
                    'baseball-scouting-dashboard': {
                        table: 'sys_ui_page'
                        id: '7424392a389d41c198c0d0291a443e43'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'b3af624aaa9840e3851edad9c07efdda'
                    }
                    cleanup_stats_2023: {
                        table: 'sys_atf_step'
                        id: 'e5c2af413a0a4624b5413737ee5a9921'
                    }
                    cleanup_stats_2024: {
                        table: 'sys_atf_step'
                        id: '3e904e7c441a4714b1d7a0ca80cf2476'
                    }
                    cleanup_stats_test_player: {
                        table: 'sys_atf_step'
                        id: 'ffadde5f78154eb68f24c8bb0d044ec3'
                    }
                    cleanup_test_player: {
                        table: 'sys_atf_step'
                        id: '14db114dc00a46c3904ad00caf810215'
                    }
                    get_all_players: {
                        table: 'sys_atf_step'
                        id: 'bfe3411f7b8e43cb879f89aecea5eabb'
                    }
                    get_dodgers_players: {
                        table: 'sys_atf_step'
                        id: 'cd82ab2f25b643308fe066f7071d9f8f'
                    }
                    get_elite_players: {
                        table: 'sys_atf_step'
                        id: 'b739c2008b1b485ba5d24e51ef979d3c'
                    }
                    get_invalid_query: {
                        table: 'sys_atf_step'
                        id: '830242e55a8c48c8942786ef59fa2213'
                    }
                    get_invalid_table: {
                        table: 'sys_atf_step'
                        id: '80b23bbf1c1140448341d112b7dba80c'
                    }
                    get_player_stats: {
                        table: 'sys_atf_step'
                        id: '359e08a20f4b4b0f91e0e9eb98d8d4dd'
                    }
                    get_top_home_run_hitters: {
                        table: 'sys_atf_step'
                        id: '16d1652412174b0591a8ca404de1dc7a'
                    }
                    insert_compare_stats: {
                        table: 'sys_atf_step'
                        id: '993b38bb18bb452699cc85018663e488'
                    }
                    insert_player_stats: {
                        table: 'sys_atf_step'
                        id: 'a3fe21df35464c6cb451a32daf98251b'
                    }
                    insert_stats_test_player: {
                        table: 'sys_atf_step'
                        id: '041f4a3d473a445ab970ca05d788d837'
                    }
                    insert_test_player: {
                        table: 'sys_atf_step'
                        id: '77d98d5687614ebab52dab2ce2b9bf67'
                    }
                    log_api_test_complete: {
                        table: 'sys_atf_step'
                        id: '41d0a085a03246c98d7b1c27a30fe046'
                    }
                    log_api_test_start: {
                        table: 'sys_atf_step'
                        id: '0fc68f9bb7f94be2b9d8196a71e42b0e'
                    }
                    log_performance_metrics: {
                        table: 'sys_atf_step'
                        id: '1784f94e3dee42ebb4c2ea27f0648d86'
                    }
                    log_stats_test_complete: {
                        table: 'sys_atf_step'
                        id: '9f4c6370717b4985b1b064afe2ce26f5'
                    }
                    log_stats_test_start: {
                        table: 'sys_atf_step'
                        id: 'ef4e4d9995d946ca94a404e985509cee'
                    }
                    log_test_complete: {
                        table: 'sys_atf_step'
                        id: '029bbc0127624316b4a381b480ba2e7a'
                    }
                    log_test_progress: {
                        table: 'sys_atf_step'
                        id: 'ef460b5e9c5146239916eef3a63cfd52'
                    }
                    log_test_start: {
                        table: 'sys_atf_step'
                        id: 'a131e6ce6b7a4ac284c1b21d160f5fd6'
                    }
                    open_player_form: {
                        table: 'sys_atf_step'
                        id: '61f6814914de43fe9bc4e1f930da7575'
                    }
                    open_stats_form: {
                        table: 'sys_atf_step'
                        id: '5433253295fd4400b3900e3e9fabd02a'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '67ae104d0e9644e1b57fd95ddd4fd49d'
                    }
                    player_crud_test: {
                        table: 'sys_atf_test'
                        id: 'ffb19c3d19d74cb49d804a8126a2d5e2'
                    }
                    player_stats_test: {
                        table: 'sys_atf_test'
                        id: '1f52ba177ee14d89bee1b20c6eabb062'
                    }
                    'player-aaron-judge': {
                        table: 'x_snc_baseball_pla_players'
                        id: '4084d20754db4140a2061c732bcd812a'
                    }
                    'player-francisco-lindor': {
                        table: 'x_snc_baseball_pla_players'
                        id: '0f5629db6b4a407481bfd10ed520c672'
                    }
                    'player-freddie-freeman': {
                        table: 'x_snc_baseball_pla_players'
                        id: 'c8a7f3deaefb476cb7c0f763784af60f'
                    }
                    'player-gerrit-cole': {
                        table: 'x_snc_baseball_pla_players'
                        id: 'a3e6e30dcf06492da8e80c9c627fbdf9'
                    }
                    'player-julio-urias': {
                        table: 'x_snc_baseball_pla_players'
                        id: '01ef31edffd14134913e50e2394f2623'
                    }
                    'player-mike-trout': {
                        table: 'x_snc_baseball_pla_players'
                        id: '4f1d5ffcf27d4862870dc0f7217c8975'
                    }
                    'player-mookie-betts': {
                        table: 'x_snc_baseball_pla_players'
                        id: '86dd4bd6ac4b4eb4b5802b2dfa3830f8'
                    }
                    'player-ronald-acuna': {
                        table: 'x_snc_baseball_pla_players'
                        id: '9217388e17394728a84c802925a1301e'
                    }
                    'player-shohei-ohtani': {
                        table: 'x_snc_baseball_pla_players'
                        id: '0a75fe8cdb824b44acbd74549dc582a8'
                    }
                    post_create_player: {
                        table: 'sys_atf_step'
                        id: 'f2d8750de38845f79571081a1882ecbb'
                    }
                    post_invalid_player: {
                        table: 'sys_atf_step'
                        id: '005f989e6e98412a88626b4c59d85060'
                    }
                    query_allstar_players: {
                        table: 'sys_atf_step'
                        id: 'a86ba21132944c5c979e80c09d6eeef5'
                    }
                    query_high_ops_players: {
                        table: 'sys_atf_step'
                        id: '44b6645d4f58437a86fd3edb5c664dda'
                    }
                    query_injured_players: {
                        table: 'sys_atf_step'
                        id: '75e3ca3252104eaca38a2beacb157691'
                    }
                    query_multi_year_stats: {
                        table: 'sys_atf_step'
                        id: 'c325ab54e33549c5811a414201b4c674'
                    }
                    query_players_by_team: {
                        table: 'sys_atf_step'
                        id: 'c2c83d4bcb714f6281107a1e67d1ec13'
                    }
                    query_power_hitters: {
                        table: 'sys_atf_step'
                        id: 'b2eb0e8121734efd8cf8f1c029213624'
                    }
                    'stats-aaron-judge-2024': {
                        table: 'x_snc_baseball_pla_player_stats'
                        id: 'cba5aa1d70b94cb8a0d0fc585f00183d'
                    }
                    'stats-francisco-lindor-2024': {
                        table: 'x_snc_baseball_pla_player_stats'
                        id: 'a54b7a5197844fb4b26a650bc312d9b1'
                    }
                    'stats-freddie-freeman-2024': {
                        table: 'x_snc_baseball_pla_player_stats'
                        id: '27a731915c324e4aa6328cd40a2c1142'
                    }
                    'stats-gerrit-cole-2024': {
                        table: 'x_snc_baseball_pla_player_stats'
                        id: 'f698579127c445a0b56a5124c00ad225'
                    }
                    'stats-julio-urias-2024': {
                        table: 'x_snc_baseball_pla_player_stats'
                        id: '89b4decb41f0431797945434435c699b'
                    }
                    'stats-mookie-betts-2024': {
                        table: 'x_snc_baseball_pla_player_stats'
                        id: 'dac97986d2da4518b14af6e1c24de94e'
                    }
                    'stats-ronald-acuna-2024': {
                        table: 'x_snc_baseball_pla_player_stats'
                        id: '2a080e3ff80f44f7bcb3b36f6e42a7a9'
                    }
                    'stats-shohei-ohtani-2024': {
                        table: 'x_snc_baseball_pla_player_stats'
                        id: 'f6cc319b30f444ca853b0d2dc98c14f4'
                    }
                    submit_player_updates: {
                        table: 'sys_atf_step'
                        id: '2264f8f73f4d4b8294bcb1c90f49716a'
                    }
                    submit_stats_update: {
                        table: 'sys_atf_step'
                        id: '9e14fbb1752940b9910363cda0e5b634'
                    }
                    update_player_info: {
                        table: 'sys_atf_step'
                        id: '63b2bd15d6054879bd9bcec6fcbc52e0'
                    }
                    update_season_stats: {
                        table: 'sys_atf_step'
                        id: 'af23f3de85ac4acfbfd0013271f70ad3'
                    }
                    validate_batting_stats: {
                        table: 'sys_atf_step'
                        id: '59ddde15c4ac43029832929db6f0c464'
                    }
                    validate_field_states: {
                        table: 'sys_atf_step'
                        id: 'e9b2e3efad734570991f4d4522c6fd94'
                    }
                    validate_form_values: {
                        table: 'sys_atf_step'
                        id: '66153570a5be4894978d0b49bf7f664b'
                    }
                    validate_player_created: {
                        table: 'sys_atf_step'
                        id: 'f93e827ea76d499ea208225856eee484'
                    }
                    validate_player_reference: {
                        table: 'sys_atf_step'
                        id: '189589bb94514ecdb8c58bb62345fd4a'
                    }
                    validate_player_updates: {
                        table: 'sys_atf_step'
                        id: 'c463243452ba474d938bb89c23ffee3c'
                    }
                    validate_stats_update: {
                        table: 'sys_atf_step'
                        id: 'c3dce92894034c6ab0854cf727045a6f'
                    }
                    'x_snc_baseball_pla/main': {
                        table: 'sys_ux_lib_asset'
                        id: '0a57a299099b4a50a90a24221087179d'
                    }
                    'x_snc_baseball_pla/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'cdb727eace1447c38dec3fc9c725bf2c'
                    }
                }
                composite: [
                    {
                        table: 'sys_variable_value'
                        id: '004470a3e41b47ea8fda7e0c4c5f4273'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '16d1652412174b0591a8ca404de1dc7a'
                            variable: '020a6af09fd32200ef4afa7dc67fcfec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '007e68b2db8445f6a0e3707eee8eae3b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '3e904e7c441a4714b1d7a0ca80cf2476'
                            variable: 'd13d0b935320220002c6435723dc34c8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '00b5eb95cb224c2a850ab355b37263df'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '4c20d31599e740baaa8d1ef81b9a3b42'
                            variable: '2db298199f132200ef4afa7dc67fcfbc'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '016ecff742144e20b1053735dc8d9ed0'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c2c83d4bcb714f6281107a1e67d1ec13'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '020cbfa45cd3495585f4c6aad4f6eb5a'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'walks_allowed'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '024a44c8c5134d43af50afa50fb5cf2b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ad2c23d52fb841b79e7f25dad81cf61b'
                            variable: '1d94cb1f3b8032000774229c93efc419'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '02bc0724d3404f11a00bc60350e3b40b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '005f989e6e98412a88626b4c59d85060'
                            variable: '020a6af09fd32200ef4afa7dc67fcfec'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03df9213bfdd4381b0afe830a8ff398f'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'saves'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '041817919cc84c548725d45da110fcb8'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '80b23bbf1c1140448341d112b7dba80c'
                            variable: '89ad06b543010210b6f9a0246bb8f2d7'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '04dc2186c0fb4d6aae7073028e7055e6'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '5433253295fd4400b3900e3e9fabd02a'
                            variable: '74d6e7a0a3023110571967d1361e616b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0667c6aabcd4465cafaab9f3490766b0'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '80b23bbf1c1140448341d112b7dba80c'
                            variable: '58408e250b3222000b7da95e93673a5c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '06c24834d07f4c3aa030c834669d6e17'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e9b2e3efad734570991f4d4522c6fd94'
                            variable: '592a17535320220002c6435723dc34d7'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '079d4663334e4e8d87e9caf68a726fbc'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b5e47c6f178643bdb3d12b361bca9ebd'
                            variable: '2db298199f132200ef4afa7dc67fcfbc'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '07c23c32f70e402ab61c5e6c08f15bdc'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '9e8a402719714e75a5b2b802fc4611ef'
                            variable: '1d94cb1f3b8032000774229c93efc419'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b4a24b88aaa440081d704836a9da7ce'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0c0ca441da0145a19bd818424f558d94'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '75e3ca3252104eaca38a2beacb157691'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0cc18014c60c429f952f3ea567d1eb17'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'player'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0da1b9e7704f4950a079796ab979f372'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '830242e55a8c48c8942786ef59fa2213'
                            variable: '59877da10b3222000b7da95e93673a56'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0e5f03c6e59a41baa64829ffb74e2c82'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '1784f94e3dee42ebb4c2ea27f0648d86'
                            variable: '523c79985f30220012b44adb7f46663a'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0e7d1a696c484978a88ea607c1adf093'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '041f4a3d473a445ab970ca05d788d837'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0fd9b0e2eb904736bbe3b65e61cc0e18'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '5433253295fd4400b3900e3e9fabd02a'
                            variable: 'b124164e53a0220002c6435723dc34c5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '106a91f240af46db82f1f34556bebfd4'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a86ba21132944c5c979e80c09d6eeef5'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '11677075085c466facd794024fbb9bb0'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '993b38bb18bb452699cc85018663e488'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '122f508fe69445979bec5b3789edd503'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '241cf9faa1ce427889de0b0606f1bccb'
                            variable: '9f5f67709f132200ef4afa7dc67fcf94'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '12a1397850104cedb6aecfe4a58af628'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'bfe3411f7b8e43cb879f89aecea5eabb'
                            variable: 'cec002650b3222000b7da95e93673aae'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '130eac26ad754816b47f61304d19f35c'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e5c2af413a0a4624b5413737ee5a9921'
                            variable: 'd13d0b935320220002c6435723dc34c8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '13490a5bd2394dc4867b04314083fc86'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b2eb0e8121734efd8cf8f1c029213624'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '13e7f31bb6a34d5499740ac6fd811db8'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '359e08a20f4b4b0f91e0e9eb98d8d4dd'
                            variable: '6cdd0ab543010210b6f9a0246bb8f2f2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '14f0a29477154f2ea376a024a9906bd1'
                        key: {
                            field: 'record_id'
                            id: 'ffadde5f78154eb68f24c8bb0d044ec3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1538f1a0f40245b4803e8521393f2697'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '80b23bbf1c1140448341d112b7dba80c'
                            variable: '81e042650b3222000b7da95e93673aa2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '155d640600a9488d85cee443af416a00'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'salary'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '15bef7ac168647a59cee5e8fad3f250b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b739c2008b1b485ba5d24e51ef979d3c'
                            variable: '50bff9250b3222000b7da95e93673a9b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1662f94fac384e7eb3bca81a02c51bab'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '63b2bd15d6054879bd9bcec6fcbc52e0'
                            variable: '424ca6465320220002c6435723dc34b5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16ba4455a77a45e9abd3ffa3f9dbe35c'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'triples'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '174f9b32829a49f69d56ad49edef49ce'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e5c2af413a0a4624b5413737ee5a9921'
                            variable: 'c7e483f3671003007ba405225685effb'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '17f7c4d5df2e4be492b95cced481f08f'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'hometown'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '18cf95a877ee43ffb457f9650533291e'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '61f6814914de43fe9bc4e1f930da7575'
                            variable: '6e55da4e53a0220002c6435723dc34a0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1b7074c5d6f94853ad314ca9468617f4'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'slugging_percentage'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1c35af1f343345cdbd74b0e6ea7d4c9b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '041f4a3d473a445ab970ca05d788d837'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1d8e654b357042d2904d01c22ce95ef0'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'cd82ab2f25b643308fe066f7071d9f8f'
                            variable: '81e042650b3222000b7da95e93673aa2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1fd4319972bb48109c28ffdcb2ad1bc0'
                        key: {
                            field: 'record_id'
                            id: '189589bb94514ecdb8c58bb62345fd4a'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '20f579b7ee0a40649497a99c692be269'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'player_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '210afd86c97e452cbb2f2aafbc53d054'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'player'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '227e723da2bd4ba39c2781b532891bc6'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'position'
                            value: 'second_base'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2353aa7ce95d48f38f5e23dfc4be702f'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '5541dadd77414b2e9ab8ffe52066c5f0'
                            variable: '416784919f132200ef4afa7dc67fcff4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '23b8a9b8fe0a4c5e82fbd99235cd550b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f93e827ea76d499ea208225856eee484'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '251ca292b7914bd68a7817fd4df912e3'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '25f1ae37d3774013975c3c7424b05574'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e660c675866144d3bb5ae6ba19d85b43'
                            variable: '9f5f67709f132200ef4afa7dc67fcf94'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '269762b27ac242a0a30484ea286cd898'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ec9f0229531245c8a8cd25b56c87aed8'
                            variable: '7b139c199f132200ef4afa7dc67fcfb3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '271df1d3453544748a68cc5868ec95ba'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '22c2e4379e044e758aa17f89cf6e23c0'
                            variable: '480b3b819f132200ef4afa7dc67fcf33'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '28895213e4e744ea8771709d7d9274b1'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c2c83d4bcb714f6281107a1e67d1ec13'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '28e0da1be7da41d287db6f909b44f052'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '75e3ca3252104eaca38a2beacb157691'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2903a6852b8e451a92b3dbb1b8891e85'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'strikeouts'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '296e0bd919374c85b6953ac9f55d1e97'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '359e08a20f4b4b0f91e0e9eb98d8d4dd'
                            variable: '89ad06b543010210b6f9a0246bb8f2d7'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2b13327b9f084ece93884c644795f40f'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c325ab54e33549c5811a414201b4c674'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2bbde43ab10f47dbad6c103bbe45e3ee'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '44b6645d4f58437a86fd3edb5c664dda'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2c034bd26e22486d915df05d45bf742d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'bfe3411f7b8e43cb879f89aecea5eabb'
                            variable: '81e042650b3222000b7da95e93673aa2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2cbd732294a245e99c31a47681162f8e'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'earned_run_average'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2d17f9249d974814b2a6b1931b5372e0'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'height_inches'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d250adf282b4b0ca0572932657d6d86'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'runs_batted_in'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2d45ce456f2745f3aed5124784f6f0ae'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '14db114dc00a46c3904ad00caf810215'
                            variable: 'c7e483f3671003007ba405225685effb'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '30fdbf032ed2413c86abdeca5bcbd700'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '14db114dc00a46c3904ad00caf810215'
                            variable: '8f7d0f935320220002c6435723dc3471'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3133475fa8d04c2a92a93ba5f84dd95a'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f2d8750de38845f79571081a1882ecbb'
                            variable: '50bff9250b3222000b7da95e93673a9b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '315094c5ff7546ec804b3fbc77c5641f'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'innings_pitched'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '31a7f76d83e34c948f0e3e95d3b00056'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'hits'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '31e597d5e3c74d159c951aa596500784'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f93e827ea76d499ea208225856eee484'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '328d8f93d8154cf0be84744a77f52f21'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'salary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36c8bcc1666a47dbb419fe2c179ee41b'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'weight_lbs'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3712aaaf8b9c4b98812c5507de4edc87'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'bats_hand'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '380ddb830d7d4df484c38c252ebe92fd'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'all_star'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3908c93f06d7421388034a61b4d88b74'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e9b2e3efad734570991f4d4522c6fd94'
                            variable: '80f953535320220002c6435723dc340f'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '39589dfa3c2a48398bb5c5d1beab6595'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a3fe21df35464c6cb451a32daf98251b'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '397f5f8b72404670a04ecf063e3380e1'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'position'
                            value: 'third_base'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3992adfab08e4401adfd06a346d66b9c'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c3dce92894034c6ab0854cf727045a6f'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b4afba672e74513b1cd9ad26a30980a'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'errors'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3b6ac7f4faa14308a2e582589469c921'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'player_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3d34e2877313449585dd60bb91374129'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e9b2e3efad734570991f4d4522c6fd94'
                            variable: '787a9b535320220002c6435723dc3455'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3d59b150666e48fc98274663e5c4682d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '77d98d5687614ebab52dab2ce2b9bf67'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3d73d242598744c78df501958d3d6ea2'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '029bbc0127624316b4a381b480ba2e7a'
                            variable: '523c79985f30220012b44adb7f46663a'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3ed8ee3712ee4c3ca88ddc0efe79f5b0'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '8497e410d0ba4fcb96c56129b2e21fab'
                            variable: 'ddab3f819f132200ef4afa7dc67fcf2b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3fe87e7e04834dbf8c822da9495f894b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'cd82ab2f25b643308fe066f7071d9f8f'
                            variable: 'cec002650b3222000b7da95e93673aae'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4061af94c5ec446a8243df7001698765'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a2c996971275402aa4ab5bb3fbab79b3'
                            variable: '5a9258199f132200ef4afa7dc67fcfb4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '41988b55b8f04492a088913beaf6519a'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a3fe21df35464c6cb451a32daf98251b'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '41db1bdf16324c298a1720c1d549696b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '189589bb94514ecdb8c58bb62345fd4a'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4220931f923d4657b5838360fa1f9723'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '3e904e7c441a4714b1d7a0ca80cf2476'
                            variable: 'c7e483f3671003007ba405225685effb'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '42e8871a0dc04612bf0f93a1944821aa'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'af23f3de85ac4acfbfd0013271f70ad3'
                            variable: '946f3c1a0f23330072e6452bc4767eda'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '42fae5977a854053a9753d552b195587'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b739c2008b1b485ba5d24e51ef979d3c'
                            variable: '59877da10b3222000b7da95e93673a56'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '43f24ef2eb0f43568c09c82367c3977f'
                        key: {
                            field: 'record_id'
                            id: '5433253295fd4400b3900e3e9fabd02a'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '442314bad0f44ff98f49bddadf24651e'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'season_year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4457de7026984453b6807e74fa3ad12b'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'team_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4568a196dc92489e876b58105d23c399'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ec9f0229531245c8a8cd25b56c87aed8'
                            variable: '2db298199f132200ef4afa7dc67fcfbc'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '456b246655f6474d9bf22361b2233d2b'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'putouts'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '48cc0dc98dfa44899c20533f7539a04d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ffadde5f78154eb68f24c8bb0d044ec3'
                            variable: 'd13d0b935320220002c6435723dc34c8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '494d5277835e4237ace8f021e2e0cb04'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c3dce92894034c6ab0854cf727045a6f'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '49eb5a9a9bef4a98a82c9a202ec7d51d'
                        key: {
                            field: 'record_id'
                            id: 'c3dce92894034c6ab0854cf727045a6f'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4a2b53acf5114e7e89f9a762e4f1cec0'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f2d8750de38845f79571081a1882ecbb'
                            variable: '020a6af09fd32200ef4afa7dc67fcfec'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ab209d9c04b47ea93f47b9a08042708'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'age'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4b0c9a0246ac469099a2733a5efce507'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '041f4a3d473a445ab970ca05d788d837'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b5af5851de44e649a7a5c12cdb6bca7'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'draft_round'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4bce17e5307f4678b7673554df8f8986'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'af23f3de85ac4acfbfd0013271f70ad3'
                            variable: '424ca6465320220002c6435723dc34b5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4c691ba3dad74e588c50076f44088f5a'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '16d1652412174b0591a8ca404de1dc7a'
                            variable: '81e042650b3222000b7da95e93673aa2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4cdaf4a2b5634ce8a9a5c0bc720406fc'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '4c20d31599e740baaa8d1ef81b9a3b42'
                            variable: '7b139c199f132200ef4afa7dc67fcfb3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4da3740b525045b38c06d70aa24a24f2'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'draft_year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4db1a4b36a664f97bd9199f3280efdeb'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'throws_hand'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4dc25e945b084799bbd03aefd82c8857'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e9b2e3efad734570991f4d4522c6fd94'
                            variable: 'e63a97535320220002c6435723dc34b8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4e0547c59c174caf91f4aee1497ccc3b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '2264f8f73f4d4b8294bcb1c90f49716a'
                            variable: 'c796d40497302200abe4bb7503ac4ad8'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4e1b54cb49c34e03a890c18fff2a65fd'
                        key: {
                            field: 'record_id'
                            id: 'f93e827ea76d499ea208225856eee484'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4ff8a4f7ad15461f88ac3ed6db3d573d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f2d8750de38845f79571081a1882ecbb'
                            variable: 'cec002650b3222000b7da95e93673aae'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5012a19c00b94108a0ddc967347b6db9'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ef460b5e9c5146239916eef3a63cfd52'
                            variable: '523c79985f30220012b44adb7f46663a'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52297213e1244740872447a26f94acb8'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'losses'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '535f28e402d148359adfdcdf63c1de5a'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'cd82ab2f25b643308fe066f7071d9f8f'
                            variable: '59877da10b3222000b7da95e93673a56'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '53612273ac72477789e5e55b0e6ea019'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e9b2e3efad734570991f4d4522c6fd94'
                            variable: '0cd9df135320220002c6435723dc3426'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '546bc1025298434697e3c499e411fe21'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'injury_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '549cf9bda765490bb352f93069e251d9'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '830242e55a8c48c8942786ef59fa2213'
                            variable: '81e042650b3222000b7da95e93673aa2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5597ecc6b73342a99333d3bde1281a24'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'scout_rating'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5687d7ce2fee4e6f9066d3c7f2b602ff'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c325ab54e33549c5811a414201b4c674'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '56ff1af7dcec48e793d27b339b46537a'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '359e08a20f4b4b0f91e0e9eb98d8d4dd'
                            variable: 'cec002650b3222000b7da95e93673aae'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '574657e206b4472eb37999612a667108'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'position'
                            value: 'designated_hitter'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '58acf04d69d543ea84b92cc27235762a'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '66afd3875739416a9a1092c249c2e568'
                            variable: '9f5f67709f132200ef4afa7dc67fcf94'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '58e6025d33ff48a6a79a199b3f87474e'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '993b38bb18bb452699cc85018663e488'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5986f9f09d1d4d90a2db825b14b6a51b'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'at_bats'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '59bd0a1f804c4db2aee698728ad71d80'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c325ab54e33549c5811a414201b4c674'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5afe75d22fc441c8a993413ffb18f7a5'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c463243452ba474d938bb89c23ffee3c'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b293505987648e1a0dd6c9b6bfb3e4c'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'cy_young_votes'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5b4752450bb542919abf271abe13fd8d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '66afd3875739416a9a1092c249c2e568'
                            variable: '1d94cb1f3b8032000774229c93efc419'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5c2e79685bfc482698c049bb39a59132'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c463243452ba474d938bb89c23ffee3c'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5cf6fa6f4cb24639b993aeb0e046ad95'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'hits'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5ed0d3912a974007944126aad0a862a0'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'cd82ab2f25b643308fe066f7071d9f8f'
                            variable: '020a6af09fd32200ef4afa7dc67fcfec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5f5d82a8da0843d79695431d77de7158'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c463243452ba474d938bb89c23ffee3c'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6030add5657343ce9ab4fa212c811110'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '5433253295fd4400b3900e3e9fabd02a'
                            variable: 'ad351a4e53a0220002c6435723dc34f0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '609ac1d8a58a48abb1a8f69fde5eac06'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'bats_hand'
                            value: 'right'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6114079a92a243e08cc2ae7b45bd9e85'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'fielding_percentage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6197dd7849cd4ecab33d77b32839b664'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'bfe3411f7b8e43cb879f89aecea5eabb'
                            variable: '020a6af09fd32200ef4afa7dc67fcfec'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '623f3d48d9ba43c6b6a20b22a9329777'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'hometown'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '62626de1ca61441db47f09b1716a3d27'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c2c83d4bcb714f6281107a1e67d1ec13'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '62771a1bb53f4e70abd10086d92b0e28'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '359e08a20f4b4b0f91e0e9eb98d8d4dd'
                            variable: '50bff9250b3222000b7da95e93673a9b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6286f8c3f75e4836907aeb4ac15f51a3'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '9e14fbb1752940b9910363cda0e5b634'
                            variable: 'c796d40497302200abe4bb7503ac4ad8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6311a10488604b919b3a48fa6326e610'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '61f6814914de43fe9bc4e1f930da7575'
                            variable: '74d6e7a0a3023110571967d1361e616b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '633919d903ea4afb84a62da181458976'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'ops'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '63988e6d16a440a5886c70974b7920bb'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'hits_allowed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '63a80397d9fd40d582aaaa6e18cea7e5'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'war'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '64086e2b3f804359b115205a7d73d2b8'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'last_updated'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '641b4d91b26249029eef0e9a2e6891ee'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '44b6645d4f58437a86fd3edb5c664dda'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6455ef776a43488f952c5854c7920b56'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '005f989e6e98412a88626b4c59d85060'
                            variable: '81e042650b3222000b7da95e93673aa2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '64b28fb647a94d70af55671dfc7d131b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '16d1652412174b0591a8ca404de1dc7a'
                            variable: '58408e250b3222000b7da95e93673a5c'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '64eebcf0bf024514b6c40af8fe9c2290'
                        key: {
                            field: 'record_id'
                            id: 'e5c2af413a0a4624b5413737ee5a9921'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6578c84a78014736bd4db00814380b52'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'at_bats'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6821a5d01f81475fa74cfb98b3f59078'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'walks_allowed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '683ab45de5d14744b573329058881977'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'contract_year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '692a18e7f9f34965b92fc5e13a3cfa22'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '830242e55a8c48c8942786ef59fa2213'
                            variable: '020a6af09fd32200ef4afa7dc67fcfec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6ad89daf82674aa59e8e4822a5e71b3c'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c325ab54e33549c5811a414201b4c674'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6b3a6bb65e764449ba360a703f980ac4'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e5c2af413a0a4624b5413737ee5a9921'
                            variable: '3d6d8b935320220002c6435723dc349c'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6bacc45d68e74c249c97a3a6d90bc3fd'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'position'
                            value: 'left_field'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6be4468477624f69b3f211d9b684624f'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6be9ea70016f4127a40cd4de918743a0'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ef4e4d9995d946ca94a404e985509cee'
                            variable: '523c79985f30220012b44adb7f46663a'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6dc55460eff44481bd0858a138662058'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'weight_lbs'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6e02e49edbc74259bf0ebcf5e5236916'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '993b38bb18bb452699cc85018663e488'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e08494c328c4709b9de31fd9d1c0501'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'wins'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6e221c64c2454ccfa88f9c39655c03e6'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'fielding_percentage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6e5abea3556e4f4d9d8806aaf6602ee0'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'contract_year'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '701708a642c6472b83fb3b761d6a2f07'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '61f6814914de43fe9bc4e1f930da7575'
                            variable: 'b124164e53a0220002c6435723dc34c5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '71446e969c9444ea9144b4b1919624d1'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '59ddde15c4ac43029832929db6f0c464'
                            variable: '4aa838f25320220002c6435723dc34e1'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '725342f3b0cd480dbca12d36243bc65a'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '73c357d05691401bb36b6be43066af5e'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b739c2008b1b485ba5d24e51ef979d3c'
                            variable: '58408e250b3222000b7da95e93673a5c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7484f8bc0e4a44b2995a9bd742d5fcb2'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '44b6645d4f58437a86fd3edb5c664dda'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '753b297cac6042049c6fbd5642663e62'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e5c2af413a0a4624b5413737ee5a9921'
                            variable: '8f7d0f935320220002c6435723dc3471'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '756dc44c57574b6e85e43f4cbc30993e'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '830242e55a8c48c8942786ef59fa2213'
                            variable: '58408e250b3222000b7da95e93673a5c'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76e02eeef37b417aaa2f2318ede91307'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'bats_hand'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '777c9866e3c54cbaaa4266b6c8a0271b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a2c996971275402aa4ab5bb3fbab79b3'
                            variable: '2db298199f132200ef4afa7dc67fcfbc'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '78b4f0bcefcc4c65bff998983d4d0cdb'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'cd82ab2f25b643308fe066f7071d9f8f'
                            variable: '50bff9250b3222000b7da95e93673a9b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7a31693975324d5b96d456792aa0b0fb'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '5433253295fd4400b3900e3e9fabd02a'
                            variable: 'c2eb56e853422110248dddeeff7b1261'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7c8e9c37701f40d79ebdc982cb9ebc26'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '041f4a3d473a445ab970ca05d788d837'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7d1226563e8e4b0fb3f6d1e669ee5bf8'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'bfe3411f7b8e43cb879f89aecea5eabb'
                            variable: '58408e250b3222000b7da95e93673a5c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7d750bd5c5cc41b2b64599f196e52b1d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '59ddde15c4ac43029832929db6f0c464'
                            variable: 'c83b5337e7633300e12127d8d2f6a98b'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d93e7c8378f4af89f64f408b1638025'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'stolen_bases'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7dcf9746b03e4c93a818f03444ed19e8'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '005f989e6e98412a88626b4c59d85060'
                            variable: '50bff9250b3222000b7da95e93673a9b'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7e2478feb0d642789e6f06e82bee2584'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'assists'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7e4d63820a974d4d9e51705f1709c765'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ffadde5f78154eb68f24c8bb0d044ec3'
                            variable: 'c7e483f3671003007ba405225685effb'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7e615ab09f6d482081e0b19705ac2858'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'ops'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7e675f0034e74de4b11b5cd39a201ac3'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '830242e55a8c48c8942786ef59fa2213'
                            variable: 'cec002650b3222000b7da95e93673aae'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '804db7fd51b34a35967b4c99f04a6f8b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c3dce92894034c6ab0854cf727045a6f'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '82b7a0c1ba324856abccfc63f5d7ed7c'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'throws_hand'
                            value: 'left'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '83a77b6854014241b4d6df39fdbc9d4b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a131e6ce6b7a4ac284c1b21d160f5fd6'
                            variable: '523c79985f30220012b44adb7f46663a'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '84492ff67f6f4a29ba63c3694ea84291'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '16d1652412174b0591a8ca404de1dc7a'
                            variable: '6cdd0ab543010210b6f9a0246bb8f2f2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '84cf07b3f8e84e67b19c22ac7baf6c15'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a3fe21df35464c6cb451a32daf98251b'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '84d518865f3347e39e6d5e6f77f2729c'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'hits_allowed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '84ec384eddf54085a2d9d27fcfbbb18d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '3e904e7c441a4714b1d7a0ca80cf2476'
                            variable: '3d6d8b935320220002c6435723dc349c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '84fa8e61dd1b4a62bbdd8e5f9513b852'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a3fe21df35464c6cb451a32daf98251b'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '86f9d59f7a914f5995010c57a724cf2b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '75e3ca3252104eaca38a2beacb157691'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '872629258d3f4817a03e3f0a20d704cc'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'runs_batted_in'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '879a528567e94964a5be81d0f7670b40'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b2eb0e8121734efd8cf8f1c029213624'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '888c885a280640bfa5df93dcbc898f8f'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'doubles'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8930ba8ee6154d3cb874d6abb625196c'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '80b23bbf1c1140448341d112b7dba80c'
                            variable: '59877da10b3222000b7da95e93673a56'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '893762b360e8413aaef4a52a612ed8f7'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '14db114dc00a46c3904ad00caf810215'
                            variable: 'd13d0b935320220002c6435723dc34c8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '89c6d34699f74bae959191a1ab1f401e'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'age'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8c20f96dbd094e1688af3893cfdd73e1'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '66153570a5be4894978d0b49bf7f664b'
                            variable: 'c83b5337e7633300e12127d8d2f6a98b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8cc59625c686497680b6141f877d44ce'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'bfe3411f7b8e43cb879f89aecea5eabb'
                            variable: '59877da10b3222000b7da95e93673a56'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8f4b1a77a6e54778ac66c04064792baf'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f2d8750de38845f79571081a1882ecbb'
                            variable: '58408e250b3222000b7da95e93673a5c'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8ff1c00331114bfab4418cd027cfb2ae'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'saves'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '900355b5d4e64eda90a6decf4151d5f2'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e660c675866144d3bb5ae6ba19d85b43'
                            variable: '1d94cb1f3b8032000774229c93efc419'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '906080734df9453f9b588748f7c70150'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'walks'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9203ea82c5394cd7ae1c5edf746f9a82'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '59ddde15c4ac43029832929db6f0c464'
                            variable: 'a0e13cc35320220002c6435723dc3467'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '920d35dc07e24eca86ee83e37c016e84'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e9b2e3efad734570991f4d4522c6fd94'
                            variable: '6e5a1b535320220002c6435723dc3498'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9302d63f629d4e1e940c391fc010e627'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '189589bb94514ecdb8c58bb62345fd4a'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '93f4cfe484f2466b856d689ec4990d0e'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '80b23bbf1c1140448341d112b7dba80c'
                            variable: 'cec002650b3222000b7da95e93673aae'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '944d03a18f66428685480d1ca6112752'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'putouts'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '951505418448425e895dab626262fe60'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '2264f8f73f4d4b8294bcb1c90f49716a'
                            variable: 'ae8b91c9ffa333008d3f5d9ad53bf1ba'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9525604e05ba4fd5b2df571baf4fc738'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '9e8a402719714e75a5b2b802fc4611ef'
                            variable: '9f5f67709f132200ef4afa7dc67fcf94'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '955ec0593bd745e58a83311bcdfdda2d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '66153570a5be4894978d0b49bf7f664b'
                            variable: '4aa838f25320220002c6435723dc34e1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '95833de747bc4b6e8feafad3bd1edb98'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'whip'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '960b0959823741e28c62e75dc48f6a28'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '41d0a085a03246c98d7b1c27a30fe046'
                            variable: '523c79985f30220012b44adb7f46663a'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '961204d3f5904260a61dbb2ff2ce904b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '61f6814914de43fe9bc4e1f930da7575'
                            variable: '17d732a9c7a333005e5c45b881c26007'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '96265a14468140d4beda2b8813f7dce4'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '005f989e6e98412a88626b4c59d85060'
                            variable: '58408e250b3222000b7da95e93673a5c'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98c3657170bd44e39d560908ab40057b'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'earned_runs'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9905ee50be5142dcb4a5d588c13165aa'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'throws_hand'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9940dcea9f584e1386aaa955203f783d'
                        key: {
                            field: 'record_id'
                            id: 'c463243452ba474d938bb89c23ffee3c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '99ac3cc8ddc1498289e5afcc9ac82b4d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ec9f0229531245c8a8cd25b56c87aed8'
                            variable: '5a9258199f132200ef4afa7dc67fcfb4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a96e4023ab247a28a0c09a8499db7f9'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'all_star'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a978b36ab0c4c81a2f942e3127d959b'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9aebdc6eee5b411182748ec679f3737f'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '3e904e7c441a4714b1d7a0ca80cf2476'
                            variable: '8f7d0f935320220002c6435723dc3471'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9b88d7aa94ff4f5e91613a9fe7d67caa'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '80b23bbf1c1140448341d112b7dba80c'
                            variable: '6cdd0ab543010210b6f9a0246bb8f2f2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c21b5b7299c4492918fe269445c9271'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'draft_round'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9c5bd036e0be45c7886c60dba024428d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '66153570a5be4894978d0b49bf7f664b'
                            variable: 'a0e13cc35320220002c6435723dc3467'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9cd0d1f156ce450eaffe178d0fb6ab70'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'position'
                            value: 'first_base'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d93928f299842aeb7f3f15b1a192656'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'position'
                            value: 'shortstop'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f9ded4ce7194f979461c7911cb2e6b7'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'strikeouts_pitched'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9fae0f305b3447af9966dce285362ab3'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'whip'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9fe7f288940f4d5ba984b3c2871a210c'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'jersey_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a09ada0c8b5c4162b56a2dc57cb83787'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c3dce92894034c6ab0854cf727045a6f'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a22612beb0274257b59069665cca68c9'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ffadde5f78154eb68f24c8bb0d044ec3'
                            variable: '3d6d8b935320220002c6435723dc349c'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a2331395819e4d0cb2ba3a262fdbc055'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'bats_hand'
                            value: 'switch'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a249d0d1bbe649f9845b1551de45e77a'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b739c2008b1b485ba5d24e51ef979d3c'
                            variable: 'cec002650b3222000b7da95e93673aae'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a3166ac416894136908a1ac374bbd128'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '830242e55a8c48c8942786ef59fa2213'
                            variable: '89ad06b543010210b6f9a0246bb8f2d7'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a59adc45e7db4ccdb975b8e60a6bdaa8'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '14db114dc00a46c3904ad00caf810215'
                            variable: '3d6d8b935320220002c6435723dc349c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a5a86ea2270b453eac3d948f50f00f91'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '16d1652412174b0591a8ca404de1dc7a'
                            variable: '59877da10b3222000b7da95e93673a56'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a692331a3fc044faa49d4b90c7f12498'
                        key: {
                            field: 'field_values'
                            id: '993b38bb18bb452699cc85018663e488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a8cf0c309923487db9e41e2e250ddf27'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a66444a9141541119990e3d2064d5eca'
                            variable: '1d94cb1f3b8032000774229c93efc419'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a9923e2661b541679a7e622963116061'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '47d0c8c84e7b47948a764313fb801109'
                            variable: '9f5f67709f132200ef4afa7dc67fcf94'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a9ea5317783a47a991421224e0fa55e8'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'draft_year'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ab7b4f962b9e4b4b8802d123dab4a8ea'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '359e08a20f4b4b0f91e0e9eb98d8d4dd'
                            variable: '58408e250b3222000b7da95e93673a5c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ac071e4625e44a30bca09e9f8fbc478d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f2d8750de38845f79571081a1882ecbb'
                            variable: '6cdd0ab543010210b6f9a0246bb8f2f2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ac848b296bc24a0d99d9053fceef6003'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'cd82ab2f25b643308fe066f7071d9f8f'
                            variable: '58408e250b3222000b7da95e93673a5c'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ac947bd3f7014b588a636c1c96fb5084'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ad42f078bf4a44edb055087ccf7a161f'
                        key: {
                            field: 'field_values'
                            id: 'a3fe21df35464c6cb451a32daf98251b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'adeea25872e84c59aeadbc3b3b1a3a40'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'walks'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ae01758836b44a9a9968f35ded7a5d6c'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '75e3ca3252104eaca38a2beacb157691'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae5a1285de6a4a4fb5f70e1258874f24'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'earned_run_average'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae7862615ebc4153902d98312d606d7c'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'debut_date'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'aecf80669e59438e9267c7a2e1a464f4'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '61f6814914de43fe9bc4e1f930da7575'
                            variable: 'c2eb56e853422110248dddeeff7b1261'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af5207795f994ede87a9e1b3e4a71bcc'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'af5ffd6ccdc8441aa8ef47ad833b61c1'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a86ba21132944c5c979e80c09d6eeef5'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b205eceeeaf044839d4fba3847e848b5'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '005f989e6e98412a88626b4c59d85060'
                            variable: 'cec002650b3222000b7da95e93673aae'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b2ac460633a747aabaff7138c5dc44cf'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b2eb0e8121734efd8cf8f1c029213624'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b37d7ccb8cb84fdd8395446f123390b4'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b5a3acf993f444439e0aaec64d762bb9'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'triples'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b5b7f8d7031a4745a9b39d9a93643d4f'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'strikeouts'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b5ec5115376e48eca6f156b328285c75'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'home_runs'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b82eaa0dbd9b450a8c2c668f7d8b848d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ffadde5f78154eb68f24c8bb0d044ec3'
                            variable: '8f7d0f935320220002c6435723dc3471'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b859d222d697493b91a642e1bc90aba2'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b912cbdde4d847188e0c99af45c2dcb2'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'errors'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b94ca80dcbd54486a9a0341813f1eac2'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '189589bb94514ecdb8c58bb62345fd4a'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b9721343c35d4bf0970a9cd8c5c06763'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b739c2008b1b485ba5d24e51ef979d3c'
                            variable: '81e042650b3222000b7da95e93673aa2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b994b55a031541339238874eb4706a36'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '4c20d31599e740baaa8d1ef81b9a3b42'
                            variable: '5a9258199f132200ef4afa7dc67fcfb4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b9afe6ab40e54ed9a9cae9a997f02639'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '16d1652412174b0591a8ca404de1dc7a'
                            variable: '89ad06b543010210b6f9a0246bb8f2d7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba07c9268d9c4e24994f4318e1841bb5'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'innings_pitched'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'baa31085aa1c4309be71a12885bb793c'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '993b38bb18bb452699cc85018663e488'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb7cd608a7994f2388dc94d637357378'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'earned_runs'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbe6daf1ae78425786d9074ab937127b'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'team_name'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bc7cad4087ec4367a1e5d1b55618c359'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '47d0c8c84e7b47948a764313fb801109'
                            variable: '1d94cb1f3b8032000774229c93efc419'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc84c455dac74b2eb35755043c6f42a8'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'games_played'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bd0d5dfbe6d34636b02c17bbcc053a85'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '5433253295fd4400b3900e3e9fabd02a'
                            variable: '6e55da4e53a0220002c6435723dc34a0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bd97c958dde641fd933078b3f0ceb0c7'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a2c996971275402aa4ab5bb3fbab79b3'
                            variable: '7b139c199f132200ef4afa7dc67fcfb3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bdb5e928bc234019b7048c6c88c3cb8d'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'on_base_percentage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bdbdbb98c0794e3a8634222e046a5185'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b739c2008b1b485ba5d24e51ef979d3c'
                            variable: '020a6af09fd32200ef4afa7dc67fcfec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'be3c0d067aa84d2db84cfd753aa69963'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b2eb0e8121734efd8cf8f1c029213624'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'be41e15da2f34a7e9b0741721a581048'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '63b2bd15d6054879bd9bcec6fcbc52e0'
                            variable: 'b3dba2465320220002c6435723dc34f0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bf1afeda4390420f815f0a8bf753c84e'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c463243452ba474d938bb89c23ffee3c'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bf3ff158a8294301ade1ab22aa887148'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '22c2e4379e044e758aa17f89cf6e23c0'
                            variable: 'ddab3f819f132200ef4afa7dc67fcf2b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bf66524f419a434b88876373ed14758b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '005f989e6e98412a88626b4c59d85060'
                            variable: '59877da10b3222000b7da95e93673a56'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bff6944bbf4542f68edda4a2f6127433'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'on_base_percentage'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bff8b42af42b4b2d931a5f348df643d2'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'batting_average'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c0870e48d10a4d869d7e9c87f62b3305'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'bfe3411f7b8e43cb879f89aecea5eabb'
                            variable: '6cdd0ab543010210b6f9a0246bb8f2f2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c1bcd4ed52e240f089ab019bd4f01d16'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '8497e410d0ba4fcb96c56129b2e21fab'
                            variable: '480b3b819f132200ef4afa7dc67fcf33'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c1d0da0402b14341bf6e83d9b891689d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b739c2008b1b485ba5d24e51ef979d3c'
                            variable: '89ad06b543010210b6f9a0246bb8f2d7'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c230ca49655e4ecc97b906043d6b4f1b'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'position'
                            value: 'right_field'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c29042f4a76b46aab1d5b98d966d112e'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '359e08a20f4b4b0f91e0e9eb98d8d4dd'
                            variable: '59877da10b3222000b7da95e93673a56'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c2cb7c4911d245f9b048f7b9473942cd'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f2d8750de38845f79571081a1882ecbb'
                            variable: '81e042650b3222000b7da95e93673aa2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c43c33542aec4f2b81d7af233afec48c'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f93e827ea76d499ea208225856eee484'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c47df612ab674915a48b923fe20f9138'
                        key: {
                            field: 'record_id'
                            id: '14db114dc00a46c3904ad00caf810215'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5555e535f0b44809d8f9c24b49b5441'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'assists'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c6cdadc0b44b414b9e2e04cb1222407e'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b739c2008b1b485ba5d24e51ef979d3c'
                            variable: '6cdd0ab543010210b6f9a0246bb8f2f2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c7cbb4319c79448480f2fd4fb536e827'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e9b2e3efad734570991f4d4522c6fd94'
                            variable: 'e81ad3535320220002c6435723dc340c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c89b268c3ad642f494964f559ee7bd9a'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '189589bb94514ecdb8c58bb62345fd4a'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c8da015023a545808818b2408b14e9d0'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'season_year'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c94dd75bacb840f58392104cfa8f5aa1'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '63b2bd15d6054879bd9bcec6fcbc52e0'
                            variable: '946f3c1a0f23330072e6452bc4767eda'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c977d0778ea646198da748de2ed5337d'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'position'
                            value: 'pitcher'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c9d1ffde6394431db7a8602e672c61d3'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f93e827ea76d499ea208225856eee484'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ca0678d23adf49aba423721f491042ed'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '241cf9faa1ce427889de0b0606f1bccb'
                            variable: '1d94cb1f3b8032000774229c93efc419'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ca11f72724224c7291ef3702c985816a'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ad2c23d52fb841b79e7f25dad81cf61b'
                            variable: '9f5f67709f132200ef4afa7dc67fcf94'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'caf6746434ab49c48313b94ef7e99e74'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '005f989e6e98412a88626b4c59d85060'
                            variable: '89ad06b543010210b6f9a0246bb8f2d7'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cb30069a796945afa97d518858397d2c'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '77d98d5687614ebab52dab2ce2b9bf67'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb512a63afa04520a3190a2398030b4d'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'last_updated'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc3848844c224a659f35cc6bdd1c7e35'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'jersey_number'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cc7b15f4377b4dd9a1e4210d773c27bb'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '5541dadd77414b2e9ab8ffe52066c5f0'
                            variable: 'cd4744919f132200ef4afa7dc67fcf6e'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cdc7d2963b574abdaad36bc24ab33e6e'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e41262a9421c4779ba444860cc33c8fb'
                            variable: '1d94cb1f3b8032000774229c93efc419'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ce7282e200d14defa4d9dca3ea4647e4'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'cy_young_votes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf2a0016c034490a900165fe207ca130'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'debut_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cf87165fc7524cc8bd8911d2ccb9a591'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '16d1652412174b0591a8ca404de1dc7a'
                            variable: '50bff9250b3222000b7da95e93673a9b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd058292ad2d44f4a9e8f9a0d929ee627'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c2c83d4bcb714f6281107a1e67d1ec13'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0c6a6968b5b4fb28a72f77a07e98f51'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'runs_scored'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd11f8a7ce5a5417ab0d7e4101c5d77b7'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b5e47c6f178643bdb3d12b361bca9ebd'
                            variable: '7b139c199f132200ef4afa7dc67fcfb3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd22cfd1ae2f64ec1ade477001e58b4da'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'throws_hand'
                            value: 'switch'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd24ded724bbc49b294c67825f4820e59'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f2d8750de38845f79571081a1882ecbb'
                            variable: '59877da10b3222000b7da95e93673a56'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd5c7dec00b774140bedd890dce0ee86c'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a66444a9141541119990e3d2064d5eca'
                            variable: '9f5f67709f132200ef4afa7dc67fcf94'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd6277e722b5c4bedbff20e6dd1847818'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'doubles'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd664f822922944378940d945be32b1fe'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e9b2e3efad734570991f4d4522c6fd94'
                            variable: 'b1fefcde73633300b19898b8caf6a7af'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd6dfa52412bc4921abf6716ae0bf5cc0'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '189589bb94514ecdb8c58bb62345fd4a'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd7344e1d241b43098bf52208c28f1afa'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'cd82ab2f25b643308fe066f7071d9f8f'
                            variable: '89ad06b543010210b6f9a0246bb8f2d7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd80980ec6e7248c18c523dd2c4712c9c'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'slugging_percentage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd82850e2172e496ca60af84597f87e69'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '84ebde8030424086ae89ce18b961719f'
                            variable: '1d94cb1f3b8032000774229c93efc419'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd938297487fa4ec785c90dbea623bd22'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f2d8750de38845f79571081a1882ecbb'
                            variable: '89ad06b543010210b6f9a0246bb8f2d7'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd9a16a77f9aa4e9aa87b255c35075f36'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'e41262a9421c4779ba444860cc33c8fb'
                            variable: '9f5f67709f132200ef4afa7dc67fcf94'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd9a7148a6b374d51b940f8049a3babd5'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'position'
                            value: 'center_field'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da59ecab39ea43a18f7fa1022e5e5d9d'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'runs_scored'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'daf081d86d3a4721912914123971bc12'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'mvp_votes'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'db0be368735f47a499ccd0f16554e01f'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '80b23bbf1c1140448341d112b7dba80c'
                            variable: '50bff9250b3222000b7da95e93673a9b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dcd030534f3343ec8d75c5e049a78940'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'scout_rating'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'dd9ee8ae5c9649a3bc97f8a83096a601'
                        key: {
                            field: 'record_id'
                            id: '61f6814914de43fe9bc4e1f930da7575'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ddc4e465c99a483db8a37a44cf069f9d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '77d98d5687614ebab52dab2ce2b9bf67'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de5210c8a4e340fa80fcb41c413e91ea'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'strikeouts_pitched'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'df20f2a4d3424f35ac0e45661305d3a0'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'af23f3de85ac4acfbfd0013271f70ad3'
                            variable: 'b3dba2465320220002c6435723dc34f0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df49c0f0f2a044bd948bdef79c1698a0'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'height_inches'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'df9a228b32b549c7a4f418b906d6e61a'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a86ba21132944c5c979e80c09d6eeef5'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dff99960c7dc41edb58188634a5f4da1'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '80b23bbf1c1140448341d112b7dba80c'
                            variable: '020a6af09fd32200ef4afa7dc67fcfec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e005fbc366044604829554372f520ca3'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '9e14fbb1752940b9910363cda0e5b634'
                            variable: 'ae8b91c9ffa333008d3f5d9ad53bf1ba'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e17bd8ecf92a4a72a2d2227f7a6b5864'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'stolen_bases'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e28b4648bb794949aaab9b1fe86ac5f0'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'position'
                            value: 'catcher'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e35dc742f40b4bcbb3bebaf8b3fffe7c'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'position'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3ff5faa35314e5eba0523ad32ece306'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'college'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e46cd297e45549f6934ab26921183cfe'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'college'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e52dab38926a44debea229d7d519ef6f'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'wins'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e5c4a82285174f78b0a44cf3ad9e1b65'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '830242e55a8c48c8942786ef59fa2213'
                            variable: '6cdd0ab543010210b6f9a0246bb8f2f2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e5f515dadd3b44a8b5a9654c75572afc'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'cd82ab2f25b643308fe066f7071d9f8f'
                            variable: '6cdd0ab543010210b6f9a0246bb8f2f2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e676edcf0fde4427856158e18fd306b9'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '005f989e6e98412a88626b4c59d85060'
                            variable: '6cdd0ab543010210b6f9a0246bb8f2f2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e6d5c38348fe413cbb0207377d081aa5'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c463243452ba474d938bb89c23ffee3c'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e799ca29331047d486b4c5f146b215c7'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '44b6645d4f58437a86fd3edb5c664dda'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e79f44a721c74bd1bdaf782f3a8a9718'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '5541dadd77414b2e9ab8ffe52066c5f0'
                            variable: '19280c919f132200ef4afa7dc67fcf16'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e7d577a2b85a4087895ad63c997f6c0c'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'bfe3411f7b8e43cb879f89aecea5eabb'
                            variable: '50bff9250b3222000b7da95e93673a9b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e7dd51923b404240957cdddcebafb847'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f93e827ea76d499ea208225856eee484'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e889cbbe16a74de199902741292b877e'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'bats_hand'
                            value: 'left'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e979b5a096d7432988a6e654a6b0583b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '16d1652412174b0591a8ca404de1dc7a'
                            variable: 'cec002650b3222000b7da95e93673aae'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'eaa5cf953e6f41a485838d2240ae4827'
                        key: {
                            field: 'record_id'
                            id: '3e904e7c441a4714b1d7a0ca80cf2476'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eae65fc0a2d24a0a8c91cc600da8711d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '359e08a20f4b4b0f91e0e9eb98d8d4dd'
                            variable: '020a6af09fd32200ef4afa7dc67fcfec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ec707b5ac920489e8c9a8f83c1484cdb'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '830242e55a8c48c8942786ef59fa2213'
                            variable: '50bff9250b3222000b7da95e93673a9b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ecbdd49de2ca49438a549a56c67bbe73'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '5433253295fd4400b3900e3e9fabd02a'
                            variable: '17d732a9c7a333005e5c45b881c26007'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ecf819af68e040e9a735a32de181796e'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'injury_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eed22a5011864b458d095c0eab4ddad8'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'home_runs'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ef0b82e5b82746eb9b07954df1e25119'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '61f6814914de43fe9bc4e1f930da7575'
                            variable: 'ad351a4e53a0220002c6435723dc34f0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef18f0d27f994b8abe7ebb61ebcdc533'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'games_played'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ef227fa3e3074a61a5c767247d787938'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'losses'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'efd001466ffd4687867ad83851efdb5c'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'batting_average'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f005fd4f6a124a8c9dd80d7de1bd83af'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'throws_hand'
                            value: 'right'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f0bf642253af4364ad683dddf9d22e9f'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c3dce92894034c6ab0854cf727045a6f'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1b79d1cf4f34628a08f9ad2bd472cd9'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                            element: 'position'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f2b48f42ace445a1ab73d356c7b2e2c5'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '359e08a20f4b4b0f91e0e9eb98d8d4dd'
                            variable: '81e042650b3222000b7da95e93673aa2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f40f9853ae7d4d88a1d956799fd7dda0'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'mvp_votes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f6a571f182bb48cdb81df21e3922fd4d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'b5e47c6f178643bdb3d12b361bca9ebd'
                            variable: '5a9258199f132200ef4afa7dc67fcfb4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f72ff05648214080bc211b0c2e065bc2'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'a86ba21132944c5c979e80c09d6eeef5'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f870dc1d50bf49cca2d4d807d046d9c8'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '84ebde8030424086ae89ce18b961719f'
                            variable: '9f5f67709f132200ef4afa7dc67fcf94'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f871de465b3845beb77adefc60082ad6'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '0fc68f9bb7f94be2b9d8196a71e42b0e'
                            variable: '523c79985f30220012b44adb7f46663a'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f935eb8caede4aa39bc009ee69a6c154'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '77d98d5687614ebab52dab2ce2b9bf67'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f949506c761a4bcf9eefefc640c6f1cd'
                        key: {
                            name: 'x_snc_baseball_pla_players'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fbf405c9c5ce4b92ace10f589ae6c30d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '9f4c6370717b4985b1b064afe2ce26f5'
                            variable: '523c79985f30220012b44adb7f46663a'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fd950cbd8b7e4d90acec2a909cb541d0'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'bfe3411f7b8e43cb879f89aecea5eabb'
                            variable: '89ad06b543010210b6f9a0246bb8f2d7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ffad4b924aec4c55952e7b7957d00f6b'
                        key: {
                            name: 'x_snc_baseball_pla_player_stats'
                            element: 'war'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
