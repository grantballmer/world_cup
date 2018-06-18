const matchData = require('./matches');
const countryData = require('./country_data');
const moment = require('moment');

const matches = matchData.matches;
const countryElements = document.querySelectorAll('[data-country');

function getInfo(countryName) {
    let prevMatch = false;
    let nextMatch = [];
    
    matches.forEach(matchDayArr => matchDayArr.forEach(match => {
        if (countryName === match.team1 || countryName === match.team2) {
            match.score1 !== null && match.score2 !== null ? prevMatch = match : nextMatch.push(match);
        }
    }));
    
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
        
        //find local user time of match 
        let utc = matchInfo.timezone.split('+')[1];
        let newDate = moment(`${matchInfo.date} ${matchInfo.time}+0${utc}`).format('LLL');
        
        //format names to use to find correct image from assets folder
        let formatName = countryName.toLowerCase().replace(' ', '-');
        let formatOppName = opponent.toLowerCase().replace(' ', '-');
        
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
    
    let box;
    
    let nextHTML = createMatchBox(nextMatch[0]);
    if (prevMatch) {
        console.log(prevMatch.highlight, countryName);
        let prevHTML = createMatchBox(prevMatch);
        box = `
        <div class="info__name">
            <img src="./assets/small/russia.png">
            <p>Russia</p>
        </div>
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
        <div class="info__details>
            <div class=info__details--video>
                <iframe src=${prevMatch.highlight}></iframe> 
            </div>
            <div class="info__details--scorers>
                <h1>Top Scorers</h1>
                <div>
                    <p>name goals</p>
                </div>
            </div>
        </div>
        
        `;
         return box;
    } else {
        box = `
        <div class="info__name">
            <img src="./assets/small/russia.png">
            <p>Russia</p>
        </div>
        <div class="info__row">
            <div class="info__match info__next">
                <h2>Next Match</h2>  
                ${nextHTML}
            </div>
        </div>  
        `;
        return box;
    }
    
    // <iframe src=${prevMatch.highlight}></iframe> 
    
    // let box = `
    // <div class="info__name">
    //     <img src="./assets/small/russia.png">
    //     <p>Russia</p>
    // </div>
    // <div class="info__row">
    //     <div class="info__match info__prev">
    //       <h2>Prev Match</h2>
    //       ${prevHTML}
    //     </div>
    //     <div class="info__match info__next">
    //         <h2>Next Match</h2>  
    //         ${nextHTML}
    //     </div>
    // </div>    
    
    // `;

}

countryElements.forEach(country => {
    let countryName = country.dataset.country; 
    let createdInfoBox = getInfo(countryName);
    country.insertAdjacentHTML('beforeend', createdInfoBox);
});
