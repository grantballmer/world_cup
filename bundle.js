(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// let teams = require('./scripts/country_data');
let tables = require('./scripts/group_tables');
let matches = require('./scripts/matches');
const countryData = require('./scripts/country_data');
const infoBoxes = require('./scripts/info_box');

// console.log(tables.data);

// console.log(matches.matches);
// console.log(countryData.groups)

// matches.matches.forEach(matchDayArr => matchDayArr.forEach(match => {
//     if (match.team1 === "Russia" || match.team2 === "Russia") {
//         console.log(match);
//     }
// }))
},{"./scripts/country_data":2,"./scripts/group_tables":3,"./scripts/info_box":4,"./scripts/matches":5}],2:[function(require,module,exports){
const matchData = require('./matches');

const matches = matchData.matches;

function Team(name, mp, w, d, l, gf, ga, gd, pts, imageSm, imageLg) {
    this.name = name;
    this.mp = mp;
    this.wins = w;
    this.draws = d;
    this.losses = l;
    this.gf = gf;
    this.ga = ga;
    this.gd = gd;
    this.pts = pts;
    this.images = [imageSm, imageLg];
}

//group a
let russia = new Team('Russia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/russia.png', '../assets/large/russia.svg');
let saudiArabia = new Team('Saudi Arabia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/saudi-arabia.png', '../assets/large/saudi-arabia.svg');
let egypt = new Team('Egypt', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/egypt.png', '../assets/large/egypt.svg');
let uruguay = new Team('Uruguay', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/uruguay.png', '../assets/large/uruguay.svg');

const groupA = [russia, saudiArabia, egypt, uruguay];

//group b
let iran = new Team('Iran', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/iran.png', '..assets/large/iran.svg');
let spain = new Team('Spain', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/spain.png', '..assets/large/spain.svg');
let portugal = new Team('Portugal', 0, 0, 0, 0, 0, 0, 0, 0,  '../assets/small/portugal.png', '..assets/large/portugal.svg');
let morocco = new Team('Morocco', 0, 0, 0, 0, 0, 0, 0, 0,  '../assets/small/morocco.png', '..assets/large/morcco.svg');

const groupB = [iran, spain, portugal, morocco];

//group c
let france = new Team('France', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/france.png', '../assets/large/france.svg');
let australia = new Team('Australia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/australia.png', '../assets/large/australia.svg');
let peru = new Team('Peru', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/peru.png', '../assets/large/peru.svg');
let denmark = new Team('Denmark', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/denmark.png', '../assets/large/denmark.svg');


const groupC = [france, australia, peru, denmark];

//group d
let argentina = new Team('Argentina', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/argentina.png', '../assets/large/argentina.svg');
let iceland = new Team('Iceland', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/iceland.png', '../assets/large/iceland.svg');
let croatia = new Team('Croatia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/croatia.png', '../assets/large/croatia.svg');
let nigeria = new Team('Nigeria', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/nigeria.png', '../assets/large/nigeria.svg');

const groupD = [argentina, iceland, croatia, nigeria];

//group e
let brazil = new Team('Brazil', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/brazil.png', '../assets/large/brazil.svg');
let switzerland = new Team('Switzerland', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/switzerland.png', '../assets/large/switzerland.svg');
let costaRica = new Team('Costa Rica', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/costa-rica.png', '../assets/large/costa-rica.svg');
let serbia = new Team('Serbia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/serbia.png', '../assets/large/serbia.svg');

const groupE = [brazil, switzerland, costaRica, serbia];

//group f
let germany = new Team('Germany', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/germany.png', '../assets/large/germany.svg');
let mexico = new Team('Mexico', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/mexico.png', '../assets/large/mexico.svg');
let sweden = new Team('Sweden', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/sweden.png', '../assets/large/sweden.svg');
let southKorea = new Team('South Korea', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/south-korea.png', '../assets/large/south-korea.svg');

const groupF = [germany, mexico, sweden, southKorea];

//group g
let belgium = new Team('Belgium', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/belgium.png', '../assets/large/belgium.svg');
let panama = new Team('Panama', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/panama.png', '../assets/large/panama.svg');
let tunisia = new Team('Tunisia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/tunisia.png', '../assets/large/tunisia.svg');
let england = new Team('England', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/england.png', '../assets/large/england.svg');

const groupG = [belgium, panama, tunisia, england];

//group h
let poland = new Team('Poland', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/poland.png', '../assets/large/poland.svg');
let senegal = new Team('Senegal', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/senegal.png', '../assets/large/senegal.svg');
let colombia = new Team('Colombia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/colombia.png', '../assets/large/colombia.svg');
let japan = new Team('Japan', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/japan.png', '../assets/large/japan.svg');

const groupH = [poland, senegal, colombia, japan];

const groups = [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH];

function updateTeamData(team,teamScore, oppScore) {
    if (teamScore == null) return;
    team.mp ++;
    team.gf += teamScore;
    team.ga += oppScore;
    if (teamScore === oppScore) {
        team.draws ++;
        team.pts ++;
    }
    if (teamScore > oppScore) {
        team.wins ++; 
        team.pts += 3;
    } else {
        team.losses ++; 
    }
    team.gd += teamScore - oppScore;
}

matches.forEach(matchDayArr => matchDayArr.forEach(match => {
    groups.forEach(group => group.forEach(team => {
        if (match.team1 === team.name) {
            updateTeamData(team, match.score1, match.score2);
        } else if (match.team2 === team.name) {
            updateTeamData(team, match.score2, match.score1);
        }
    }));
}))

module.exports.groups = groups;
},{"./matches":5}],3:[function(require,module,exports){
let teams = require('./country_data');

const groupElements = document.querySelectorAll('.nav__group--table');

let allGroups = teams.groups;
allGroups.forEach((group, index) => {
    group.sort((a, b) => b.pts - a.pts);
    let first = group[0];
    let second = group[1];
    let third = group[2];
    let fourth = group[3];

    let table = `
    <div class="row">
        <div class="row__item row__item--first">Team</div>
        <div class="row__item">MP</div>
        <div class="row__item">W</div>
        <div class="row__item">D</div>
        <div class="row__item">L</div>
        <div class="row__item">GF</div>
        <div class="row__item">GA</div>
        <div class="row__item">GD</div>
        <div class="row__item row__item--pts">Pts</div>
    </div>
    <div class="row">
        <div class="row__item row__item--first">
            <p>1</p>
            <div class="image__container"><img src=${first.images[0]}></div>
            <p>${first.name}</p>
        </div>
        <div class="row__item">${first.mp}</div>
        <div class="row__item">${first.wins}</div>
        <div class="row__item">${first.draws}</div>
        <div class="row__item">${first.losses}</div>
        <div class="row__item">${first.gf}</div>
        <div class="row__item">${first.ga}</div>
        <div class="row__item">${first.gd}</div>
        <div class="row__item row__item--pts">${first.pts}</div>
    </div>
    <div class="row">
        <div class="row__item row__item--first">
            <p>2</p>
            <div class="image__container"><img src=${second.images[0]}></div>
            <p>${second.name}</p>
        </div>
        <div class="row__item">${second.mp}</div>
        <div class="row__item">${second.wins}</div>
        <div class="row__item">${second.draws}</div>
        <div class="row__item">${second.losses}</div>
        <div class="row__item">${second.gf}</div>
        <div class="row__item">${second.ga}</div>
        <div class="row__item">${second.gd}</div>
        <div class="row__item row__item--pts">${second.pts}</div>
    </div>
    <div class="row">
        <div class="row__item row__item--first">
            <p>3</p>
            <div class="image__container"><img src=${third.images[0]}></div>
            <p>${third.name}</p>
        </div>
        <div class="row__item">${third.mp}</div>
        <div class="row__item">${third.wins}</div>
        <div class="row__item">${third.draws}</div>
        <div class="row__item">${third.losses}</div>
        <div class="row__item">${third.gf}</div>
        <div class="row__item">${third.ga}</div>
        <div class="row__item">${third.gd}</div>
        <div class="row__item row__item--pts">${third.pts}</div>
    </div>
    <div class="row row__last">
        <div class="row__item row__item--first">
            <p>4</p>
            <div class="image__container"><img src=${fourth.images[0]}></div>
            <p>${fourth.name}</p>
        </div>
        <div class="row__item">${fourth.mp}</div>
        <div class="row__item">${fourth.wins}</div>
        <div class="row__item">${fourth.draws}</div>
        <div class="row__item">${fourth.losses}</div>
        <div class="row__item">${fourth.gf}</div>
        <div class="row__item">${fourth.ga}</div>
        <div class="row__item">${fourth.gd}</div>
        <div class="row__item row__item--pts">${fourth.pts}</div>
    </div>`;

    groupElements[index].insertAdjacentHTML('beforeend', table);
});
},{"./country_data":2}],4:[function(require,module,exports){
const matchData = require('./matches');
const countryData = require('./country_data');

const matches = matchData.matches;
const countryElements = document.querySelectorAll('[data-country');

function getInfo(countryName) {
    let countryScore; oppScore; 
    let prevOpp;
    let nextOpp;
    let nextMatch = [];
    let prevMatch;
    matches.forEach(matchDayArr => matchDayArr.forEach(match => {
        if (countryName === match.team1 || countryName === match.team2) {
            // match.score1 !== null && match.score2 !== null ? prevMatch = match : nextMatch.push(match);
            if (match.score1 !== null && match.score2 !== null) {
                prevMatch = match;
                countryName === match.team1 ? [countryScore, prevOpp, oppScore] = [match.score1, match.team2, match.score2] : [countryScore, prevOpp, oppScore] =[match.score2, match.team1, match.score1];
            } else {
                nextMatch.push(match);
                countryName === match.team1 ? nextOpp = match.team2 : nextOpp = match.team1;
            }
        } 
    }));
    



    console.log(nextMatch[0]);
    console.log(prevMatch);
}

function getFlags(countryName, oppName) {
    countryData.groups.forEach(group => group.forEach(nation => {
        //left off here
    }));

}

countryElements.forEach(country => {
    let countryName = country.dataset.country; 
    // let nextMatch = [];
    // let prevMatch;
    // matches.forEach(matchDayArr => matchDayArr.forEach(match => {
    //     if (countryName === match.team1) {
    //         match.score1 !== null && match.score2 !== null ? prevMatch = match : nextMatch.push(match);

    //     } else if (countryName === match.team2) {

    //     }

    // }));
    // console.log(nextMatch[0]);
    // console.log(prevMatch);
});

},{"./country_data":2,"./matches":5}],5:[function(require,module,exports){
let countryData = require('./country_data');

let teams = countryData.groups;

function Match(num, date, time, team1, team2, score1, score2, stadium, city, timezone) {
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

const matchDay4 = [match9, match10, match11];

//Matchday 5
const match12 = new Match(12, '2018-06-18', '15:00', 'Sweden', 'South Korea', null, null, 'Nizhny Novgorod Stadium', 'Nizhny Novgorod', 'UTC+3');
const match13 = new Match(13, '2018-06-18', '18:00', 'Belgium', 'Panama', null, null, 'Fisht Stadium', 'UTC+3');
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
},{"./country_data":2}]},{},[1]);
