import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// LA Dodgers Star Players
export const player_mookie_betts = Record({
    $id: Now.ID['player-mookie-betts'],
    table: 'x_snc_baseball_pla_players',
    data: {
        player_name: 'Mookie Betts',
        jersey_number: 50,
        position: 'right_field',
        team_name: 'Los Angeles Dodgers',
        age: 31,
        height_inches: 69, // 5'9"
        weight_lbs: 180,
        throws_hand: 'right',
        bats_hand: 'right',
        salary: 30000000,
        contract_year: 2025,
        debut_date: '2014-06-29',
        hometown: 'Nashville, TN',
        college: 'Overton High School',
        draft_year: 2011,
        draft_round: 5,
        injury_status: false,
        scout_rating: 9.5,
        notes: 'Elite all-around player with excellent defense, speed, and power. Former AL MVP and consistent All-Star performer.'
    }
})

export const player_freddie_freeman = Record({
    $id: Now.ID['player-freddie-freeman'],
    table: 'x_snc_baseball_pla_players',
    data: {
        player_name: 'Freddie Freeman',
        jersey_number: 5,
        position: 'first_base',
        team_name: 'Los Angeles Dodgers',
        age: 34,
        height_inches: 77, // 6'5"
        weight_lbs: 220,
        throws_hand: 'left',
        bats_hand: 'left',
        salary: 27000000,
        contract_year: 2026,
        debut_date: '2010-09-01',
        hometown: 'Villa Park, CA',
        college: 'El Modena High School',
        draft_year: 2007,
        draft_round: 2,
        injury_status: false,
        scout_rating: 9.2,
        notes: '2021 NL MVP with exceptional hitting ability and consistent production. Gold Glove caliber first baseman.'
    }
})

export const player_julio_urias = Record({
    $id: Now.ID['player-julio-urias'],
    table: 'x_snc_baseball_pla_players',
    data: {
        player_name: 'Julio Urías',
        jersey_number: 7,
        position: 'pitcher',
        team_name: 'Los Angeles Dodgers',
        age: 27,
        height_inches: 72, // 6'0"
        weight_lbs: 215,
        throws_hand: 'left',
        bats_hand: 'left',
        salary: 8000000,
        contract_year: 2024,
        debut_date: '2016-05-27',
        hometown: 'Culiacán, Mexico',
        college: 'N/A',
        draft_year: 2012,
        draft_round: 0, // International signing
        injury_status: false,
        scout_rating: 8.8,
        notes: 'Dominant left-handed starter with excellent control and postseason experience. Key rotation piece.'
    }
})

// Other MLB Stars
export const player_aaron_judge = Record({
    $id: Now.ID['player-aaron-judge'],
    table: 'x_snc_baseball_pla_players',
    data: {
        player_name: 'Aaron Judge',
        jersey_number: 99,
        position: 'right_field',
        team_name: 'New York Yankees',
        age: 31,
        height_inches: 79, // 6'7"
        weight_lbs: 282,
        throws_hand: 'right',
        bats_hand: 'right',
        salary: 40000000,
        contract_year: 2025,
        debut_date: '2016-08-13',
        hometown: 'Linden, CA',
        college: 'Fresno State University',
        draft_year: 2013,
        draft_round: 1,
        injury_status: false,
        scout_rating: 9.8,
        notes: '2022 AL MVP and home run king. Massive power and excellent leadership. Yankees captain.'
    }
})

export const player_ronald_acuna = Record({
    $id: Now.ID['player-ronald-acuna'],
    table: 'x_snc_baseball_pla_players',
    data: {
        player_name: 'Ronald Acuña Jr.',
        jersey_number: 13,
        position: 'right_field',
        team_name: 'Atlanta Braves',
        age: 26,
        height_inches: 72, // 6'0"
        weight_lbs: 205,
        throws_hand: 'right',
        bats_hand: 'right',
        salary: 17000000,
        contract_year: 2028,
        debut_date: '2018-04-25',
        hometown: 'Maracay, Venezuela',
        college: 'N/A',
        draft_year: 2014,
        draft_round: 0, // International signing
        injury_status: false,
        scout_rating: 9.7,
        notes: '2023 NL MVP with 40-70 season. Exceptional combination of power and speed. Generational talent.'
    }
})

export const player_shohei_ohtani = Record({
    $id: Now.ID['player-shohei-ohtani'],
    table: 'x_snc_baseball_pla_players',
    data: {
        player_name: 'Shohei Ohtani',
        jersey_number: 17,
        position: 'designated_hitter',
        team_name: 'Los Angeles Dodgers',
        age: 29,
        height_inches: 76, // 6'4"
        weight_lbs: 210,
        throws_hand: 'right',
        bats_hand: 'left',
        salary: 70000000,
        contract_year: 2033,
        debut_date: '2018-03-29',
        hometown: 'Oshu, Japan',
        college: 'Hanamaki Higashi High School',
        draft_year: 0, // International signing
        draft_round: 0,
        injury_status: false,
        scout_rating: 10.0,
        notes: 'Unicorn two-way player. 2021 & 2023 AL MVP. Historic talent as both pitcher and hitter.'
    }
})

export const player_mike_trout = Record({
    $id: Now.ID['player-mike-trout'],
    table: 'x_snc_baseball_pla_players',
    data: {
        player_name: 'Mike Trout',
        jersey_number: 27,
        position: 'center_field',
        team_name: 'Los Angeles Angels',
        age: 32,
        height_inches: 74, // 6'2"
        weight_lbs: 235,
        throws_hand: 'right',
        bats_hand: 'right',
        salary: 37000000,
        contract_year: 2030,
        debut_date: '2011-07-08',
        hometown: 'Vineland, NJ',
        college: 'Millville High School',
        draft_year: 2009,
        draft_round: 1,
        injury_status: true, // Often dealing with injuries recently
        scout_rating: 9.6,
        notes: '3-time AL MVP and perennial superstar. One of the greatest players of his generation despite injury concerns.'
    }
})

export const player_francisco_lindor = Record({
    $id: Now.ID['player-francisco-lindor'],
    table: 'x_snc_baseball_pla_players',
    data: {
        player_name: 'Francisco Lindor',
        jersey_number: 12,
        position: 'shortstop',
        team_name: 'New York Mets',
        age: 30,
        height_inches: 71, // 5'11"
        weight_lbs: 190,
        throws_hand: 'right',
        bats_hand: 'switch',
        salary: 34100000,
        contract_year: 2031,
        debut_date: '2015-06-14',
        hometown: 'Caguas, Puerto Rico',
        college: 'Montverde Academy',
        draft_year: 2011,
        draft_round: 1,
        injury_status: false,
        scout_rating: 9.0,
        notes: 'Elite defensive shortstop with excellent offensive production. Great leadership and clubhouse presence.'
    }
})

export const player_gerrit_cole = Record({
    $id: Now.ID['player-gerrit-cole'],
    table: 'x_snc_baseball_pla_players',
    data: {
        player_name: 'Gerrit Cole',
        jersey_number: 45,
        position: 'pitcher',
        team_name: 'New York Yankees',
        age: 33,
        height_inches: 76, // 6'4"
        weight_lbs: 220,
        throws_hand: 'right',
        bats_hand: 'right',
        salary: 36000000,
        contract_year: 2028,
        debut_date: '2013-06-11',
        hometown: 'Newport Beach, CA',
        college: 'UCLA',
        draft_year: 2011,
        draft_round: 1,
        injury_status: false,
        scout_rating: 9.1,
        notes: 'Cy Young winner and strikeout machine. Elite fastball-slider combination with excellent command.'
    }
})