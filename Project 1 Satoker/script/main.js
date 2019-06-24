console.log("Main loaded");
let playingDeck;
let player1;
let currentGame;
let rules;


console.log("WORKS :)");
// rules = new HouseRules();


$("#start").click(function(){
    console.log("Clicked")
    alert("The paragraph was clicked.");
  }); 

currentGame = new Game();
playingDeck = new Deck();   
player1 = new Player();
player2 = new Player();
player3 = new Player();
currentGame.players.push(player1);
currentGame.players.push(player2);
currentGame.players.push(player3);

// Wasnt loading so i had to set a timeout function
setTimeout(function(){ currentGame.generatePlayersHand(); }, 1000);



// Shuffle Deck

// New Hands

// Flop

// bets


// Turn

//bets

// River

//bets


//Showdown

