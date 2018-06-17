let countryData = require('./country_data');

let teams = countryData.groups;

function Match(num, date, time, team1, team2, score1, score2, stadium, city, timezone) {
    this.num = num;
    this.data = date;
    this.time = time;
    this.team1 = team1;
    this.team2 = team2;
    this.score1 = score1;
    this.score2 = score2;
    // this.goals1 = [goals1];
    // this.goals2 = [goals2];
    this.stadium = stadium;
    this.city = city;
    this.timezone = timezone;
}

// let match1Russia = {
//     name: 'Gazinsky',
//     minute: 12,
//     score1: 1,
//     score2: 0,
// }

//Matchday 1
const match1 = new Match(1, '2018-06-14', '18:00', 'Russia', 'Saudi Arabia', 5, 0, 'Luzhniki Stadium', 'Moscow', 'UTC+3');

const matchDay1 = [match1];

//Matchday 2
const match2 = new Match(2, '2018-06-15', '17:00', 'Egypt', 'Uruguay', 0, 1, 'Ekaterinburg Arena', 'Ekaterinburn', 'UTC+5');
const match3 = new Match(3, '2018-06-15', '21:00', 'Portugal', 'Spain', 3, 3, 'Fisht Stadium', 'Sochi', 'UTC+3');
const match4 = new Match(4, '2018-06-15', '18:00', 'Morocco', 'Iran', 0, 1, 'Saint Petersburg Stadium', 'Saint Petersburg', 'UTC+3');

const matchDay2 = [match2, match3, match4];

//Matchday 3
const match5 = new Match(5, '2018-06-16', '13:00', 'France', 'Australia', 2, 1, 'Kazan Arena', 'Kazan', 'UTC+3');
const match6 = new Match(6, '2018-06-16', '16:00', 'Argentina', 'Iceland', 1, 1, 'Spartak Stadium', 'Moscow', 'UTC+3');
const match7 = new Match(7, '2018-06-16', '19:00', 'Peru', 'Denmark', 0, 1, 'Mordovia Arena', 'Saransk', 'UTC+3');
const match8 = new Match(8, '2018-06-16', '21:00', 'Croatia', 'Nigeria', 2, 0, 'Kalingrad Stadium', 'Kalingrad', 'UTC+2');

const matchDay3 = [match5, match6, match7, match8];

//Matchday 4
const match9 = new Match(9, '2018-06-17', '16:00', 'Costa Rica', 'Serbia', null, null, 'Samara Arena', 'Samara', 'UTC+4');
const match10 = new Match(10, '2018-06-17', '18:00', 'Germany', 'Mexico', null, null, 'Luzhniki Stadium', 'Moscow', 'UTC+3');
const match11 = new Match(11, '2018-06-17', '21:00', 'Brazil', 'Switzerland', null, null, 'Rostov Arena', 'Rostov-on-Don', 'UTC+3');

matchDay4 = [match9, match10, match11];

//Matchday 5
const match12 = new Match(12, '2018-06-18', '15:00', 'Sweden', 'South Korea', null, null, 'Nizhny Novgorod Stadium', 'Nizhny Novgorod', 'UTC+3');
const match13 = new Match(13, '2018-06-18', '18:00', 'Belgium', 'Panama', null, null, 'Fisht Stadium', 'UTC+3');
const match14 = new Match(14, '2018-06-18', '21:00', 'Tunisia', 'England', null, null, 'Volgograd Arean', 'Volgograd', 'UTC+3');

const Matchday5 = [match12, match13, match14];

//Matchday 6
const match15 = new Match(15, '2018-06-19', '15:00', 'Colombia', 'Japan', null, null, 'Mordovia Arena', 'Saransk', 'UTC+3');
const match16 = new Match(16, '2018-06-19', '18:00', 'Poland', 'Senegal', null, null, 'Spartak Stadium', 'Moscow', 'UTC+3');
const match17 = new Match(17, '2018-06-19', '21:00', 'Russia', 'Egypt', null, null, 'Saint Petersburg Stadium', 'Saint Petersburg', 'UTC+3');

const Matchday6 = [match15, match16, match17]

const matches = [matchDay1, matchDay2, matchDay3, matchDay4];

module.exports.matches = matches;