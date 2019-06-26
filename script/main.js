console.log("Main loaded");
let playingDeck;
let player1;
let currentGame;
let rules;
let playerName = '';
let playerMoney = 0;
currentGame = new Game();
playingDeck = new Deck();   
rules = new HouseRules();   
player1 = new Player(playerName);
player2 = new Player();
player3 = new Player();


$(document ).ready(function() { 
  console.log("READY");

  // Turns game screen OFF
  $('#gameContainer').toggle();


  $( "#goodluck" ).click(function(e) {
    e.preventDefault();
    player1.name = $('#username').val();
    player1.money = $('#money').val();
    $('#inputPlayer').text(player1.name);
    $('#inputAmount').text(player1.money);
    console.log("MONEY---" + playerMoney)
    console.log("NAME---" + playerName);
    $('#startContainer').toggle();
    $('#gameContainer').toggle();
  });
  





    // currentGame.players.push(new Player());
    currentGame.players.push(player1);
    currentGame.players.push(player2);
    currentGame.players.push(player3);
    
    // Wasnt loading so i had to set a timeout function
    setTimeout(function(){
        currentGame.generatePlayersHand();
        currentGame.flop();
        currentGame.theTurn();
        currentGame.theRiver();
        currentGame.checkHand();
        // currentGame.TESTFLUSH();
        // currentGame.TESTFOUROFAKIND();
        // currentGame.TESTFULLHOUSE();
    }, 1000);
    
    
    console.log(">>>>>>>>>>>>>>>>>>>>>>>> ", playerName)
    
// Shuffle Deck

// New Hands

// Flop

// bets


// Turn

//bets

// River

//bets


//Showdown






});