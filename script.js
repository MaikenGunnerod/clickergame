"use strict";

////////////
// UNIVERSAL
////////////
const scoreEl = document.getElementById("score");
const image = document.getElementById("main-image");

// lager variabler på starten som vi skal bruke og endre på flere ganger senere
let score = 0;
let scoreMultiplier = 1;
let scorePerSecond = 0;

// vis score i HTML elementet så det vises på skjermen
scoreEl.innerHTML = score;

// hver gang man trykker på bilen, kjøres funksjonen updateScore()
image.onclick = updateScore;

function updateScore() {
	score = score + 1 * scoreMultiplier; // øker score hver gang man klikker, avhengig av scoreMultiplier.
	// Score multiplier starter på 1 (se lenger oppe), så uten oppgraderinger vil man få 1 score per klikk.
	// Med level 2 upgrade (hydraulics, oppgradering 1), vil scoreMultiplier være 2, og man vil dermed få 2 score per klikk. Se mer i funksjonen updateOne()

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
// lagrer HTML elementene vi trenger tilgang til i JavaScript i variabler slik at vi lettere kan bruke de i stedet for å skrive document.getElementById("") hele tiden
const upgrade1 = document.getElementById("upgrade-1"); // lager en variabel for første oppgradering, hele knappen
const upgradeOneLvlEl = document.getElementById("upgrade-1-lvl"); // en variabel for elementet som viser level
const upgradeOneCostEl = document.getElementById("upgrade-1-cost"); // en variabel for elementet som viser pris

// vi bruker let her fordi tallene skal endres senere, og const over fordi de variablene ikke skal endres. let kan endres på senere, const kan ikke det.
let upgradeOneLvl = 1; // lager en variabel som holder på hvilket level oppgradering 1 er på
let upgradeOneCost = 100; // lager en variabel som holder på prisen til oppgradering 1

// vi setter inn tallene ovenfor i HTML elementene så de vises på nettsiden
upgradeOneLvlEl.innerHTML = upgradeOneLvl;
upgradeOneCostEl.innerHTML = upgradeOneCost;

// gjør sånn at funksjonen upgradeOne() kjøres hver gang elementet upgrade1 klikkes på, altså hver gang man prøver å kjøpe første oppgradering
upgrade1.onclick = upgradeOne;

// denne oppgraderingen gjør at man får mer score hver gang man klikker
function upgradeOne() {
	// hvis score er høyere eller lik prisen for oppgraderingen, så kjører den resten av koden inni. Hvis ikke blir koden ignorert
	if (score >= upgradeOneCost) {
		upgradeOneLvl++; // legg til 1 på level, level up
		score = score - upgradeOneCost; // oppdater score, ta bort prisen på oppgraderingen fra score

		upgradeOneCost = upgradeOneCost + 100; // legg til 100 på prisen på oppgraderingen, slik at prisen blir 100 dyrere hver gang man kjøper den
		scoreMultiplier++; // legg til 1 på score multiplier, denne avgjør hvor mye score man får hver gang man klikker på bilen, se funksjonen updateScore() lenger opp

		// oppdater alle HTML elementene slik at de viser de nye verdiene vi nettopp har regnet ut og endret.
		scoreEl.innerHTML = score;
		upgradeOneLvlEl.innerHTML = upgradeOneLvl;
		upgradeOneCostEl.innerHTML = upgradeOneCost;
	}
}

////////////
// UPGRADE 2
////////////
// samme her, bare at alt er oppgradering nr 2 og ikke 1
const upgrade2 = document.getElementById("upgrade-2");
const upgradeTwoLvlEl = document.getElementById("upgrade-2-lvl");
const upgradeTwoCostEl = document.getElementById("upgrade-2-cost");

let upgradeTwoLvl = 0;
let upgradeTwoCost = 200;

upgradeTwoLvlEl.innerHTML = upgradeTwoLvl;
upgradeTwoCostEl.innerHTML = upgradeTwoCost;

upgrade2.onclick = upgradeTwo;

// denne oppgraderingen gjør at man får "passive income", man får score per sekund selv om man ikke klikker
function upgradeTwo() {
	if (score >= upgradeTwoCost) {
		upgradeTwoLvl++;
		score = score - upgradeTwoCost;

		upgradeTwoCost = upgradeTwoCost + 200; // denne gangen øker prisen med 200 i stedenfor 100
		scorePerSecond++; // legg til 1 på score per second, denne avgjør hvor mye score man får hvert sekund, se funksjonen updateScorePerSecond() og setInterval() lenger opp

		// samme som på upgradeOne()
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

		image.src = "media/cars/lowrider-2.png";

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

		image.src = "media/cars/lowrider-2.png";

		scoreEl.innerHTML = score;
	}
}

////////////
// AVAILABILITY
////////////

setInterval(checkScore, 100);

function checkScore() {
	if (score < upgradeOneCost) {
		upgrade1.style.backgroundColor = "#282828";
		upgrade1.style.cursor = "default";
	} else {
		upgrade1.style.backgroundColor = "#333";
		upgrade1.style.cursor = "pointer";
	}

	if (score < upgradeTwoCost) {
		upgrade2.style.backgroundColor = "#282828";
		upgrade2.style.cursor = "default";
	} else {
		upgrade2.style.backgroundColor = "#333";
		upgrade2.style.cursor = "pointer";
	}

	if (score < carOneCost) {
		upgradeCar1.style.backgroundColor = "#282828";
		upgradeCar1.style.cursor = "default";
	} else {
		upgradeCar1.style.backgroundColor = "#333";
		upgradeCar1.style.cursor = "pointer";
	}

	if (score < carTwoCost) {
		upgradeCar2.style.backgroundColor = "#282828";
		upgradeCar2.style.cursor = "default";
	} else {
		upgradeCar2.style.backgroundColor = "#333";
		upgradeCar2.style.cursor = "pointer";
	}
}
