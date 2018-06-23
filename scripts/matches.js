let countryData = require('./country_data');
let matchGoals = require('./goals');

let teams = countryData.groups;
let goals = matchGoals.matches;

// goals.match1.goals1.forEach(goal => console.log(goal));

function Match(num, date, time, team1, team2, score1, score2, stadium, city, timezone, youtubeID, goals1, goals2) {
    this.num = num;
    this.date = date;
    this.time = time;
    this.team1 = team1;
    this.team2 = team2;
    this.score1 = score1;
    this.score2 = score2;
    this.stadium = stadium;
    this.city = city;
    this.timezone = timezone;
    this.youtubeID = youtubeID;
    this.goals1 = goals1;
    this.goals2 = goals2;
}

//Matchday 1
const match1 = new Match(1, '2018-06-14', '18:00', 'Russia', 'Saudi Arabia', 5, 0, 'Luzhniki Stadium', 'Moscow', 'UTC+3', "SDY1N-IJOA8", goals.match1.goals1, goals.match1.goals2);

const matchDay1 = [match1];

//Matchday 2
const match2 = new Match(2, '2018-06-15', '17:00', 'Egypt', 'Uruguay', 0, 1, 'Ekaterinburg Arena', 'Ekaterinburn', 'UTC+5', "LPzZa-Btx6I", goals.match2.goals1, goals.match2.goals2);
const match3 = new Match(3, '2018-06-15', '18:00', 'Morocco', 'Iran', 0, 1, 'Saint Petersburg Stadium', 'Saint Petersburg', 'UTC+3', "rG6hK0eZ_Ys", goals.match3.goals1, goals.match3.goals2);
const match4 = new Match(4, '2018-06-15', '21:00', 'Portugal', 'Spain', 3, 3, 'Fisht Stadium', 'Sochi', 'UTC+3', "4rp2aLQl7vg", goals.match4.goals1, goals.match4.goals2);

const matchDay2 = [match2, match3, match4];

//Matchday 3
const match5 = new Match(5, '2018-06-16', '13:00', 'France', 'Australia', 2, 1, 'Kazan Arena', 'Kazan', 'UTC+3', "-4_SXeQdIJo", goals.match5.goals1, goals.match5.goals2);
const match6 = new Match(6, '2018-06-16', '16:00', 'Argentina', 'Iceland', 1, 1, 'Spartak Stadium', 'Moscow', 'UTC+3', "Xvarnwv6hRk", goals.match6.goals1, goals.match6.goals2);
const match7 = new Match(7, '2018-06-16', '19:00', 'Peru', 'Denmark', 0, 1, 'Mordovia Arena', 'Saransk', 'UTC+3', "O4odLCih0Os", goals.match7.goals1, goals.match7.goals2);
const match8 = new Match(8, '2018-06-16', '21:00', 'Croatia', 'Nigeria', 2, 0, 'Kalingrad Stadium', 'Kalingrad', 'UTC+2', "qS-V5h0wKr8", goals.match8.goals1, goals.match8.goals2);

const matchDay3 = [match5, match6, match7, match8];

//Matchday 4
const match9 = new Match(9, '2018-06-17', '16:00', 'Costa Rica', 'Serbia', 0, 1, 'Samara Arena', 'Samara', 'UTC+4', "bA6_7wFvG0E", goals.match9.goals1, goals.match9.goals2);
const match10 = new Match(10, '2018-06-17', '18:00', 'Germany', 'Mexico', 0, 1, 'Luzhniki Stadium', 'Moscow', 'UTC+3', "6BSeFs40QOI", goals.match10.goals1, goals.match10.goals2);
const match11 = new Match(11, '2018-06-17', '21:00', 'Brazil', 'Switzerland', 1, 1, 'Rostov Arena', 'Rostov-on-Don', 'UTC+3', "3dWrKNrWbWQ", goals.match11.goals1, goals.match11.goals2);

const matchDay4 = [match9, match10, match11];

//Matchday 5
const match12 = new Match(12, '2018-06-18', '15:00', 'Sweden', 'South Korea', 1, 0, 'Nizhny Novgorod Stadium', 'Nizhny Novgorod', 'UTC+3', "5ZlE-hUl5UU", goals.match12.goals1, goals.match12.goals2);
const match13 = new Match(13, '2018-06-18', '18:00', 'Belgium', 'Panama', 3, 0, 'Fisht Stadium', 'Sochi', 'UTC+3', "XCr1xpwEuZQ", goals.match13.goals1, goals.match13.goals2);
const match14 = new Match(14, '2018-06-18', '21:00', 'Tunisia', 'England', 1, 2, 'Volgograd Arean', 'Volgograd', 'UTC+3', "u3wfrhjoIJg", goals.match14.goals1, goals.match14.goals2);

const matchDay5 = [match12, match13, match14];

//Matchday 6
const match15 = new Match(15, '2018-06-19', '15:00', 'Colombia', 'Japan', 1, 2, 'Mordovia Arena', 'Saransk', 'UTC+3', 'y4SeAfCg7-o', goals.match15.goals1, goals.match15.goals2);
const match16 = new Match(16, '2018-06-19', '18:00', 'Poland', 'Senegal', 1, 2, 'Spartak Stadium', 'Moscow', 'UTC+3', 'SXkg_12ukOk', goals.match16.goals1, goals.match16.goals2);
const match17 = new Match(17, '2018-06-19', '21:00', 'Russia', 'Egypt', 3, 1, 'Saint Petersburg Stadium', 'Saint Petersburg', 'UTC+3', 'AygUlfmQgBs', goals.match17.goals1, goals.match17.goals2);

const matchDay6 = [match15, match16, match17];

//Matchday 7 
const match18 = new Match(18, '2018-06-20', '15:00', 'Portugal', 'Morocco', 1, 0, 'Luzhniki Stadium', 'Moscow', 'UTC+3', "sEtVNlzYAqQ", goals.match18.goals1, goals.match18.goals2);
const match19 = new Match(19, '2018-06-20', '18:00', 'Uruguay', 'Saudi Arabia', 1, 0, 'Rostov Arena', 'Rostov-on-Don', 'UTC+3', "ZxEMQTAGYzI", goals.match19.goals1, goals.match19.goals2);
const match20 = new Match(20, '2018-06-20', '21:00', 'Iran', 'Spain', 0, 1, 'Kazan Arena', 'Kazan', 'UTC+3', "_3C6DK8n0mQ", goals.match20.goals1, goals.match20.goals2);

const matchDay7 = [match18, match19, match20];

//Matchday 8 
const match21 = new Match(21, '2018-06-21', '16:00', 'Denmark', 'Australia', 1, 1, 'Samara Arena', 'Samara', 'UTC+4', "24m_D5EFb-A", goals.match21.goals1, goals.match21.goals2);
const match22 = new Match(22, '2018-06-21', '20:00', 'France', 'Peru',1, 0, 'Ekaterinburg Arena', 'Ekaterinburn', 'UTC+5', "9-QIE-xaueo", goals.match22.goals1, goals.match22.goals2);
const match23 = new Match(23, '2018-06-21', '21:00', 'Argentina', 'Croatia', 0, 3, 'Nizhny Novgorod Stadium', 'Nizhny Novgorod', 'UTC+3', "hcM5n71XmBo", goals.match23.goals1, goals.match23.goals2);

const matchDay8 = [match21, match22, match23];

//Matchday 9
const match24 = new Match(24, '2018-06-22', '15:00', 'Brazil', 'Costa Rica', 2, 0, 'Saint Petersburg Stadium', 'Saint Petersburg', 'UTC+3', "u2v_mb5Xx00", goals.match24.goals1, goals.match2.goals2);
const match25 = new Match(25, '2018-06-22', '18:00', 'Nigeria', 'Iceland', 2, 0, 'Volgograd Arena', 'Volgograd', 'UTC+3', "KIk9avLQSds", goals.match25.goals1, goals.match25.goals2);
const match26 = new Match(26, '2018-06-22', '20:00', 'Serbia', 'Switzerland', 1, 2, 'Kalingrad Stadium', 'Kalingrad', 'UTC+2', "0O3CbugZtTg", goals.match26.goals1, goals.match26.goals2);

const matchDay9 = [match24, match25, match26];

//Matchday 10
const match27 = new Match(27, '2018-06-23', '15:00', 'Belgium', 'Tunisia', 5, 2, 'Spartak Stadium', 'Moscow', 'UTC+3', goals.match27.goals1, goals.match27.goals2);
const match28 = new Match(28, '2018-06-23', '18:00', 'South Korea', 'Mexico', null, null, 'Rostov Arena', 'Rostov-on-Don', 'UTC+3', null);
const match29 = new Match(29, '2018-06-23', '21:00', 'Germany', 'Sweden', null, null, 'Fisht Stadium', 'Sochi', 'UTC+3', null);

const matchDay10 = [match27, match28, match29];

//Matchday 11
const match30 = new Match(30, '2018-06-24', '15:00', 'England', 'Panama', null, null, 'Nizhny Novgorod Stadium', 'Nizhny Novgorod', 'UTC+3', null);
const match31 = new Match(31, '2018-06-24', '20:00', 'Japan', 'Senegal', null, null, 'Ekaterinburg Arena', 'Ekaterinburg', 'UTC+5', null);
const match32 = new Match(32, '2018-06-24', '21:00', 'Poland', 'Colombia', null, null, 'Kazan Arena', 'Kazan', 'UTC+3', null);

const matchDay11 = [match30, match31, match32];

//Matchday 12
const match33 = new Match(33, '2018-06-25', '17:00', 'Saudi Arabia', 'Egypt', null, null, 'Volgograd Arena', 'Volgograd', 'UTC+3', null);
const match34 = new Match(34, '2018-06-25', '18:00', 'Uruguay', 'Russia', null, null, 'Samara Arena', 'Samara', 'UTC+4', null);
const match35 = new Match(35, '2018-06-25', '21:00', 'Iran', 'Portugal', null, null, 'Mordovia Arena', 'Saransk', 'UTC+3', null);
const match36 = new Match(36, '2018-06-25', '20:00', 'Spain', 'Morocco', null, null, 'Kaliningrad Stadium', 'Kaliningrad', 'UTC+2', null);

const matchDay12 = [match33, match34, match35, match36];

//Matchday 13
const match37 = new Match(37, '2018-06-26', '17:00', 'Denmark', 'France', null, null, 'Luzhniki Stadium', 'Moscow', 'UTC+3', null);
const match38 = new Match(38, '2018-06-26', '17:00', 'Australia', 'Peru', null, null, 'Fisht Stadium', 'Sochi', 'UTC+3', null);
const match39 = new Match(39, '2018-06-26', '21:00', 'Nigeria', 'Argentina', null, null, 'Saint Petersburg Stadium', 'Saint Petersburg', 'UTC+3', null);
const match40 = new Match(40, '2018-06-26', '21:00', 'Iceland', 'Croatia', null, null, 'Rostov Arena', 'Moscow', 'UTC+3', null);

const matchDay13 = [match37, match38, match39, match40];

//Matchday 14
const match41 = new Match(41, '2018-06-27', '17:00', 'South Korea', 'Germany', null, null, 'Kazan Arena', 'Kazan', 'UTC+3', null);
const match42 = new Match(42, '2018-06-27', '19:00', 'Mexico', 'Sweden', null, null, 'Ekaterinburg Arena', 'Ekaterinburg', 'UTC+5', null);
const match43 = new Match(43, '2018-06-27', '21:00', 'Serbia', 'Brazil', null, null, 'Spartak Stadium', 'Moscow', 'UTC+3', null);
const match44 = new Match(44, '2018-06-27', '21:00', 'Switzerland', 'Costa Rica', null, null, 'Nizhny Novgorod Stadium', 'Nizhny Novgorod', 'UTC+3', null);

const matchDay14 = [match41, match42, match43, match44];

//Matchday 15
const match45 = new Match(45, '2018-06-28', '17:00', 'Japan', 'Poland', null, null, 'Volgograd Arena', 'Volgograd', 'UTC+3', null);
const match46 = new Match(46, '2018-06-28', '18:00', 'Senegal', 'Colombia', null, null, 'Samara Arena', 'Samara', 'UTC+4', null);
const match47 = new Match(47, '2018-06-28', '20:00', 'England', 'Belgium', null, null, 'Kaliningrad Stadium', 'Kaliningrad', 'UTC+2', null);
const match48 = new Match(48, '2018-06-28', '21:00', 'Panama', 'Tunisia', null, null, 'Mordovia Arena', 'Saransk', 'UTC+3', null);

const matchDay15 = [match45, match46, match47, match48];

const matches = [matchDay1, matchDay2, matchDay3, matchDay4, matchDay5, matchDay6, matchDay7, matchDay8, matchDay9, matchDay10, matchDay11, matchDay12, matchDay13, matchDay14, matchDay15];
module.exports.matches = matches;
