"use strict";

////////////
// UNIVERSAL
////////////
const scoreEl = document.getElementById("score");
const image = document.getElementById("main-image");
const upgradeSound = new Audio("media/sfx/coin-pickup.mp3");

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

        upgradeOneCost = upgradeOneCost + 100;
        scoreMultiplier++;

        upgradeSound.play();
        upgradeSound.currentTime = 0;

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

        upgradeTwoCost = upgradeTwoCost + 200;
        scorePerSecond++;

        upgradeSound.play();
        upgradeSound.currentTime = 0;

        scoreEl.innerHTML = score;
        upgradeTwoLvlEl.innerHTML = upgradeTwoLvl;
        upgradeTwoCostEl.innerHTML = upgradeTwoCost;
    }
}

////////////
// NEW CAR 1
////////////
const upgradeCar1 = document.getElementById("upgrade-car-1");
const carOneCostEl = document.getElementById("car-cost-1");

let carOneCost = 1000;

carOneCostEl.innerHTML = carOneCost;

upgradeCar1.onclick = buyCarOne;

function buyCarOne() {
    if (score >= upgradeOneCost) {
        score = score - carOneCost;

        upgradeSound.play();
        upgradeSound.currentTime = 0;

        image.src = "media/cars/lowrider-2.png";
        image.style.marginTop = "-80px";
        document.getElementById("main-image-wrapper").style.width = "40rem";

        scoreEl.innerHTML = score;
    }
}

////////////
// NEW CAR 2
////////////

const upgradeCar2 = document.getElementById("upgrade-car-2");
const carTwoCostEl = document.getElementById("car-cost-2");

let carTwoCost = 5000;

carTwoCostEl.innerHTML = carTwoCost;

upgradeCar2.onclick = buyCarTwo;

function buyCarTwo() {
    if (score >= upgradeTwoCost) {
        score = score - carTwoCost;

        upgradeSound.play();
        upgradeSound.currentTime = 0;

        image.src = "media/cars/lowrider-3.png";
        image.style.marginTop = "60px";
        document.getElementById("main-image-wrapper").style.width = "40rem";
        scoreEl.innerHTML = score;
    }
}

////////////
// AVAILABILITY
////////////

setInterval(checkScore, 100);

function checkScore() {
    if (score < upgradeOneCost) {
        upgrade1.style.backgroundColor = "#222";
        upgrade1.style.cursor = "default";
    } else {
        upgrade1.style.backgroundColor = "#333";
        upgrade1.style.cursor = "pointer";
    }

    if (score < upgradeTwoCost) {
        upgrade2.style.backgroundColor = "#222";
        upgrade2.style.cursor = "default";
    } else {
        upgrade2.style.backgroundColor = "#333";
        upgrade2.style.cursor = "pointer";
    }

    if (score < carOneCost) {
        upgradeCar1.style.backgroundColor = "#222";
        upgradeCar1.style.cursor = "default";
    } else {
        upgradeCar1.style.backgroundColor = "#333";
        upgradeCar1.style.cursor = "pointer";
    }

    if (score < carTwoCost) {
        upgradeCar2.style.backgroundColor = "#222";
        upgradeCar2.style.cursor = "default";
    } else {
        upgradeCar2.style.backgroundColor = "#333";
        upgradeCar2.style.cursor = "pointer";
    }
}
