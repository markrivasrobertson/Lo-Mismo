class App {
	constructor(diceNumber) {
	    this.game = new Game(diceNumber);
	    this.gameView = new GameView(this.game, diceNumber);
	}
}
// let startUp = new App(6);
// startUp.game.newRound();