// const playerHand = new Hand([1,2,6,4,5,6]);

class GameView {
	constructor(game, diceNumber) {
		this.el = document.createElement('div');
		this.el.setAttribute('id','board');
		this.game = game;
		this.diceNumber = diceNumber;
		document.getElementsByTagName('body')[0].appendChild(this.el);
	}
	logIt() {
		let logOutput = this.game.allDiceInPlay;
		console.log(logOutput);
	}
	makeHand() {
		let playerHand = new Hand ('playerHand');
		// console.log(this.game.playerArr);
		for (let member of this.game.playerArr) {
			let newDie = new Die(member, 'playerHand');
			newDie.render();
			// let newDie = new Die(member)
			// console.log(`player ${member}`)
		}
		let computerHand = new Hand ('computerHand');
		// console.log(this.game.computerArr);
		for (let member of this.game.computerArr) {
			let newDie = new Die(member, 'computerHand');
			newDie.render();
			// let newDie = new Die(member)
			// console.log(`computer ${member}`)
		}
	}
	makeWagerBoard() {
		let wagerBoard = document.createElement('div');
		wagerBoard.setAttribute('id','wagerBoard');
		document.getElementById('body').appendChild(wagerBoard);
		for (let i = 0; i < 6; i++) {
			let newDie = new WagerDie(i+1, this.game);
			newDie.render();
		}
	}
	// makeWagerMachine() {
	// 	let wagerMachine = new wagerMachine;
	// 	document.getElementById('wagerBoard').appendChild(wagerMachine);
	// }
}
// class WagerMachine {
// 	constructor() {
// 		this.el = document.createElement('div');
// 		this.el.setAttribute('id', 'wagerMachine');
// 		document.getElementById('wagerBoard').appendChild(this.el);
// 	}
// }

// let bob = new GameView([2,3,4], 'mark');
// bob.makeHand([2,3,4], 'mark');
// bob.makeHand([5,6,1], 'computer');

// render board

// roll and render dice for both players
// display my dice, hide computers
// show 