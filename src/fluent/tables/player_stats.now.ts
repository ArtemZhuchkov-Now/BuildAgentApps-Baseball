import '@servicenow/sdk/global'
import { 
    Table, 
    IntegerColumn, 
    DecimalColumn, 
    ReferenceColumn,
    DateColumn,
    BooleanColumn
} from '@servicenow/sdk/core'

// Creates baseball_player_stats table for storing seasonal performance statistics
export const x_snc_baseball_pla_player_stats = Table({
    name: 'x_snc_baseball_pla_player_stats',
    label: 'Baseball Player Stats',
    schema: {
        player: ReferenceColumn({
            label: 'Player',
            referenceTable: 'x_snc_baseball_pla_players',
            mandatory: true
        }),
        season_year: IntegerColumn({
            label: 'Season Year',
            min: 2020,
            max: 2025,
            mandatory: true
        }),
        games_played: IntegerColumn({
            label: 'Games Played',
            min: 0,
            max: 162
        }),
        // Batting Statistics
        at_bats: IntegerColumn({
            label: 'At Bats',
            min: 0
        }),
        hits: IntegerColumn({
            label: 'Hits',
            min: 0
        }),
        doubles: IntegerColumn({
            label: 'Doubles',
            min: 0
        }),
        triples: IntegerColumn({
            label: 'Triples',
            min: 0
        }),
        home_runs: IntegerColumn({
            label: 'Home Runs',
            min: 0
        }),
        runs_batted_in: IntegerColumn({
            label: 'RBIs',
            min: 0
        }),
        runs_scored: IntegerColumn({
            label: 'Runs Scored',
            min: 0
        }),
        stolen_bases: IntegerColumn({
            label: 'Stolen Bases',
            min: 0
        }),
        walks: IntegerColumn({
            label: 'Walks',
            min: 0
        }),
        strikeouts: IntegerColumn({
            label: 'Strikeouts',
            min: 0
        }),
        batting_average: DecimalColumn({
            label: 'Batting Average',
            maxLength: 5
        }),
        on_base_percentage: DecimalColumn({
            label: 'On Base Percentage',
            maxLength: 5
        }),
        slugging_percentage: DecimalColumn({
            label: 'Slugging Percentage',
            maxLength: 5
        }),
        ops: DecimalColumn({
            label: 'OPS (On-base Plus Slugging)',
            maxLength: 5
        }),
        // Pitching Statistics (for pitchers)
        innings_pitched: DecimalColumn({
            label: 'Innings Pitched',
            maxLength: 6
        }),
        wins: IntegerColumn({
            label: 'Wins',
            min: 0
        }),
        losses: IntegerColumn({
            label: 'Losses',
            min: 0
        }),
        saves: IntegerColumn({
            label: 'Saves',
            min: 0
        }),
        earned_runs: IntegerColumn({
            label: 'Earned Runs',
            min: 0
        }),
        earned_run_average: DecimalColumn({
            label: 'ERA (Earned Run Average)',
            maxLength: 5
        }),
        strikeouts_pitched: IntegerColumn({
            label: 'Strikeouts (Pitching)',
            min: 0
        }),
        walks_allowed: IntegerColumn({
            label: 'Walks Allowed',
            min: 0
        }),
        hits_allowed: IntegerColumn({
            label: 'Hits Allowed',
            min: 0
        }),
        whip: DecimalColumn({
            label: 'WHIP (Walks + Hits per IP)',
            maxLength: 5
        }),
        // Fielding Statistics
        fielding_percentage: DecimalColumn({
            label: 'Fielding Percentage',
            maxLength: 5
        }),
        errors: IntegerColumn({
            label: 'Errors',
            min: 0
        }),
        assists: IntegerColumn({
            label: 'Assists',
            min: 0
        }),
        putouts: IntegerColumn({
            label: 'Putouts',
            min: 0
        }),
        // Awards and Recognition
        all_star: BooleanColumn({
            label: 'All-Star Selection'
        }),
        mvp_votes: IntegerColumn({
            label: 'MVP Votes Received',
            min: 0
        }),
        cy_young_votes: IntegerColumn({
            label: 'Cy Young Votes Received',
            min: 0
        }),
        war: DecimalColumn({
            label: 'WAR (Wins Above Replacement)',
            maxLength: 5
        }),
        last_updated: DateColumn({
            label: 'Last Updated'
        })
    },
    display: 'player',
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete'],
    allow_web_service_access: true,
    extensible: false
})