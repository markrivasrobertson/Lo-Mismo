class Game {
	constructor(diceNumber) {
		this.computerDice = diceNumber;
		this.playerDice = diceNumber;
		this.playerArr = [];
		this.computerArr = [];
		this.allDiceInPlay = [];
		this.currentMove = 0;
		this.lastToWager = '';
		this.currentInstances = 0;
		this.currentFaceValue = 0;
		this.computerMoveDecider = null;
		this.needReRender = false;
		this.gameOver = false;
		this.pendingInstances = 0;
		this.pendingFaceValue = 0;
		this.bluffIsCalled = false;
	}
	newRound() {
		console.log('newround');
		const roll = new diceRoll(this.computerDice, this.playerDice);
		roll.rollTheDice();
		this.needReRender = true;
		this.computerArr = roll.computerArr;
		this.playerArr = roll.playerArr;
		this.allDiceInPlay = roll.allDiceInPlay;
		this.currentInstances = 0;
		this.currentFaceValue = 0;
		this.currentMove = Math.floor(Math.random()*2);
		this.computerMoveDecider = new ComputerMoveDecider(this.computerArr, this.playerDice);
		this.currentMove%2===0 ? this.computerMove() : console.log('Player Move');
		const soundEffect = document.getElementById('dice-roll');
		soundEffect.play(); 
	} 
	wager(instances, faceValue) {
		if (faceValue===this.currentFaceValue && instances<=this.currentInstances || faceValue<this.currentFaceValue){
			alert('Sorry, that\'s not a legal wager, you must raise to a higher face value or a higher number of appearances');
		} else {
		console.log('wager')
		this.currentInstances = instances;
		this.currentFaceValue = faceValue;
		this.currentMove++;
		this.currentMove%2===0 ? this.computerMove() : console.log('Player Move');
		}
	}
	computerMove() {
		console.log('computermove')
		let checkDecisicion = this.computerMoveDecider.decideMove(this.currentInstances, this.currentFaceValue);
		if (checkDecisicion) {
			let faces = this.computerMoveDecider.wagerFaceValueChoice(this.currentInstances, this.currentFaceValue);
			let instances = this.computerMoveDecider.wagerInstanceChoice(this.currentInstances, faces, this.currentFaceValue);
			this.wager(instances, faces);
			this.lastToWager = 'Computer';
		} else {
			this.bluffIsCalled = true;
		}
		this.needReRender = true;
	}
	gameOver() {
		console.log('game over');
	}
	check() {
		console.log('check')
		let count = 0;
		for (let member of this.allDiceInPlay) {
			if (member === this.currentFaceValue) {
				count++;
			}
		}
		let outcome;
		let winner;
		if (count < this.currentInstances) {
			outcome = 'You called the Bluff!';
			this.currentMove%2===0 ? winner = 'Computer' : winner = 'Player';
		} else { 
			outcome = 'hombre, that wager was true!';
			this.currentMove%2===0 ? winner = 'Player' : winner = 'Computer';
		}
		winner==='Player' ? this.computerDice-- : this.playerDice--;
		this.lastToWager = '';
		this.continueGame(winner);
	}
	continueGame(winner) {
		this.playerDice===0 || this.computerDice===0 ? this.gameIsOver(winner) : this.newRound();
	}
	gameIsOver(winner) {
		this.needReRender = false;
		this.gameOver = true;
		alert(`The Game is Over.  Winner: ${winner}`);
	}
}