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