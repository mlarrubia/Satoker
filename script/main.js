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
    $('#startContainer').toggle();
    $('#gameContainer').toggle();
    $('#dealButton').html("Deal Card");
    $('#dealButton').html("Deal Card");

    let randName1 = opponentsArray.splice(Math.floor(Math.random() * opponentsArray.length), 1);
    let randName2 = opponentsArray.splice(Math.floor(Math.random() * opponentsArray.length), 1);
    let randmoney1 = (Math.floor(Math.random() * 2000) + 500)
    let randmoney2 = (Math.floor(Math.random() * 2000) + 500)
    console.log("MONEY---------------- " + money);
    
    currentGame.players.push(new Player(name, money));
    currentGame.players.push(new Player(randName1, randmoney1));
    currentGame.players.push(new Player(randName2, randmoney2));

    currentGame.generatePlayersHand(playername, playerMoney);
    $('#inputPlayer').text(playername);
    $('#inputAmount').text("$" + playermoney);
    $('#p2name').text(currentGame.players[1].name);
    $('#p2money').text("$" + currentGame.players[1].money);
    $('#p3name').text(currentGame.players[2].name);
    $('#p3money').text("$" + currentGame.players[2].money);


  });




    
    // Wasnt loading so i had to set a timeout function
    $('#dealButton').click(function(){
      
      if(dealButtonVariable === 0){
        $('#dealButton').html("The Flop");
      // $('#inputPlayer').text(playername);
      // $('#inputAmount').text("$" + playermoney);
      // $('#p2name').text(currentGame.players[1].name);
      // $('#p2money').text("$" + currentGame.players[1].money);
      // $('#p3name').text(currentGame.players[2].name);
      // $('#p3money').text("$" + currentGame.players[2].money);

             // Player 1
             currentGame.players[0].hole[0] = (playingDeck.deckShuffled.shift());
             currentGame.players[0].hole[1] = (playingDeck.deckShuffled.shift());
             $('#p1').html('<img src="' + currentGame.players[0].hole[0].image + '" alt="">');
             $('#p1').append('<img src="' + currentGame.players[0].hole[1].image + '" alt="">');
     
             // Player 2
             currentGame.players[1].hole[0] = (playingDeck.deckShuffled.shift());
             currentGame.players[1].hole[1] = (playingDeck.deckShuffled.shift());
             $('#p2').empty();
             $('#p2').append('<img src="assets/small/back.png" alt="">');
             $('#p2').append('<img src="assets/small/back.png" alt="">');
             
             // Player 3
             currentGame.players[2].hole[0] = (playingDeck.deckShuffled.shift());
             currentGame.players[2].hole[1] = (playingDeck.deckShuffled.shift());
             $('#p3').empty();
             $('#p3').append('<img src="assets/small/back.png" alt="">');
             $('#p3').append('<img src="assets/small/back.png" alt="">');

    
        dealButtonVariable++;
        for(let i = 0; i < currentGame.players.length; i++){
          currentGame.checkHand(currentGame.players[i]);
        }

      }
      else if(dealButtonVariable === 1){
        $('#dealButton').html("The Turn");
        currentGame.flop();
        dealButtonVariable++;
        for(let i = 0; i < currentGame.players.length; i++){
          currentGame.checkHand(currentGame.players[i]);
        }

      }
      else if(dealButtonVariable === 2){
        $('#dealButton').html("The River");
        currentGame.theTurn();
        dealButtonVariable++;
        for(let i = 0; i < currentGame.players.length; i++){
          currentGame.checkHand(currentGame.players[i]);
        }

      }
      else if(dealButtonVariable === 3){
        $('#dealButton').html("ShowDown");
        currentGame.theRiver();
        dealButtonVariable++;
        for(let i = 0; i < currentGame.players.length; i++){
          currentGame.checkHand(currentGame.players[i]);
        }

      }
      else if(dealButtonVariable === 4){
        $('#dealButton').html("Play Again");
        currentGame.theShowDown();
        dealButtonVariable++;       
      
        $('.flex-end > .commandButton').attr("class", "commandButtonGreen");
        
      }
      else if(dealButtonVariable === 5){
        dealButtonVariable = 0;
        currentGame.emptyHands();
        currentGame.generatePlayersHand();
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