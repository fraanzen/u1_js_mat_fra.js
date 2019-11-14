//The player starts with a card value of 0.
var playerCards = 0;
//The dealer starts with a card value of 0.
var dealerCards = 0;
//The variable that stores the random cards. 
var randomCard = 0;

//Runs the game at the refresh of the page. 
runDrawAndHope();

//Function to return a dealt card to the board. Between the values of 1-11. 
function dealCard(){
    randomCard = Math.floor(Math.random() * 11) + 1;
    return randomCard;
}

//Function that deals a card to the player. 
function dealPlayerCard(randomCard){
    playerCards += randomCard;
    console.log("The player draws" + " " + randomCard + " " + "The players total cards values are" + " " + playerCards);
    return playerCards;
}

//Function that deals the dealer a card. 
function dealDealerCard(randomCard){
    dealerCards += randomCard;
    console.log("The dealer draws" + " " + randomCard + " " + "The dealers total cards values are" + " " + dealerCards);
    return dealerCards;
}

//Function that runs the game and deals the player one card and the dealer two cards.
function runDrawAndHope(){
    dealPlayerCard(dealCard());
    dealDealerCard(dealCard());
    dealDealerCard(dealCard());

    if(dealerCards == 21){
        alert("The dealer hit 21 and wins.")
    }
}

/*
* Funtion that allows the player to draw a card or hold his hand at the current state. By using the keypress of D or S.
* Calls for the checkWin functions to see who wins. 
* If the player holds his hand and the dealers cards values are less than 17 the dealer draws one card. Then checks who wins. 
*/
window.addEventListener("keydown", function(event){

    if (event.code === 'KeyD') {
        console.log("The player draws")
        dealPlayerCard(dealCard());
        checkWinAfterDeal();

    } else if (event.code === 'KeyS') {
        console.log("The player holds")
        if (dealerCards < 17){
            dealDealerCard(dealCard());
        }
        checkWinAfterDeal();
        checkWinAfterHold();
    }
});

/*
* Function that checks who wins after the player draws cards. 
* If player is over 21 and dealer is not the dealer wins.
* If the player hits 21 and dealer is not 21 the player wins. 
* If the dealer hits 21 and the player is under 21 the dealer wins.
* If the dealer is over 21 and the player is not the player wins. 
*/
function checkWinAfterDeal(){
    if(playerCards == 21 && dealerCards != 21){
        alert("You scored 21 you win!" + " " + playerCards + "\n" + "Dealers cards values are" + " " + dealerCards);
    }
    else if(dealerCards == 21 && playerCards != 21){
        alert("The dealer scored 21 you lose!" + " " + dealerCards + "\n" + "Your cards values are" + " " + playerCards)
    }
    else if(dealerCards > 21){
        alert("The dealer went over 21 you win!" + " " + dealerCards + "\n" + "Your cards values are" + " " + playerCards)
    }
    else if(playerCards > 21){
        alert("You went over 21 you lose!" + " " + playerCards + "\n" + "The dealers cards values are" + " " + dealerCards);
    }
}
/*
* Function that checks who wins after the player decides to hold his current hand.
* Player with the highest score wins. 
* If equal score the game is draw. 
*/ 
function checkWinAfterHold(){
    if (playerCards < 21 && playerCards > dealerCards){
        alert("You scored" + " " + playerCards + " " + "You win!" + "\n" + "The dealers cards values are" + " " + dealerCards)
    }
    else if (dealerCards < 21 && dealerCards > playerCards){
        alert("You scored" + " " + playerCards + " " + "You lose!" + "\n" + "The dealers cards values are" + " " + dealerCards)
    }
    else if (playerCards == dealerCards){
        alert("You scored" + " " + playerCards + " " + "You draw!" + "\n" + "The dealers cards values are" + " " + dealerCards)
    }
}
