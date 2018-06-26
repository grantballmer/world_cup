const matchData = require('./matches');
const moment = require('moment');
let countryData = require('./country_data');

const matches = matchData.matches;

matches.forEach(matchDayArr => {
    //find local user time of match with moment.js
        // let utc = matchInfo.timezone.split('+')[1];
        // let newDate = moment(`${matchInfo.date} ${matchInfo.time}+0${utc}`).format('LLL');
    if (matchDayArr.team1 === null) return;
    let formattedDate = moment(matchDayArr[0].date).format('ll');
    
    let element = `
    <div class="matchday">
        <div class="matchday__date">
            <p>${formattedDate}</p>
        </div>
    `;
    matchDayArr.forEach(match => {
        if (match.team1 === null) return;
        //format country name to match variable name in country_data.js file and then grab country info
        let formatName1 = match.team1[0].toLowerCase() + match.team1.substring(1).replace(' ', '');
        let image1 = countryData.teams[formatName1].images[0];

        let formatName2 = match.team2[0].toLowerCase() + match.team2.substring(1).replace(' ', '');
        let image2 = countryData.teams[formatName2].images[0];
        
        //find local user time of match with moment.js
        let utc = match.timezone.split('+')[1];
        let newTime = moment(`${match.date} ${match.time}+0${utc}`).format('LT');
        //make a date that can account for some matches taking place at 12am or 3am the following day
        let newDate = moment(`${match.date} ${match.time}+0${utc}`).format('ll').split(',')[0];
        
        let scoreElement = `
            <p>Full-time</p>
            <p>${match.score1} - ${match.score2}</p>
        `;
        
        let upComingMatch = `
        <p class="upcoming">${newDate}</p>
        <p>${newTime}</p>
        `;
        
        match.score1 === null ? scoreElement = upComingMatch : null;

        element += `
        <div class="matchday__match match">
            <div class="match__info">
                <p>${formattedDate} ${match.time} - Local Time</p>
                <p>${match.stadium}</p>
                <p>${match.city}</p>
            </div>
            <div class="match__teams">
                <div class="match__teams--wrapper">
                    <p class="match__teams--team match__teams--team__left">${match.team1}</p>
                    <div class="match__teams--image flag__left">
                        <img src=${image1}>
                    </div>
                </div>        
                <div class="match__teams--score">
                    ${scoreElement}
                </div>
                <div class="match__teams--wrapper">
                    <div class="match__teams--image flag2">
                        <img src=${image2}>
                    </div>
                    <p class="match__teams--team">${match.team2}</p>
                </div>    
            </div>
        </div>        
        `;
    });
    element += `
    </div>
    `;

    document.querySelector('.schedule').insertAdjacentHTML('beforeEnd', element);
});

const arrow = document.querySelector('.fa-arrow-circle-down');
let upcomingMatch = document.querySelector('.upcoming').closest('.matchday');

function clickHandler() {
    let top  = window.pageYOffset;
    let matchY = upcomingMatch.offsetTop;
    let scrollNum = matchY - top;
    window.scrollBy({
        top: scrollNum,
        behavior: 'smooth'
    });
}

arrow.addEventListener('click', clickHandler);

// setInterval(() => {
//     let = elt.getBoundingClientRect()
// })

