class Die {
	constructor(value, hand) {
		this.el = document.createElement('div');
		this.el.setAttribute('class', `die ${hand} die${value}`);
		this.hand = hand;
		for (let i = 0; i<9; i++) {
			let pip = document.createElement('div');
			pip.setAttribute('class', `pip pip${i}`);
			this.el.appendChild(pip);
		}
	}
	render() {
		document.getElementById(this.hand).appendChild(this.el);
	}
}
class WagerDie {
	constructor(value, game) {
		this.el = document.createElement('div');
		this.el.setAttribute('class', `wagerDie die${value}`);
		this.value = value;
		this.game = game;
		for (let i = 0; i<9; i++) {
			let pip = document.createElement('div');
			pip.setAttribute('class', `pip pip${i}`);
			this.el.appendChild(pip);
		}
	}
	render() {
		this.el.addEventListener('click', this.game.consoleItBaby);
		document.getElementById('wagerBoard').appendChild(this.el);
	}
	select() {
		console.log(this.el);
	}
}
class Hand {
	constructor(name, location) {
		this.el = document.createElement('div');
		// this.name = name;
		// this.el.setAttribute('id', this.name);
		this.el.setAttribute('class', 'hand')
		this.el.setAttribute('id', name)
		document.getElementById('board').appendChild(this.el);
		
		// this.arr = arr;
		// for (let member of this.arr) {
		// 	let newDie = new Die (member, this.name);
		// 	newDie.render();
		// }
	}

}
// class Hand {
// 	constructor(arr, player) {
// 		this.el = document.createElement('div');
// 		this.el.setAttribute('id', player);
// 		this.arr = arr;
// 		this.player = player;
		// document.getElementById('board').appendChild(this.el);
		// let carl = new Die(6);
		// document.getElementById(player).appendChild(carl);
		// for (let member of this.arr) {
		// 	document.getElementById(this.player).appendChild(new Die(member));
		// }
	// }
	// render() {
	// 	console.log('working');
		// for (let member of this.arr) {
		// 	document.getElementById(this.player).appendChild(new Die(member));
		// }
// 	}	
// }
// let tom = new Die(6, 'board');
// let tom = new Hand([4,5,6]);
// let bob = new Hand([4,5,6,7,8], 'mark');

// class DiceRoll {
// 	constructor(array) {
// 		let die = 
// 	}
// }

// function makeDice(num) {
// 	let bobby = 1;
// 	for (let i = 1; i<num+1; i++) {
// 		let die = document.createElement('div');
// 		die.setAttribute('class', `die die${i}`);
// 		for (let i = 0; i<9; i++) {
// 			let pip = document.createElement('div');
// 			pip.setAttribute('class', `pip pip${i}`);
// 			die.appendChild(pip);
// 			bobby++;
// 		}
// 		document.getElementById('board').appendChild(die);
// 	}
// }
// // makeDice(6);
// // console.log('hooked up')


// // render() {
// // 	for (let i = 0; i < this.cells.length ; i++) {
// // 		let newCell = document.createElement('div');
// // 		newCell.setAttribute('class', 'cell');
// // 		newCell.setAttribute('id',`${i}`);
// // 		document.getElementById('board').appendChild(newCell);
// // 	};