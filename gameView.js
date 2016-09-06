

class GameView {
	constructor(game) {
		this.el = document.createElement('div');
		this.el.setAttribute('id','board');
		this.game = game;
		this.pendingInstances;
		this.pendingDie;
		document.getElementById('body').appendChild(this.el);
	}
	makeHand() {
		let playerHand = new Hand ('playerHand');
		for (let member of this.game.playerArr) {
			let newDie = new Die(member, 'playerHand');
			newDie.render();
		}
		let computerHand = new Hand ('computerHand');
		for (let member of this.game.computerArr) {
			let newDie = new Die(member, 'computerHand');
			newDie.render();
		}
	}
	makeCovering() {
		let cover = document.createElement('div');
		cover.setAttribute('id','covering');
		document.getElementById('board').appendChild(cover);
	}
	removeCovering() {
		document.getElementById('covering').remove();
	}
	makeWagerMachine() {
		let wagerMachineInstances = document.createElement('div');
		wagerMachineInstances.setAttribute('id','wagerMachineInstances');
		wagerMachineInstances.innerHTML = '<h4>Click to choose a number of appearances for your face value</h4>'
		document.getElementById('body').appendChild(wagerMachineInstances);
		for (let i = 0; i < 12; i++) {
			let instanceCircle = document.createElement('div');
			instanceCircle.setAttribute('class','instanceCircle');
			instanceCircle.setAttribute('id',`instanceCircle${i+1}`);
			instanceCircle.innerHTML = `<br>${i+1}`;
			instanceCircle.addEventListener('click', () => {this.makePendingInstancesDisplay(i+1)});
			document.getElementById('wagerMachineInstances').appendChild(instanceCircle);
		}
		let wagerMachineDice = document.createElement('div');
		wagerMachineDice.setAttribute('id','wagerMachineDice');
		wagerMachineDice.innerHTML = '<h4>Click to choose a face value</h4>';
		document.getElementById('body').appendChild(wagerMachineDice);
		for (let i = 0; i < 6; i++) {
			let newDie = new WagerDie(i+1, this.game);
			newDie.el.addEventListener('click', () => {this.makePendingDie(i+1)});
			newDie.render();
		}
	}

	setInitialWagerDisplay() {
		let makeWagerDisplay = document.createElement('div');
		makeWagerDisplay.setAttribute('id','currentWager');
		document.getElementById('body').appendChild(makeWagerDisplay);
	}
	setInitialWager() {
		let startingWagerStatus = document.createElement('div');
		startingWagerStatus.setAttribute('id','lastInstanceWager');
		document.getElementById('currentWager').appendChild(startingWagerStatus);
		let startingFaceValue = document.createElement('div');
		startingFaceValue.setAttribute('id','lastFaceValueWager');
		document.getElementById('currentWager').appendChild(startingFaceValue);
	}
	setCurrentWager() {
		document.getElementById('lastInstanceWager').remove();
		document.getElementById('lastFaceValueWager').remove();
		let lastInstanceWager = document.createElement('h4');
		lastInstanceWager.setAttribute('id','lastInstanceWager');
		lastInstanceWager.innerHTML = `${this.game.lastToWager} wagered that the table (which currently holds ${this.game.allDiceInPlay.length} dice) has at least <span>${this.game.currentInstances}</span> of`;
		document.getElementById('currentWager').appendChild(lastInstanceWager);
		let currentDisplayedFace = document.createElement('div');
		currentDisplayedFace.setAttribute('id', 'lastFaceValueWager');
		currentDisplayedFace.setAttribute('class', `wagerDie die${this.game.currentFaceValue}`);
		for (let i = 0; i<9; i++) {
			let pip = document.createElement('div');
			pip.setAttribute('class', `pip pip${i}`);
			currentDisplayedFace.appendChild(pip);
		}
		document.getElementById('currentWager').appendChild(currentDisplayedFace);
		this.clearPending();
	}
	makeButtons() {
		let buttonWrapper = document.createElement('div');
		buttonWrapper.setAttribute('id','buttonWrapper');
		document.getElementById('body').appendChild(buttonWrapper);
		let wagerButton = document.createElement('button');
		wagerButton.setAttribute('id','wagerButton');
		wagerButton.innerHTML = 'Make A Wager';
		wagerButton.addEventListener('click', () => {this.wagerButton()});
		document.getElementById('buttonWrapper').appendChild(wagerButton);
		let bluffButton = document.createElement('button');
		bluffButton.setAttribute('id','bluffButton');
		bluffButton.innerHTML = 'Call the Computer\'s Bluff';
		bluffButton.addEventListener('click', () => {this.callBluff()});
		document.getElementById('buttonWrapper').appendChild(bluffButton);
	}
	wagerButton() {
		this.game.wager(this.pendingInstances, this.pendingDie);
		this.clearPending();
		this.setCurrentWager();
	}
	callBluff() {
		setTimeout(() => {
  			this.clearWager();
		}, 100);
		setTimeout(() => {
			document.getElementById('currentWager').innerHTML = '<h1>BLUFF CALLED</>';
		}, 500);
		setTimeout(() => {
			this.removeCovering();
		}, 2000);
		setTimeout(() => {
  			this.game.check();	
		}, 8000);
		setTimeout(() => {
			document.getElementById('currentWager').innerHTML = '';
		}, 8000);
		setTimeout(() => {
			this.makeCovering();
		}, 8000);
		setTimeout(() => {
			this.setInitialWager();
		}, 8000);
	}
	makePendingWager() {
		let pendingWager = document.createElement('div');
		pendingWager.setAttribute('id','pendingWager');
		pendingWager.innerHTML = '<h4>Your pending wager.  Press "Make Wager" to confirm';
		document.getElementById('body').appendChild(pendingWager);
	}
	setInitialPendingWager() {
		let initialPendingInstances = document.createElement('div');
		let initialPendingDie = document.createElement('div');
		initialPendingInstances.setAttribute('id','pendingInstances');
		initialPendingDie.setAttribute('id','pendingDie');
		document.getElementById('pendingWager').appendChild(initialPendingInstances);
		document.getElementById('pendingWager').appendChild(initialPendingDie);
	}
	makePendingInstancesDisplay(instances) {
		document.getElementById('pendingInstances').remove();
		let newPendingInstancesDisplay = document.createElement('div');
		newPendingInstancesDisplay.setAttribute('class','instanceCircle');
		newPendingInstancesDisplay.setAttribute('id','pendingInstances');
		newPendingInstancesDisplay.innerHTML = `<br>${instances}`;
		document.getElementById('pendingWager').appendChild(newPendingInstancesDisplay);
		this.pendingInstances = instances;
	}
	makePendingDie(faceValue) {
		document.getElementById('pendingDie').remove();
		let newPendingDie = new PendingDie(faceValue);
		this.pendingDie = faceValue;
	}
	clearPending() {
		console.log('holy');
		document.getElementById('pendingInstances').remove();
		document.getElementById('pendingDie').remove();
		this.setInitialPendingWager();
	}
	clearWager() {
		console.log('holier');
		document.getElementById('pendingInstances').remove();
		document.getElementById('pendingDie').remove();
		document.getElementById('lastInstanceWager').remove();
		document.getElementById('lastFaceValueWager').remove();
		this.setInitialPendingWager();
		this.setInitialWager();
	}
}