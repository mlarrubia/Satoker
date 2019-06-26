console.log("Main loaded");
let playername; 
let playermoney;
let playingDeck;
let currentGame;
let rules;
let playerName = '';
let playerMoney = 0;
let dealButtonVariable = 0;
let opponentsArray = ["John Mcafee", "CZ", "Vitalik Buterin", "Justin Sun",];
currentGame = new Game();
// playingDeck = new Deck();   
// rules = new HouseRules();   



$(document ).ready(function() { 
  console.log("READY");

  // Turns game screen OFF
  $('#gameContainer').toggle();


  $( "#goodluck" ).click(function(e) {
    e.preventDefault();
    playername = $('#username').val();
    playermoney= $('#money').val();
    currentGame.generatePlayersHand(playername, playerMoney);
    $('#inputPlayer').text(playername);
    $('#inputAmount').text("$" + playermoney);
    $('#p2name').text(currentGame.players[1].name);
    $('#p2money').text("$" + currentGame.players[1].money);
    $('#p3name').text(currentGame.players[2].name);
    $('#p3money').text("$" + currentGame.players[2].money);
    $('#startContainer').toggle();
    $('#gameContainer').toggle();

  });




    
    // Wasnt loading so i had to set a timeout function
    $('#dealButton').click(function(){
      console.log("Deal Variable ------ " + dealButtonVariable);
      if(dealButtonVariable === 0){
        currentGame.generatePlayersHand();
        dealButtonVariable++;
        for(let i = 0; i < currentGame.players.length; i++){
          currentGame.checkHand(currentGame.players[i]);
        }
        console.log("Deal Variable ------ " + dealButtonVariable);
      }
      else if(dealButtonVariable === 1){
        currentGame.flop();
        dealButtonVariable++;
        for(let i = 0; i < currentGame.players.length; i++){
          currentGame.checkHand(currentGame.players[i]);
        }
        console.log("Deal Variable ------ " + dealButtonVariable);
      }
      else if(dealButtonVariable === 2){
        currentGame.theTurn();
        dealButtonVariable++;
        for(let i = 0; i < currentGame.players.length; i++){
          currentGame.checkHand(currentGame.players[i]);
        }
        console.log("Deal Variable ------ " + dealButtonVariable);
      }
      else if(dealButtonVariable === 3){
        console.log("Test Show Down Button");
        currentGame.theRiver();
        dealButtonVariable++;
        for(let i = 0; i < currentGame.players.length; i++){
          currentGame.checkHand(currentGame.players[i]);
        }
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