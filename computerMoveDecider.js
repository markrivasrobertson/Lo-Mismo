class ComputerMoveDecider {
	constructor(computerArr, playerDice) {
		this.computerArr = computerArr;
		this.playerDice = playerDice;
		this.expectedCount = 0;
	}
	decideMove(instances, faceValue) {
		this.expectedCount = 0;
		for (let member of this.computerArr) {
			if (member===faceValue) {
				this.expectedCount++;
			}
		}
		let expectedHidden = this.playerDice/6;
		this.expectedCount += expectedHidden;
		let outcome;
		this.expectedCount >= instances ? outcome = true : outcome = false;
		console.log('outcome ='+outcome);
		console.log('this.expectedCount ='+this.expectedCount);
		return outcome;
	}
	wagerFaceValueChoice(instances, faceValue) {
		let outcome = 0;
		if (faceValue===0) {
			outcome = 1;
		} else if (faceValue===6) {
			outcome = 6;
		} else if (this.expectedCount >= instances+1) {
			outcome = faceValue;
		} else {
			outcome = faceValue+1;
		}
		console.log(`face ${outcome}`);
		return outcome;
	}
	wagerInstanceChoice(instances, chosenFace, currentFace) {
		let outcome = 0;
		chosenFace>currentFace ? outcome = 1 : outcome = instances+=1
		console.log(`instances ${outcome}`);
		return outcome;	
	}
}