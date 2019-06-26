console.log("Main loaded");
let playingDeck;
let player1;
let currentGame;
let rules;
let playerName = '';
let playerMoney = 0;
let dealButtonVariable = 0;
let opponentsArray = ["John Mcafee", "CZ", "Vitalik Buterin", "Justin Sun",];
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
    let playername = $('#username').val();
    let playermoney= $('#money').val();
    currentGame.generatePlayersHand(playername, playerMoney);
    $('#inputPlayer').text(player1.name);
    $('#inputAmount').text("$" + player1.money);
    console.log("MONEY---" + playerMoney)
    console.log("NAME---" + playerName);
    $('#startContainer').toggle();
    $('#gameContainer').toggle();

  });




    
    // Wasnt loading so i had to set a timeout function
    $('#dealButton').click(function(){
      console.log("Deal Variable ------ " + dealButtonVariable);
      if(dealButtonVariable === 0){
        currentGame.generatePlayersHand();
        dealButtonVariable++;
        currentGame.checkHand();
        console.log("Deal Variable ------ " + dealButtonVariable);
      }
      else if(dealButtonVariable === 1){
        currentGame.flop();
        dealButtonVariable++;
        currentGame.checkHand();
        console.log("Deal Variable ------ " + dealButtonVariable);
      }
      else if(dealButtonVariable === 2){
        currentGame.theTurn();
        dealButtonVariable++;
        currentGame.checkHand();
        console.log("Deal Variable ------ " + dealButtonVariable);
      }
      else if(dealButtonVariable === 3){
        console.log("Test Show Down Button");
        currentGame.theRiver();
        dealButtonVariable++;
        currentGame.checkHand();
        $('#dealButton').html("ShowDown");
        console.log("Deal Variable ------ " + dealButtonVariable);
      }
      else if(dealButtonVariable === 4){
        currentGame.theShowDown();
        dealButtonVariable++;       
        console.log("Deal Variable ------ " + dealButtonVariable);      
        $('.flex-end > .commandButton').attr("class", "commandButtonGreen");
        $('#dealButton').html("Play Again");
        console.log("Deal Variable ------ " + dealButtonVariable);        
      }
      
    })
        // currentGame.TESTFLUSH();
        // currentGame.TESTFOUROFAKIND();
        // currentGame.TESTFULLHOUSE();
    
    
    
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