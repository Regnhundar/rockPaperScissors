//Skriv pseudokod för det klassiska spelet sten, sax och påse. Först till 3 vinster vinner!

let playerOneChoice = 0;
let playerTwoChoice = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let gameOn = true;
let spelarVal = [`sten`, `sax`, `påse`];
let playerOneInputApproved = false;
let playerTwoInputApproved = false;

while (gameOn) {
    if (playerOneScore || playerTwoScore === 2 && playerOneScore > playerTwoScore) {
        window.alert(`Spelare 1 var bäst av tre!`)
        gameOn = false;
    }
    else if (playerOneScore || playerTwoScore === 2 && playerOneScore < playerTwoScore) {
        window.alert(`Spelare 2 var bäst av tre!`)
        gameOn = false;
    }
    else {
        while (!playerOneInputApproved) {
            playerOneChoice = window.prompt(`Spelare 1: Ange antingen sten, sax eller påse.`)
            if (!spelarVal.includes(playerOneChoice)) {
                window.alert(`Spelare1: ${playerOneChoice} är inte en godkänd input.`)
            }
            else {
                playerOneInputApproved = true;
            }
        }
        while (!playerTwoInputApproved) {
            playerTwoChoice = window.prompt(`Spelare 2: Ange antingen sten, sax eller påse.`)
            if (!spelarVal.includes(playerTwoChoice)) {
                window.alert(`Spelare2: ${playerTwoChoice} är inte en godkänd input.`)
            }
            else {
                playerTwoInputApproved = true;
            }
        }
        if (playerOneChoice === playerTwoChoice) {
            window.alert(`Ni valde lika. Ingen får poäng!`)
            playerOneInputApproved = false;
            playerTwoInputApproved = false;
        }
        else if (playerOneChoice === `sten` && playerTwoChoice === `sax`) {
            window.alert(`Sten dänger sax! Spelare 1 +1 poäng!`)
            playerOneScore++
            playerOneInputApproved = false;
            playerTwoInputApproved = false;
        }
        else if (playerOneChoice === `sax` && playerTwoChoice === `påse`) {
            window.alert(`Sax dänger påse! Spelare 1 +1 poäng!`)
            playerOneScore++
            playerOneInputApproved = false;
            playerTwoInputApproved = false;
        }
        else if (playerOneChoice === `påse` && playerTwoChoice === `sten`) {
            window.alert(`Påse dänger sten! Spelare 1 +1 poäng!`)
            playerOneScore++
            playerOneInputApproved = false;
            playerTwoInputApproved = false;
        }
        else {
            window.alert(`${playerTwoChoice} dänger ${playerOneChoice}! Spelare 2 +1 poäng!`)
            playerTwoScore++
            playerOneInputApproved = false;
            playerTwoInputApproved = false;
        }
    }
}