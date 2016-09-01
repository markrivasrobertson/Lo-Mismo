// const playerHand = new Hand([1,2,6,4,5,6]);

class GameView {
	constructor(game) {
		this.el = document.createElement('div');
		this.el.setAttribute('id','board');
		this.game = game;
	}
	makeHand() {
		this.hand = new Hand(this.game.playerArr);
	}
}
// let bob = new GameView([2,3,4], 'mark');
// bob.makeHand([2,3,4], 'mark');
// bob.makeHand([5,6,1], 'computer');

// render board

// roll and render dice for both players
// display my dice, hide computers
// show 