class App {
	constructor() {
		this.game = new Game(6);
	    this.gameView = new GameView(this.game); 
	    this.gameIsInProgress = false;
	}
	displayRules() {
		let ruleScreen = document.createElement('div');
		ruleScreen.setAttribute('id','ruleScreen');
		ruleScreen.innerHTML = '<h1>Liars\' Dice - a game of probability and bluffs</h1><h2>The Rules</h2><ul><li>The dice are rolled, and you can only see your six, the computer can only see its six</li><li>The first one to move makes a wager of how many times they think a particular face is showing, for example my first move might be "there are two 4\'s showing"</li><li>The Next player can choose to change the wager, but they must either increase the face value they are wagering on, or increase the number of times they think that face value appears.  For example, after my first move, you could say three 4\'s or any number of fives or sixes, but you could NOT wager 1\'s 2\'s 3\'s or any less than three 4\'s</li><li>If you think your opponents wager is wrong, you can call their bluff.  All dice are revealed.  If they wagered more of a die face than the actual number on the table, they lose one die in the next round.  If their wager was less than or equal to the actual number, the opponent calling their bluff loses a die</li><li>When a player loses their last die, they\'ve lost the game</li>';
		document.getElementById('body').appendChild(ruleScreen);
		const startButton = document.createElement('button');
		startButton.setAttribute('id','startButton');
		startButton.innerHTML = '<h1>START A NEW GAME</H1>';
		startButton.addEventListener('click',() => {this.hideRules(this.game)});
		document.getElementById('body').appendChild(startButton);
	}
	hideRules(game) {
		document.getElementById('startButton').remove();
		document.getElementById('ruleScreen').remove();
		game.newRound();
		this.gameView.makeHand();
		this.gameView.setInitialWagerDisplay();
		this.gameView.makeCovering();
		this.gameView.setInitialWager();
		this.gameView.makeButtons();
		this.gameView.makeWagerMachine();
		this.gameView.makePendingWager();
		this.gameView.setInitialPendingWager();
	}
	checkReRender() {
		if (this.game!==null) {
			if (this.game==='over') {
				document.getElementById('board').remove();
				document.getElementById('currentWager').remove();
				document.getElementById('buttonWrapper').remove();
				document.getElementById('wagerMachineDice').remove();
				document.getElementById('wagerMachineInstances').remove();
				document.getElementById('pendingWager').remove();
				this.game = new Game(6);
				this.gameView = new GameView(this.game);
				this.displayRules();
			} else {
				if (this.game.needReRender) {
					document.getElementById('playerHand').remove();
					document.getElementById('computerHand').remove();
					this.gameView.makeHand();
					this.gameView.setCurrentWager();
					this.game.needReRender = false;
				} 
				if (this.game.gameOver) {
					this.gameView = null;
					this.game = 'over';
				}
				if (this.game.bluffIsCalled) {
					this.gameView.callBluff();
					this.game.bluffIsCalled = false;
				}
			}
		}
	}
}
let startUp = new App();
startUp.displayRules();

setInterval(() => {
  	startUp.checkReRender();	
}, 800);