"use strict";

////////////
// UNIVERSAL
////////////
const scoreEl = document.getElementById("score");
const image = document.getElementById("main-image");

let score = 0;
let scoreMultiplier = 1;
let scorePerSecond = 0;

scoreEl.innerHTML = score;

image.onclick = updateScore;

function updateScore() {
    score = score + 1 * scoreMultiplier;
    scoreEl.innerHTML = score;
}

function updateScorePerSecond() {
    score = score + scorePerSecond;
    scoreEl.innerHTML = score;
}

setInterval(updateScorePerSecond, 1000);

////////////
// UPGRADE 1
////////////
const upgrade1 = document.getElementById("upgrade-1");
const upgradeOneLvlEl = document.getElementById("upgrade-1-lvl");
const upgradeOneCostEl = document.getElementById("upgrade-1-cost");

let upgradeOneLvl = 1;
let upgradeOneCost = 100;

upgradeOneLvlEl.innerHTML = upgradeOneLvl;
upgradeOneCostEl.innerHTML = upgradeOneCost;

upgrade1.onclick = upgradeOne;

function upgradeOne() {
    if (score >= upgradeOneCost) {
        upgradeOneLvl++;
        score = score - upgradeOneCost;

        upgradeOneCost = upgradeOneCost = upgradeOneCost + 100;
        scoreMultiplier++;

        scoreEl.innerHTML = score;
        upgradeOneLvlEl.innerHTML = upgradeOneLvl;
        upgradeOneCostEl.innerHTML = upgradeOneCost;
    }
}

////////////
// UPGRADE 2
////////////
const upgrade2 = document.getElementById("upgrade-2");
const upgradeTwoLvlEl = document.getElementById("upgrade-2-lvl");
const upgradeTwoCostEl = document.getElementById("upgrade-2-cost");

let upgradeTwoLvl = 0;
let upgradeTwoCost = 200;

upgradeTwoLvlEl.innerHTML = upgradeTwoLvl;
upgradeTwoCostEl.innerHTML = upgradeTwoCost;

upgrade2.onclick = upgradeTwo;

function upgradeTwo() {
    if (score >= upgradeTwoCost) {
        upgradeTwoLvl++;
        score = score - upgradeTwoCost;

        upgradeTwoCost = upgradeTwoCost = upgradeTwoCost + 200;
        scorePerSecond++;

        scoreEl.innerHTML = score;
        upgradeTwoLvlEl.innerHTML = upgradeTwoLvl;
        upgradeTwoCostEl.innerHTML = upgradeTwoCost;
    }
}
