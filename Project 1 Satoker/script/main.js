console.log("Main loaded");
let playingDeck;
let player1;
let currentGame;
let rules;


console.log("WORKS :)");
// rules = new HouseRules();
currentGame = new Game();
playingDeck = new Deck();   
player1 = new Player();

playingDeck.shuffleDeck();
// player1.newHand();

// Flop
currentGame.flop();
console.log("Changing cards");   
// $('#cc1').html(currentGame.communityCards[0]);
// $('#cc2').html(currentGame.communityCards[1]);
// $('#cc3').html(currentGame.communityCards[2]);

// Shuffle Deck

// New Hands

// Flop

// bets


// Turn

//bets

// River

//bets


//Showdown

