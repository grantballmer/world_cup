const matchData = require('./matches');

const matches = matchData.matches;

function Team(name, mp, w, d, l, gf, ga, gd, pts, imageSm, imageLg, scorers) {
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
    this.scorers = scorers;
}

//group a
let russia = new Team('Russia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/russia.png', '../assets/large/russia.svg', {});
let saudiArabia = new Team('Saudi Arabia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/saudi-arabia.png', '../assets/large/saudi-arabia.svg', {});
let egypt = new Team('Egypt', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/egypt.png', '../assets/large/egypt.svg', {});
let uruguay = new Team('Uruguay', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/uruguay.png', '../assets/large/uruguay.svg', {});

const groupA = [russia, saudiArabia, egypt, uruguay];

//group b
let iran = new Team('Iran', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/iran.png', '..assets/large/iran.svg', {});
let spain = new Team('Spain', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/spain.png', '..assets/large/spain.svg', {});
let portugal = new Team('Portugal', 0, 0, 0, 0, 0, 0, 0, 0,  '../assets/small/portugal.png', '..assets/large/portugal.svg', {});
let morocco = new Team('Morocco', 0, 0, 0, 0, 0, 0, 0, 0,  '../assets/small/morocco.png', '..assets/large/morcco.svg', {});

const groupB = [iran, spain, portugal, morocco];

//group c
let france = new Team('France', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/france.png', '../assets/large/france.svg', {});
let australia = new Team('Australia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/australia.png', '../assets/large/australia.svg', {});
let peru = new Team('Peru', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/peru.png', '../assets/large/peru.svg', {});
let denmark = new Team('Denmark', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/denmark.png', '../assets/large/denmark.svg', {});


const groupC = [france, australia, peru, denmark];

//group d
let argentina = new Team('Argentina', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/argentina.png', '../assets/large/argentina.svg', {});
let iceland = new Team('Iceland', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/iceland.png', '../assets/large/iceland.svg', {});
let croatia = new Team('Croatia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/croatia.png', '../assets/large/croatia.svg', {});
let nigeria = new Team('Nigeria', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/nigeria.png', '../assets/large/nigeria.svg', {});

const groupD = [argentina, iceland, croatia, nigeria];

//group e
let brazil = new Team('Brazil', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/brazil.png', '../assets/large/brazil.svg', {});
let switzerland = new Team('Switzerland', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/switzerland.png', '../assets/large/switzerland.svg', {});
let costaRica = new Team('Costa Rica', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/costa-rica.png', '../assets/large/costa-rica.svg', {});
let serbia = new Team('Serbia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/serbia.png', '../assets/large/serbia.svg', {});

const groupE = [brazil, switzerland, costaRica, serbia];

//group f
let germany = new Team('Germany', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/germany.png', '../assets/large/germany.svg', {});
let mexico = new Team('Mexico', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/mexico.png', '../assets/large/mexico.svg', {});
let sweden = new Team('Sweden', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/sweden.png', '../assets/large/sweden.svg', {});
let southKorea = new Team('South Korea', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/south-korea.png', '../assets/large/south-korea.svg', {});

const groupF = [germany, mexico, sweden, southKorea];

//group g
let belgium = new Team('Belgium', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/belgium.png', '../assets/large/belgium.svg', {});
let panama = new Team('Panama', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/panama.png', '../assets/large/panama.svg', {});
let tunisia = new Team('Tunisia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/tunisia.png', '../assets/large/tunisia.svg', {});
let england = new Team('England', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/england.png', '../assets/large/england.svg', {});

const groupG = [belgium, panama, tunisia, england];

//group h
let poland = new Team('Poland', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/poland.png', '../assets/large/poland.svg', {});
let senegal = new Team('Senegal', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/senegal.png', '../assets/large/senegal.svg', {});
let colombia = new Team('Colombia', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/colombia.png', '../assets/large/colombia.svg', {});
let japan = new Team('Japan', 0, 0, 0, 0, 0, 0, 0, 0, '../assets/small/japan.png', '../assets/large/japan.svg', {});

const groupH = [poland, senegal, colombia, japan];

const groups = [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH];



const teams = {russia, saudiArabia, egypt, uruguay, iran, spain, portugal, morocco, france, australia, denmark, peru, argentina
, iceland, croatia, nigeria, brazil, switzerland, costaRica, serbia, germany, mexico, sweden, southKorea, belgium, panama, tunisia, england,
poland, senegal, colombia, japan};

// let teamsArr = {};
// groups.forEach(group => group.forEach(team => teamsArr.push(team)));

// console.log(teams, teamsArr);

function updateTeamData(team,teamScore, oppScore, goals) {
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
    if (goals) {
        goals.forEach(goal => {
            let scorerName = goal.name;
            team.scorers.hasOwnProperty(scorerName) ? team.scorers[scorerName] += 1 : team.scorers[scorerName] = 1;
        });
    }
}

matches.forEach(matchDayArr => matchDayArr.forEach(match => {
    groups.forEach(group => group.forEach(team => {
        if (match.team1 === team.name) {
            updateTeamData(team, match.score1, match.score2, match.goals1);
        } else if (match.team2 === team.name) {
            updateTeamData(team, match.score2, match.score1, match.goals2);
        }
    }));
}));

module.exports = {
    groups,
    teams
};