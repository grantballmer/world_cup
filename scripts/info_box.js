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
