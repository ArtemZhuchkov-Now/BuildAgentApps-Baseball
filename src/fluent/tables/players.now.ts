import '@servicenow/sdk/global'
import { 
    Table, 
    StringColumn, 
    IntegerColumn, 
    DecimalColumn, 
    DateColumn, 
    BooleanColumn
} from '@servicenow/sdk/core'

// Creates baseball_players table for storing player information
export const x_snc_baseball_pla_players = Table({
    name: 'x_snc_baseball_pla_players',
    label: 'Baseball Players',
    schema: {
        player_name: StringColumn({ 
            label: 'Player Name', 
            maxLength: 100,
            mandatory: true
        }),
        jersey_number: IntegerColumn({ 
            label: 'Jersey Number', 
            min: 0, 
            max: 99 
        }),
        position: StringColumn({
            label: 'Primary Position',
            maxLength: 30,
            choices: {
                pitcher: { label: 'Pitcher (P)', sequence: 1 },
                catcher: { label: 'Catcher (C)', sequence: 2 },
                first_base: { label: 'First Base (1B)', sequence: 3 },
                second_base: { label: 'Second Base (2B)', sequence: 4 },
                third_base: { label: 'Third Base (3B)', sequence: 5 },
                shortstop: { label: 'Shortstop (SS)', sequence: 6 },
                left_field: { label: 'Left Field (LF)', sequence: 7 },
                center_field: { label: 'Center Field (CF)', sequence: 8 },
                right_field: { label: 'Right Field (RF)', sequence: 9 },
                designated_hitter: { label: 'Designated Hitter (DH)', sequence: 10 }
            },
            dropdown: 'dropdown_with_none'
        }),
        team_name: StringColumn({ 
            label: 'Team', 
            maxLength: 100,
            mandatory: true
        }),
        age: IntegerColumn({ 
            label: 'Age', 
            min: 16, 
            max: 50 
        }),
        height_inches: IntegerColumn({ 
            label: 'Height (inches)', 
            min: 60, 
            max: 84 
        }),
        weight_lbs: IntegerColumn({ 
            label: 'Weight (lbs)', 
            min: 140, 
            max: 300 
        }),
        throws_hand: StringColumn({
            label: 'Throwing Hand',
            maxLength: 10,
            choices: {
                right: { label: 'Right', sequence: 1 },
                left: { label: 'Left', sequence: 2 },
                switch: { label: 'Switch', sequence: 3 }
            },
            dropdown: 'dropdown_with_none'
        }),
        bats_hand: StringColumn({
            label: 'Batting Hand',
            maxLength: 10,
            choices: {
                right: { label: 'Right', sequence: 1 },
                left: { label: 'Left', sequence: 2 },
                switch: { label: 'Switch', sequence: 3 }
            },
            dropdown: 'dropdown_with_none'
        }),
        salary: IntegerColumn({ 
            label: 'Annual Salary ($)', 
            min: 0 
        }),
        contract_year: IntegerColumn({ 
            label: 'Contract Year', 
            min: 2020, 
            max: 2030 
        }),
        debut_date: DateColumn({ 
            label: 'MLB Debut Date' 
        }),
        hometown: StringColumn({ 
            label: 'Hometown', 
            maxLength: 100 
        }),
        college: StringColumn({ 
            label: 'College', 
            maxLength: 100 
        }),
        draft_year: IntegerColumn({ 
            label: 'Draft Year', 
            min: 1990, 
            max: 2025 
        }),
        draft_round: IntegerColumn({ 
            label: 'Draft Round', 
            min: 1, 
            max: 50 
        }),
        injury_status: BooleanColumn({ 
            label: 'Currently Injured' 
        }),
        scout_rating: DecimalColumn({ 
            label: 'Scout Rating (1-10)', 
            maxLength: 3 
        }),
        notes: StringColumn({ 
            label: 'Scouting Notes', 
            maxLength: 1000 
        })
    },
    display: 'player_name',
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete'],
    allow_web_service_access: true,
    extensible: false
})