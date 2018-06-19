const matchData = require('./matches');
const countryData = require('./country_data');
const moment = require('moment');

const matches = matchData.matches;
const countryElements = document.querySelectorAll('[data-country');

console.log(countryData);

function getInfo(countryName) {
    //initialize variables
    let prevMatch = false;
    let nextMatch = [];
    let formatName = countryName.toLowerCase().replace(' ', '-');
    
    //check matches to see if country matches team1 or team2 property
    //Also check if a score, meaning the game has already been played 
    //and if no score, it must be a future match
    matches.forEach(matchDayArr => matchDayArr.forEach(match => {
        if (countryName === match.team1 || countryName === match.team2) {
            match.score1 !== null && match.score2 !== null ? prevMatch = match : nextMatch.push(match);
        }
    }));
    
    //function to look through prevMatch or nextMatch and grab info to construct 
    //info element that will be inserted into HTML
    
    function createMatchBox(matchInfo) {
        //set names and scores correctly for country and country opponent
        let countryScore; let oppScore;
        let opponent;
        if (countryName === matchInfo.team1) {
            [countryScore, opponent, oppScore] = [matchInfo.score1, matchInfo.team2, matchInfo.score2];
        } else {
           [countryScore, opponent, oppScore] = [matchInfo.score2, matchInfo.team1, matchInfo.score1]; 
        }
        
        if (matchInfo.timezone == undefined) {
            console.log(matchInfo);
        }
        
        //find local user time of match with moment.js
        let utc = matchInfo.timezone.split('+')[1];
        let newDate = moment(`${matchInfo.date} ${matchInfo.time}+0${utc}`).format('LLL');
        
        //format names to use to find correct image from assets folder
        let formatOppName = opponent.toLowerCase().replace(' ', '-');
        
        //correct html for setting prevMatch element info
        if (matchInfo === prevMatch) {
           let box = `
            <div class="info__match--date">
                <p>${matchInfo.stadium}</p>
                <p>${newDate}</p>
            </div>
            <div class="score__row">
                <p>${countryName}</p>
                <img src="./assets/small/${formatName}.png">
                <p>${countryScore} - ${oppScore}</p>
                <img src="./assets/small/${formatOppName}.png">
                <p>${opponent}</p>
            </div>`;
            return box;
        } else {
           let box = `
            <div class="info__match--date">
                <p>${matchInfo.stadium}</p>
                <p>${newDate}</p>
            </div>
            <div class="score__row">
                <p>${countryName}</p>
                <img src="./assets/small/${formatName}.png">
                <p>VS</p>
                <img src="./assets/small/${formatOppName}.png">
                <p>${opponent}</p>
            </div>`;
            return box;
        }
    }
    
    // let formatName = countryName.toLowerCase().replace(' ', '-');
    
    let infoBox = `
    <div class="info__name">
        <img src="./assets/small/${formatName}.png">
        <p>${countryName}</p>
    </div>`;

    let nextHTML = createMatchBox(nextMatch[0]);
    
    if (prevMatch) {
        let prevHTML = createMatchBox(prevMatch);
        infoBox += `
        <div class="info__row">
            <div class="info__match info__prev">
              <h2>Prev Match</h2>
              ${prevHTML}
            </div>
            <div class="info__match info__next">
                <h2>Next Match</h2>  
                ${nextHTML}
            </div>
        </div>
        <div class="info__details">
            <div class="info__details--video">
                <a href="https://www.youtube.com/watch?v=${prevMatch.youtubeID}" target="_blank"> 
                    <img src="https://img.youtube.com/vi/${prevMatch.youtubeID}/maxresdefault.jpg"></img>
                </a>        
            </div>
            <div class="info__details--scorers">
                <h2>Top Scorers</h2>
                <div class="scorer-row">
                    <p>1. Person</p>
                    <p>2. Person 2</p>
                </div>
                
            </div>
        </div>
        
        `;
         return infoBox;
    } else {
        infoBox += `
        <div class="info__row">
            <div class="info__match info__next">
                <h2>Next Match</h2>  
                ${nextHTML}
            </div>
        </div>  
        `;
        return infoBox;
    }

}

countryElements.forEach(country => {
    let countryName = country.dataset.country; 
    let createdInfoBox = getInfo(countryName);
    country.insertAdjacentHTML('beforeend', createdInfoBox);
});
