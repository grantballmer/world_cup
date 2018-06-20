const matchData = require('./matches');
const moment = require('moment');
let countryData = require('./country_data');

const matches = matchData.matches;

matches.forEach(matchDayArr => {
    let element = `
    <div class="matchday">
        <div class="matchday__date">
            <p>${matchDayArr[0].date}</p>
        </div>
    `;
    matchDayArr.forEach(match => {
        //format country name to match variable name in country_data.js file and then grab country info
        let formatName1 = match.team1[0].toLowerCase() + match.team1.substring(1).replace(' ', '');
        let image1 = countryData.teams[formatName1].images[0];

        let formatName2 = match.team2[0].toLowerCase() + match.team2.substring(1).replace(' ', '');
        let image2 = countryData.teams[formatName2].images[0];

        element += `
        <div class="matchday__match match">
            <div class="match__info">
                <p>${match.time}</p>
                <p>${match.stadium}</p>
                <p>${match.city}</p>
            </div>
            <div class="match__teams">
                <p>${match.team1}</p>
                <div class="match__teams--image">
                    <img src=${image1}>
                </div>
                <div class="match__teams--score">
                    <p>Full-time</p>
                    <p>${match.score1} - ${match.score2}</p>
                </div>
                <div class="match__teams--image">
                    <img src=${image2}>
                </div>
                <p>${match.team2}</p> 
            </div>
        </div>        
        `;
    });
    element += `
    </div>
    `;

    document.querySelector('.schedule').insertAdjacentHTML('beforeEnd', element);
});