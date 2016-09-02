class Game {
	constructor(diceNumber) {
		this.computerDice = diceNumber;
		this.playerDice = diceNumber;
		this.playerArr = [];
		this.computerArr = [];
		this.allDiceInPlay = [];
		this.currentInstances = 0;
		this.currentFaceValue = 0;
	}
	newRound() {
		const roll = new diceRoll(this.computerDice, this.playerDice);
		roll.rollTheDice();
		this.computerArr = roll.computerArr;
		this.playerArr = roll.playerArr;
		this.allDiceInPlay = roll.allDiceInPlay;
	} 
	playerWager(instances, faceValue) {
		this.currentInstances = instances;
		this.currentFaceValue = faceValue;
		console.log(this.currentInstances);
		console.log(this.currentFaceValue);
	}
	computerWager(instances, faceValue) {

	}
	check() {
		let count = 0;
		for (let member of this.allDiceInPlay) {
			if (member === this.currentFaceValue) {
				count++;
			}
		}
		let outcome;
		count < this.currentInstances ? outcome = 'You called it!' : outcome = 'Tough break, hombre!';
	    alert(outcome);
	}
	consoleItBaby() {
		console.log('this click');
	}
}
// const bob = new Game(6);
// bob.newRound();
// bob.playerWager(1,4);
// bob.check();
