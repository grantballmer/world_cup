let countryData = require('./country_data');

let teams = countryData.groups;

function Match(num, date, time, team1, team2, score1, score2, stadium, city, timezone, highlight) {
    this.num = num;
    this.date = date;
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
    this.highlight = highlight;
}

// let match1Russia = {
//     name: 'Gazinsky',
//     minute: 12,
//     score1: 1,
//     score2: 0,
// }

//Matchday 1
const match1 = new Match(1, '2018-06-14', '18:00', 'Russia', 'Saudi Arabia', 5, 0, 'Luzhniki Stadium', 'Moscow', 'UTC+3', "https://www.youtube.com/embed/SDY1N-IJOA8");

const matchDay1 = [match1];

//Matchday 2
const match2 = new Match(2, '2018-06-15', '17:00', 'Egypt', 'Uruguay', 0, 1, 'Ekaterinburg Arena', 'Ekaterinburn', 'UTC+5', "https://www.youtube.com/embed/LPzZa-Btx6I");
const match3 = new Match(3, '2018-06-15', '21:00', 'Portugal', 'Spain', 3, 3, 'Fisht Stadium', 'Sochi', 'UTC+3', "https://www.youtube.com/embed/4rp2aLQl7vg");
const match4 = new Match(4, '2018-06-15', '18:00', 'Morocco', 'Iran', 0, 1, 'Saint Petersburg Stadium', 'Saint Petersburg', 'UTC+3', "https://www.youtube.com/embed/rG6hK0eZ_Ys");

const matchDay2 = [match2, match3, match4];

//Matchday 3
const match5 = new Match(5, '2018-06-16', '13:00', 'France', 'Australia', 2, 1, 'Kazan Arena', 'Kazan', 'UTC+3', "https://www.youtube.com/embed/-4_SXeQdIJo");
const match6 = new Match(6, '2018-06-16', '16:00', 'Argentina', 'Iceland', 1, 1, 'Spartak Stadium', 'Moscow', 'UTC+3', "https://www.youtube.com/embed/Xvarnwv6hRk");
const match7 = new Match(7, '2018-06-16', '19:00', 'Peru', 'Denmark', 0, 1, 'Mordovia Arena', 'Saransk', 'UTC+3', "https://www.youtube.com/embed/O4odLCih0Os");
const match8 = new Match(8, '2018-06-16', '21:00', 'Croatia', 'Nigeria', 2, 0, 'Kalingrad Stadium', 'Kalingrad', 'UTC+2', "https://www.youtube.com/embed/qS-V5h0wKr8");

const matchDay3 = [match5, match6, match7, match8];

//Matchday 4
const match9 = new Match(9, '2018-06-17', '16:00', 'Costa Rica', 'Serbia', 0, 1, 'Samara Arena', 'Samara', 'UTC+4', "https://www.youtube.com/embed/bA6_7wFvG0E");
const match10 = new Match(10, '2018-06-17', '18:00', 'Germany', 'Mexico', 0, 1, 'Luzhniki Stadium', 'Moscow', 'UTC+3', "https://www.youtube.com/embed/6BSeFs40QOI");
const match11 = new Match(11, '2018-06-17', '21:00', 'Brazil', 'Switzerland', 1, 1, 'Rostov Arena', 'Rostov-on-Don', 'UTC+3', "https://www.youtube.com/embed/3dWrKNrWbWQ");

const matchDay4 = [match9, match10, match11];

//Matchday 5
const match12 = new Match(12, '2018-06-18', '15:00', 'Sweden', 'South Korea', null, null, 'Nizhny Novgorod Stadium', 'Nizhny Novgorod', 'UTC+3');
const match13 = new Match(13, '2018-06-18', '18:00', 'Belgium', 'Panama', null, null, 'Fisht Stadium', 'Sochi', 'UTC+3');
const match14 = new Match(14, '2018-06-18', '21:00', 'Tunisia', 'England', null, null, 'Volgograd Arean', 'Volgograd', 'UTC+3');

const matchDay5 = [match12, match13, match14];

//Matchday 6
const match15 = new Match(15, '2018-06-19', '15:00', 'Colombia', 'Japan', null, null, 'Mordovia Arena', 'Saransk', 'UTC+3');
const match16 = new Match(16, '2018-06-19', '18:00', 'Poland', 'Senegal', null, null, 'Spartak Stadium', 'Moscow', 'UTC+3');
const match17 = new Match(17, '2018-06-19', '21:00', 'Russia', 'Egypt', null, null, 'Saint Petersburg Stadium', 'Saint Petersburg', 'UTC+3');

const matchDay6 = [match15, match16, match17];

//Matchday 7 
const match18 = new Match(18, '2018-06-20', '15:00', 'Portugal', 'Morocco', null, null, 'Luzhniki Stadium', 'Moscow', 'UTC+3');
const match19 = new Match(19, '2018-06-20', '18:00', 'Uruguay', 'Saudi Arabia', null, null, 'Rostov Arena', 'Rostov-on-Don', 'UTC+3');
const match20 = new Match(20, '2018-06-20', '21:00', 'Iran', 'Spain', null, null, 'Kazan Arena', 'Kazan', 'UTC+3');

const matchDay7 = [match18, match19, match20];

//Matchday 8 
const match21 = new Match(21, '2018-06-21', '16:00', 'Denmark', 'Australia', null, null, 'Samara Arena', 'Samara', 'UTC+4');
const match22 = new Match(22, '2018-06-21', '20:00', 'France', 'Peru', null, null, 'Ekaterinburg Arena', 'Ekaterinburn', 'UTC+5');
const match23 = new Match(23, '2018-06-21', '21:00', 'Argentina', 'Croatia', null, null, 'Nizhny Novgorod Stadium', 'Nizhny Novgorod', 'UTC+3');

const matchDay8 = [match21, match22, match23];

//Matchday 9
const match24 = new Match(24, '2018-06-22', '15:00', 'Brazil', 'Costa Rica', null, null, 'Saint Petersburg Stadium', 'Saint Petersburg', 'UTC+3');
const match25 = new Match(25, '2018-06-22', '18:00', 'Nigeria', 'Iceland', null, null, 'Volgograd Arena', 'Volgograd', 'UTC+3');
const match26 = new Match(26, '2018-06-22', '20:00', 'Serbia', 'Switzerland', null, null, 'Kalingrad Stadium', 'Kalingrad', 'UTC+2');

const matchDay9 = [match24, match25, match26];

//Matchday 10
const match27 = new Match(27, '2018-06-23', '15:00', 'Belgium', 'Tunisia', null, null, 'Spartak Stadium', 'Moscow', 'UTC+3');
const match28 = new Match(28, '2018-06-23', '18:00', 'South Korea', 'Mexico', null, null, 'Rostov Arena', 'Rostov-on-Don', 'UTC+3');
const match29 = new Match(29, '2018-06-23', '21:00', 'Germany', 'Sweden', null, null, 'Fisht Stadium', 'Sochi', 'UTC+3');

const matchDay10 = [match27, match28, match29];

//Matchday 11
const match30 = new Match(30, '2018-06-24', '15:00', 'England', 'Panama', null, null, 'Nizhny Novgorod Stadium', 'Nizhny Novgorod', 'UTC+3');
const match31 = new Match(31, '2018-06-24', '20:00', 'Japan', 'Senegal', null, null, 'Ekaterinburg Arena', 'Ekaterinburg', 'UTC+5');
const match32 = new Match(32, '2018-06-24', '21:00', 'Poland', 'Colombia', null, null, 'Kazan Arena', 'Kazan', 'UTC+3');

const matchDay11 = [match30, match31, match32];

const matches = [matchDay1, matchDay2, matchDay3, matchDay4, matchDay5, matchDay6, matchDay7, matchDay8, matchDay9, matchDay10, matchDay11];

module.exports.matches = matches;