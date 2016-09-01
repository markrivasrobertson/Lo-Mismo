class diceRoll {
	constructor(computerDice, playerDice) {
		this.computerDice = computerDice;
		this.playerDice = playerDice;
		this.playerArr = [];
		this.computerArr = [];
		this.allDiceInPlay = [];
	}
	rollTheDice() {
		console.log('rolling')
		for (let i = 0; i<this.computerDice; i++) {
			let faceValue = Math.ceil(Math.random()*6)
			this.computerArr.push(faceValue);
			this.allDiceInPlay.push(faceValue);
		}
		for (let i = 0; i<this.playerDice; i++) {
			let faceValue = Math.ceil(Math.random()*6)
			this.playerArr.push(faceValue);
			this.allDiceInPlay.push(faceValue);
		}
	}
}
