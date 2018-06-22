const matchData = require('./matches');
const countryData = require('./country_data');
const moment = require('moment');

const matches = matchData.matches;
const infoElements = document.querySelectorAll('[data-country');

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
    
    function createScorersInfo() {
        //format country name to match variable name in country_data.js file and then grab country info
        let formatForVariable = countryName[0].toLowerCase() + countryName.substring(1).replace(' ', '');
        let country = countryData.teams[formatForVariable];
        
        //need to grab and sort order of country's scorers to display top scorers
        let scorersArray = [];
        for (let player in country.scorers) {
            scorersArray.push([player, country.scorers[player]]);
        }
        scorersArray.sort((a, b) =>  b[1] - a[1]);
        
        //create top scorers element and populate it with country's scorers information 
        let element = `
        <div class="scorers">
        `;
        
        scorersArray.forEach((playerArr, index) => {
            let playerElement = `
            
                <p>${index + 1})</p> 
                <p class="scorers__name">${playerArr[0]}</p> 
                <p>${playerArr[1]}</p>
            
                    
            `;
            
            element += playerElement;
        });
        element += `</div>`;
        return element;
    }

    let scorerElement = createScorersInfo();

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
                ${scorerElement}
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

infoElements.forEach(country => {
    let countryName = country.dataset.country; 
    let createdInfoBox = getInfo(countryName);
    country.insertAdjacentHTML('beforeend', createdInfoBox);
});

let countryElements = document.querySelectorAll('.group__row--country');

countryElements.forEach(country => country.addEventListener('click', function() {
    this.firstChild.style.display = 'none';
}));