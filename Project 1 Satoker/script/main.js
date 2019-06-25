console.log("Main loaded");
let playingDeck;
let player1;
let currentGame;
let rules;


console.log("WORKS :)");
// rules = new HouseRules();


 

    currentGame = new Game();
    playingDeck = new Deck();   
    rules = new HouseRules();   
    player1 = new Player();
    player2 = new Player();
    player3 = new Player();
    // currentGame.players.push(new Player());
    currentGame.players.push(player1);
    currentGame.players.push(player2);
    currentGame.players.push(player3);

    // Wasnt loading so i had to set a timeout function
    setTimeout(function(){
        currentGame.generatePlayersHand();
        // currentGame.flop();
        // currentGame.theTurn();
        // currentGame.theRiver();
        // currentGame.TESTFLUSH();
        // currentGame.TESTFOUROFAKIND();
        currentGame.TESTFULLHOUSE();
    }, 1000);


// Shuffle Deck

// New Hands

// Flop

// bets


// Turn

//bets

// River

//bets


//Showdown

