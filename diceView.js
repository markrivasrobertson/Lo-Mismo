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
		this.el.setAttribute('id',`wagerDie${value}`);
		this.value = value;
		this.game = game;
		this.highlighted = false;
		for (let i = 0; i<9; i++) {
			let pip = document.createElement('div');
			pip.setAttribute('class', `pip pip${i}`);
			this.el.appendChild(pip);
		}
	}
	render() {
		document.getElementById('wagerMachineDice').appendChild(this.el);
	}
}
class PendingDie {
	constructor(value, game) {
		this.el = document.createElement('div');
		this.el.setAttribute('class', `wagerDie die${value}`);
		this.el.setAttribute('id','pendingDie');
		this.value = value;
		this.game = game;
		this.highlighted = false;
		for (let i = 0; i<9; i++) {
			let pip = document.createElement('div');
			pip.setAttribute('class', `pip pip${i}`);
			this.el.appendChild(pip);
		}
		document.getElementById('pendingWager').appendChild(this.el);
	}
}
class Hand {
	constructor(name) {
		this.el = document.createElement('div');
		this.el.setAttribute('class', 'hand');
		this.el.setAttribute('id', name);
		document.getElementById('board').appendChild(this.el);
	}

}